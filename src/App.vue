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
  <div class="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100">
    <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-dark-border bg-white/85 dark:bg-dark-bg/85 backdrop-blur-md">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex h-14 items-center justify-between">
          <a href="/" class="flex items-center gap-2.5 group">
            <img src="/cangjie-logo.svg" alt="" class="w-7 h-7 shrink-0">
            <span class="flex flex-col leading-none">
              <span class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Awesome Cangjie
              </span>
              <span class="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">
                {{ t('仓颉生态精选', 'Curated Cangjie ecosystem') }}
              </span>
            </span>
          </a>

          <nav class="flex items-center gap-1 sm:gap-2">
            <a
              href="https://github.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer"
              class="px-2.5 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://gitcode.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer"
              class="hidden sm:inline-flex px-2.5 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              GitCode
            </a>
            <button
              class="px-2.5 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              @click="setLocale(locale === 'zh' ? 'en' : 'zh')"
            >
              {{ locale === 'zh' ? 'EN' : '中文' }}
            </button>
            <button
              class="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
              :aria-label="t('切换主题', 'Toggle theme')"
              @click="toggleDarkMode"
            >
              <svg v-if="isDark" class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <svg v-else class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t border-gray-200 dark:border-dark-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="max-w-2xl mx-auto text-center">
          <Busuanzi />
        </div>
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-500">
          <span>{{ t('为仓颉社区维护', 'Maintained for the Cangjie community') }}</span>
          <span class="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
          <a href="https://github.com/gtn1024/awesome-cangjie" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
            {{ t('在 GitHub 上贡献', 'Contribute on GitHub') }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
