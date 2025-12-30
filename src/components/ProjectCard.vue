<script setup lang="ts">
import { inject, type Ref } from 'vue'

interface Category {
  id: string
  name: { zh: string; en: string }
  icon: string
  description: { zh: string; en: string }
}

interface Project {
  name: { zh: string; en: string }
  category: string
  url: string
  description: { zh: string; en: string }
  tags: string[]
}

defineProps<{
  project: Project
  category?: Category
}>()

const locale = inject<Ref<'zh' | 'en'>>('locale')
const t = inject<(zh: string, en: string) => string>('t')

const getText = (obj: { zh: string; en: string }) => {
  return locale?.value === 'zh' ? obj.zh : obj.en
}
</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="card p-6 block hover:-translate-y-1 transition-transform duration-300"
  >
    <div class="flex items-start justify-between mb-3">
      <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
        {{ getText(project.name) }}
      </h4>
      <span v-if="category" class="text-2xl">{{ category.icon }}</span>
    </div>

    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
      {{ getText(project.description) }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      {{ t('访问项目', 'Visit Project') }}
    </div>
  </a>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
