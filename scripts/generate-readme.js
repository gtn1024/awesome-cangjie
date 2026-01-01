import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const yamlPath = path.join(__dirname, '../projects.yaml')
const readmePath = path.join(__dirname, '../README.md')
const readmeEnPath = path.join(__dirname, '../README-en.md')

try {
  // 读取 YAML 文件
  const yamlContent = fs.readFileSync(yamlPath, 'utf8')
  const data = yaml.load(yamlContent)

  // 生成中文 README
  const zhContent = generateReadme(data, 'zh')
  fs.writeFileSync(readmePath, zhContent, 'utf8')

  // 生成英文 README
  const enContent = generateReadme(data, 'en')
  fs.writeFileSync(readmeEnPath, enContent, 'utf8')
}
catch (error) {
  console.error('生成失败:', error)
  process.exit(1)
}

function generateReadme(data, lang) {
  const { categories, projects } = data

  // 语言切换提示
  const langSwitch = lang === 'zh'
    ? '[English](README-en.md) | 中文'
    : 'English | [中文](README.md)'

  // 根据语言设置标题
  const title = '# Awesome Cangjie [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)'

  const description = lang === 'zh'
    ? '精选的仓颉框架、库、软件和资源列表。'
    : 'A curated list of awesome Cangjie frameworks, libraries, software and resources.'

  const contentsTitle = lang === 'zh' ? '## Contents' : '## Contents'
  const projectsTitle = lang === 'zh' ? '## Projects' : '## Projects'
  const resourcesTitle = lang === 'zh' ? '## Resources' : '## Resources'
  const starHistoryTitle = lang === 'zh' ? '## Star History' : '## Star History'

  // 生成目录
  let toc = `${contentsTitle}\n\n`
  toc += '- [Projects](#projects)\n'
  for (const cat of categories) {
    const anchor = generateAnchor(cat.name[lang])
    const indent = '  - '
    toc += `${indent}[${cat.name[lang]}](#${anchor})\n`
  }
  toc += '- [Resources](#resources)\n'

  // 生成项目列表
  let projectsSection = `${projectsTitle}\n\n`

  // 按分类组织项目
  for (const cat of categories) {
    const catProjects = projects.filter(p => p.category === cat.id)
    if (catProjects.length === 0)
      continue

    const catName = cat.name[lang]
    const catDesc = cat.description[lang]
    const anchor = generateAnchor(catName)

    projectsSection += `### ${catName}\n\n`

    for (const project of catProjects) {
      const projName = project.name[lang]
      const projDesc = project.description[lang]
      const repository = project.repository

      // 如果是官方项目，添加官方标签
      const tags = project.tags || []
      const isOfficial = tags.includes('official')
      const officialBadge = isOfficial ? ' *(Official)*' : ''

      projectsSection += `- [${projName}](${repository})${officialBadge} - ${projDesc}\n`
    }

    projectsSection += '\n'
  }

  // 生成资源部分
  let resourcesSection = `${resourcesTitle}\n\n`
  if (lang === 'zh') {
    resourcesSection += '- [仓颉官网](https://cangjie-lang.cn/)\n'
    resourcesSection += '- [仓颉操练场](https://playground.cj.zxilly.dev) - [在线运行仓颉代码](https://github.com/Zxilly/playground-cj)\n'
  }
  else {
    resourcesSection += '- [Cangjie Official Website](https://cangjie-lang.cn/)\n'
    resourcesSection += '- [Cangjie Playground](https://playground.cj.zxilly.dev) - [Run cangjie code online](https://github.com/Zxilly/playground-cj)\n'
  }

  // 生成 Star History
  const starHistorySection = `${starHistoryTitle}\n\n[![Star History Chart](https://api.star-history.com/svg?repos=gtn1024/awesome-cangjie&type=Date)](https://www.star-history.com/#gtn1024/awesome-cangjie&Date)`

  return `${title}\n\n${description}\n\n${langSwitch}\n\n---\n\n${toc}\n${projectsSection}${resourcesSection}\n\n${starHistorySection}\n`
}

function generateAnchor(text) {
  // 生成 GitHub 风格的锚点
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-') // 空格替换为连字符
    .replace(/-+/g, '-') // 多个连字符合并为一个
    .trim()
}
