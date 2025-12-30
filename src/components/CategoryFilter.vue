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
  <div class="flex flex-wrap gap-2">
    <button
      class="px-4 py-2 rounded-lg border-2 transition-all duration-300" :class="[
        selectedCategory === 'all'
          ? 'border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300'
          : 'border-gray-200 dark:border-dark-border hover:border-cyan-300 dark:hover:border-cyan-700',
      ]"
      @click="selectedCategory = 'all'"
    >
      {{ locale === 'zh' ? '全部' : 'All' }}
      <span class="ml-1 px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-xs">
        {{ categories.reduce((sum, cat) => sum + (stats.get(cat.id) || 0), 0) }}
      </span>
    </button>

    <button
      v-for="category in categories"
      :key="category.id"
      class="px-4 py-2 rounded-lg border-2 transition-all duration-300" :class="[
        selectedCategory === category.id
          ? 'border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300'
          : 'border-gray-200 dark:border-dark-border hover:border-cyan-300 dark:hover:border-cyan-700',
      ]"
      @click="selectedCategory = category.id"
    >
      <span class="mr-1">{{ category.icon }}</span>
      {{ getText(category.name) }}
      <span class="ml-1 px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-xs">
        {{ stats.get(category.id) || 0 }}
      </span>
    </button>
  </div>
</template>
