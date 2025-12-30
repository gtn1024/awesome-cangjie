import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const yamlPath = path.join(__dirname, '../projects.yaml')
const jsonPath = path.join(__dirname, '../public/data/projects.json')

// 确保目录存在
const outputDir = path.dirname(jsonPath)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

try {
  // 读取 YAML 文件
  const yamlContent = fs.readFileSync(yamlPath, 'utf8')
  const data = yaml.load(yamlContent)

  // 写入 JSON 文件
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8')
}
catch (error) {
  console.error('转换失败:', error)
  process.exit(1)
}
