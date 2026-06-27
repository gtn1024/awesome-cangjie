<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

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

defineProps<{
  project: Project
  category?: Category
}>()

const locale = inject<Ref<'zh' | 'en'>>('locale')

function getText(obj: { zh: string, en: string }) {
  return locale?.value === 'zh' ? obj.zh : obj.en
}

// Derive a clean host label (github / gitcode) from the repository URL.
function hostFrom(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '')
  }
  catch {
    return 'Repository'
  }
}
</script>

<template>
  <a
    :href="project.repository"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative flex flex-col card card-interactive p-5"
  >
    <div class="flex items-start justify-between gap-3 mb-2">
      <h4 class="text-[15px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ getText(project.name) }}
      </h4>
      <span v-if="category" class="shrink-0 text-xs font-mono text-gray-400 dark:text-gray-600 pt-0.5">
        {{ getText(category.name) }}
      </span>
    </div>

    <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
      {{ getText(project.description) }}
    </p>

    <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5">
      <span
        v-for="tag in project.tags.slice(0, 4)"
        :key="tag"
        class="text-xs text-gray-500 dark:text-gray-500"
      >
        <span class="text-gray-300 dark:text-gray-700 mr-0.5">#</span>{{ tag }}
      </span>
      <span class="ml-auto inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-600 font-mono">
        {{ hostFrom(project.repository) }}
        <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </div>
  </a>
</template>
