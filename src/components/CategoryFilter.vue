<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

interface Category {
  id: string
  name: { zh: string, en: string }
  icon: string
  description: { zh: string, en: string }
}

defineProps<{
  categories: Category[]
  stats: Map<string, number>
}>()

const selectedCategory = defineModel<string>()
const locale = inject<Ref<'zh' | 'en'>>('locale')

function getText(obj: { zh: string, en: string }) {
  return locale?.value === 'zh' ? obj.zh : obj.en
}
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
    <button
      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors duration-150 border"
      :class="selectedCategory === 'all'
        ? 'border-blue-600 bg-blue-600 text-white'
        : 'border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-dark-elevated hover:text-gray-900 dark:hover:text-gray-100'"
      @click="selectedCategory = 'all'"
    >
      {{ locale === 'zh' ? '全部' : 'All' }}
      <span
        class="font-mono tabular-nums text-xs"
        :class="selectedCategory === 'all' ? 'text-blue-100' : 'text-gray-400 dark:text-gray-600'"
      >
        {{ categories.reduce((sum, cat) => sum + (stats.get(cat.id) || 0), 0) }}
      </span>
    </button>

    <button
      v-for="category in categories"
      :key="category.id"
      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors duration-150 border"
      :class="selectedCategory === category.id
        ? 'border-blue-600 bg-blue-600 text-white'
        : 'border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-dark-elevated hover:text-gray-900 dark:hover:text-gray-100'"
      @click="selectedCategory = category.id"
    >
      {{ getText(category.name) }}
      <span
        class="font-mono tabular-nums text-xs"
        :class="selectedCategory === category.id ? 'text-blue-100' : 'text-gray-400 dark:text-gray-600'"
      >
        {{ stats.get(category.id) || 0 }}
      </span>
    </button>
  </div>
</template>
