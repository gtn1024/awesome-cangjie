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
  url: string
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
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <section class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-gradient-x">
        {{ t('探索仓颉生态系统', 'Explore Cangjie Ecosystem') }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ t('发现精选的仓颉框架、库和资源，加速你的开发之旅', 'Discover curated Cangjie frameworks, libraries, and resources to accelerate your development') }}
      </p>
    </section>

    <!-- Stats -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div class="card p-6 text-center">
        <div class="text-3xl font-bold gradient-text">
          {{ data.projects.length }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {{ t('项目', 'Projects') }}
        </div>
      </div>
      <div class="card p-6 text-center">
        <div class="text-3xl font-bold gradient-text">
          {{ data.categories.length }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {{ t('分类', 'Categories') }}
        </div>
      </div>
      <div class="card p-6 text-center">
        <div class="text-3xl font-bold gradient-text">
          Open Source
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {{ t('开源社区', 'Community') }}
        </div>
      </div>
      <div class="card p-6 text-center">
        <div class="text-3xl font-bold gradient-text">
          Growing
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {{ t('持续增长', 'Growing') }}
        </div>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="mb-8 space-y-4">
      <SearchBar
        v-model="searchQuery"
        :placeholder="t('搜索项目名称、描述或标签...', 'Search project names, descriptions, or tags...')"
      />
      <CategoryFilter
        v-model="selectedCategory"
        :categories="data.categories"
        :stats="categoryStats"
      />
    </section>

    <!-- Results -->
    <section>
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          <template v-if="selectedCategory === 'all'">
            {{ t('所有项目', 'All Projects') }}
          </template>
          <template v-else>
            {{ getText(data.categories.find(c => c.id === selectedCategory)?.name || { zh: '', en: '' }) }}
          </template>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
            ({{ filteredProjects.length }} {{ t('个项目', 'projects') }})
          </span>
        </h3>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">
          🔍
        </div>
        <p class="text-gray-500 dark:text-gray-400">
          {{ t('未找到匹配的项目', 'No matching projects found') }}
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
