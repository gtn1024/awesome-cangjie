<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import Busuanzi from './components/Busuanzi.vue'

const isDark = ref(false)
const locale = ref<'zh' | 'en'>('zh')

function toggleDarkMode() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('darkMode', String(isDark.value))
}

function setLocale(lang: 'zh' | 'en') {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

function t(zh: string, en: string) {
  return locale.value === 'zh' ? zh : en
}

provide('locale', locale)
provide('setLocale', setLocale)
provide('t', t)

onMounted(() => {
  const savedDark = localStorage.getItem('darkMode')
  if (savedDark === 'true' || (!savedDark && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  const savedLocale = localStorage.getItem('locale') as 'zh' | 'en' | null
  if (savedLocale) {
    locale.value = savedLocale
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-dark-bg dark:via-slate-900 dark:to-blue-950">
    <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200 dark:border-dark-border">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="text-4xl animate-float">
              🎯
            </div>
            <div>
              <h1 class="text-2xl font-bold gradient-text">
                Awesome Cangjie
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('精选的仓颉框架、库和资源', 'Curated list of Cangjie frameworks, libraries, and resources') }}
              </p>
            </div>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <a href="https://gitcode.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              GitCode
            </a>
            <a href="https://github.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <button
              class="px-3 py-2 rounded-lg bg-gray-100 dark:bg-dark-surface hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
              :class="locale === 'zh' ? 'text-cyan-600 dark:text-cyan-400' : 'text-blue-600 dark:text-blue-400'"
              @click="setLocale(locale === 'zh' ? 'en' : 'zh')"
            >
              {{ locale === 'zh' ? '中文' : 'English' }}
            </button>
            <button
              class="p-2 rounded-lg bg-gray-100 dark:bg-dark-surface hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              @click="toggleDarkMode"
            >
              <span v-if="isDark" class="text-xl">☀️</span>
              <span v-else class="text-xl">🌙</span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-gray-200 dark:border-dark-border bg-white/50 dark:bg-dark-bg/50 backdrop-blur-sm mt-20">
      <div class="container mx-auto px-4 py-8">
        <div class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center my-8">
          <Busuanzi />
        </div>
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p class="mb-2">
            {{ t('为仓颉社区制作', 'Made with ❤️ for the Cangjie community') }}
          </p>
          <p class="text-sm">
            <a href="https://github.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-500 transition-colors">
              {{ t('在 GitHub 上贡献', 'Contribute on GitHub') }}
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
