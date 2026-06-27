<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, inject, onMounted, ref } from 'vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import ProjectCard from '../components/ProjectCard.vue'
import SearchBar from '../components/SearchBar.vue'

interface Category {
  id: string
  name: { zh: string, en: string }
  icon: string
  description: { zh: string, en: string }
}

interface Project {
  name: { zh: string, en: string }
  category: string
  repository: string
  description: { zh: string, en: string }
  tags: string[]
}

interface Data {
  categories: Category[]
  projects: Project[]
}

const locale = inject<Ref<'zh' | 'en'>>('locale')
const t = inject<(zh: string, en: string) => string>('t')!

const data = ref<Data>({ categories: [], projects: [] })
const selectedCategory = ref<string>('all')
const searchQuery = ref('')

onMounted(async () => {
  const response = await fetch('/data/projects.json')
  data.value = await response.json()
})

function getText(obj: { zh: string, en: string } | string) {
  if (typeof obj === 'string')
    return obj
  return locale?.value === 'zh' ? obj.zh : obj.en
}

const filteredProjects = computed(() => {
  let projects = data.value.projects

  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    projects = projects.filter(p => p.category === selectedCategory.value)
  }

  // 按搜索词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    projects = projects.filter((p) => {
      const name = getText(p.name).toLowerCase()
      const desc = getText(p.description).toLowerCase()
      const tags = p.tags.join(' ').toLowerCase()

      return name.includes(query) || desc.includes(query) || tags.includes(query)
    })
  }

  return projects
})

const categoryStats = computed(() => {
  const stats = new Map<string, number>()
  data.value.projects.forEach((project) => {
    stats.set(project.category, (stats.get(project.category) || 0) + 1)
  })
  return stats
})

const totalProjects = computed(() => data.value.projects.length)
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <!-- Hero -->
    <section class="mb-10">
      <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
        {{ t('探索仓颉生态系统', 'Explore the Cangjie ecosystem') }}
      </h2>
      <p class="mt-3 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
        {{ t('精选的仓颉框架、库和资源，帮你快速找到趁手的工具。', 'A curated index of Cangjie frameworks, libraries, and resources to speed up your work.') }}
      </p>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
        <span class="font-mono tabular-nums text-gray-900 dark:text-gray-100">{{ totalProjects }}</span>
        {{ t(' 个项目 · ', ' projects · ') }}
        <span class="font-mono tabular-nums text-gray-900 dark:text-gray-100">{{ data.categories.length }}</span>
        {{ t(' 个分类', ' categories') }}
      </p>
    </section>

    <!-- Search and Filter -->
    <section class="mb-8 space-y-4">
      <SearchBar
        v-model="searchQuery"
        :placeholder="t('搜索项目名称、描述或标签…', 'Search by name, description, or tag…')"
      />
      <CategoryFilter
        v-model="selectedCategory"
        :categories="data.categories"
        :stats="categoryStats"
      />
    </section>

    <!-- Results -->
    <section>
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-200 dark:border-dark-border">
        <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
          <template v-if="selectedCategory === 'all'">
            {{ t('所有项目', 'All projects') }}
          </template>
          <template v-else>
            {{ getText(data.categories.find(c => c.id === selectedCategory)?.name || { zh: '', en: '' }) }}
          </template>
        </h3>
        <span class="text-sm text-gray-500 dark:text-gray-500 font-mono tabular-nums">
          {{ filteredProjects.length }}
        </span>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400">
          {{ t('未找到匹配的项目', 'No matching projects found') }}
        </p>
        <p v-if="searchQuery || selectedCategory !== 'all'" class="mt-2 text-sm text-gray-400 dark:text-gray-600">
          <button class="hover:text-blue-600 dark:hover:text-blue-400" @click="searchQuery = ''; selectedCategory = 'all'">
            {{ t('清除筛选条件', 'Clear filters') }}
          </button>
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="getText(project.name)"
          :project="project"
          :category="data.categories.find(c => c.id === project.category)"
        />
      </div>
    </section>
  </div>
</template>
