# Awesome Cangjie [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)

精选的仓颉框架、库、软件和资源列表。

## Contents

- [Projects](#projects)
  - [仓颉开源](#仓颉开源)
  - [AI](#ai)
  - [Collection](#collection)
  - [Configuration](#configuration)
  - [Database](#database)
  - [Distributed Systems](#distributed-systems)
  - [eBPF](#ebpf)
  - [Editor / IDE](#editor--ide)
  - [Job Scheduling](#job-scheduling)
  - [Logging](#logging)
  - [Miscellaneous](#miscellaneous)
  - [Networking](#networking)
    - [HTTP Client](#http-client)
  - [Science and Data Analysis](#science-and-data-analysis)
  - [Security](#security)
  - [Web](#web)
- [Resources](#resources)

## Projects

### 仓颉开源

- [仓颉编译器](https://gitcode.com/Cangjie/cangjie_compiler) - 仓颉编译器源码及 cjdb 调试工具。
- [仓颉运行时](https://gitcode.com/Cangjie/cangjie_runtime) - 仓颉编程语言运行时与标准库。
- [仓颉扩展库](https://gitcode.com/Cangjie/cangjie_stdx) - 仓颉编程语言提供了 stdx 模块，该模块提供了网络、安全等领域的通用能力。
- [仓颉命令行工具](https://gitcode.com/Cangjie/cangjie_tools) - 仓颉编程语言命令行工具，包括仓颉包管理工具、仓颉格式化工具、仓颉多语言桥接工具及仓颉语言服务。
- [仓颉测试](https://gitcode.com/Cangjie/cangjie_test) - 仓颉编程语言测试用例。

### AI

- [CangjieMagic](https://gitcode.com/Cangjie-TPC/CangjieMagic) - LLM Agent 开发框架基于仓颉编程语言构建，主要特性包括：Agent DSL、支持MCP协议、支持模块化调用、支持智能任务规划。

### Collection

- [deque4cj](https://gitcode.com/SIGCANGJIE/deque4cj) - deque4cj是一个用 Cangjie 语言实现的高效双端队列（Deque）库，支持灵活的元素插入、删除和动态容量管理。

### Configuration

- [cangjie_toml](https://gitcode.com/PermissionDog/cangjie_toml) - 仓颉的 TOML 解析器。
- [cjjson](https://gitcode.com/Cangjie-TPC/cangjieJSON) - 仓颉的 JSON 序列化/反序列化库。
- [CJson](https://gitcode.com/Cangjie-TPC/CJson) - JSON 序列化/反序列化工具。
- [ini4cj](https://gitcode.com/Cangjie-TPC/ini4cj) - INI 文件解析器。
- [toml4cj](https://gitcode.com/Cangjie-TPC/toml4cj) - TOML 格式解析。
- [xmlstream](https://gitcode.com/Cangjie-TPC/xml_stream) - XML 序列化反序列化库，提供与 XML 操作相关的 STAX 风格接口，符合 XML 1.0 规范，并支持命名空间。
- [xml-ffi](https://gitcode.com/Cangjie-TPC/xml-ffi) - XML 格式解析库，支持 XML DOM 和 XML SAX 解析模式。
- [yaml4cj](https://gitcode.com/Cangjie-TPC/yaml4cj) - 快速可靠地解析和生成 YAML 数据，支持 YAML 1.1 和 1.2 的大部分内容。

### Database

- [mysqlclient4cj](https://gitcode.com/Cangjie-SIG/mysql-driver) - 仓颉原生 MySQL 客户端驱动，支持 TIDB、OceanBase 等。
- [opengauss-driver](https://gitcode.com/Cangjie-TPC/opengauss-driver) - openGauss 和 PostgreSQL 客户端驱动。
- [redis-sdk](https://gitcode.com/Cangjie-TPC/redis-sdk) - Redis 客户端 SDK，由仓颉语言实现。兼容 [Jedis](https://github.com/redis/jedis) API。支持 RESP2 和 RESP3 协议。

### Distributed Systems

- [Dapr Cangjie SDK](https://gitcode.com/PermissionDog/dapr-cangjie-sdk) - 仓颉语言实现的 Dapr SDK。
- [mqtt4cj](https://gitcode.com/Cangjie-TPC/mqtt4cj) - MQTT 消息队列遥测传输协议库。
- [s3-sdk](https://gitcode.com/Cangjie-TPC/s3-sdk) - AWS S3 客户端 SDK 实现，适用于仓颉。

### eBPF

- [cangjie_libbpf](https://gitcode.com/hevienz/cangjie_libbpf) - 仓颉的 libbpf 绑定。

### Editor / IDE

- [Cangjie-language-Neovim](https://github.com/shiro-42/Cangjie-language-Neovim) - Neovim 的简单语法高亮。
- [CodeArts IDE for Cangjie](https://devcloud.cn-north-4.huaweicloud.com/codeartside/home?product=cangjie)
- [intellij-cangjie](https://gitcode.com/OpenCangjieCommunity/intellij-cangjie) - IntelliJ IDEA 的仓颉插件。

### Job Scheduling

- [quartz4cj](https://gitcode.com/Cangjie-TPC/quartz4cj) - 功能丰富的开源作业调度库。

### Logging

- [log-cj](https://gitcode.com/Cangjie-TPC/log-cj) - 日志管理框架。
- [seq4cj](https://gitcode.com/PermissionDog/seq4cj) - Cangjie 语言标准库 log.Logger 的 seq 日志客户端实现。

### Miscellaneous

- [charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj) - 常用字符编码集合库。
- [cjdotenv](https://github.com/gtn1024/cjdotenv) - 仓颉库用于从 `.env` 加载环境变量。
- [cjxe](https://github.com/gtn1024/cjxe) - 仓颉的快速命令行参数解析器。
- [derive_macros](https://gitcode.com/OpenCangjieCommunity/derive_macros): 为仓颉导出宏。
- [filetype4cj](https://gitcode.com/Cangjie-SIG/filetype4cj) - 通过检查魔数签名推断文件和 MIME 类型。
- [is_png_cj](https://gitcode.com/PermissionDog/is-png-cj) - 检测文件是否为 PNG 图像。
- [snowflake4cj](https://github.com/gtn1024/snowflake4cj) - 仓颉的 Snowflake 算法实现。

### Networking

#### TCP / UDP

- [hyperion](https://gitcode.com/Cangjie-TPC/hyperion) - 一个用仓颉语言实现的 TCP 通信框架，支持添加自定义编码器和 IoFilter 以处理推送和弹出消息。

#### HTTP Client

- [ginger](https://gitcode.com/Chemxy/ginger) - 轻量级 HTTP 客户端，支持拦截请求和响应。
- [httpclient4cj](https://gitcode.com/Cangjie-TPC/httpclient4cj) - 高效的 HTTP 客户端。

### Science and Data Analysis

- [matrix4cj](https://gitcode.com/Cangjie-TPC/matrix4cj) - 用于构建和操作稠密矩阵的线性代数库。
- [stats4cj](https://gitcode.com/Chemxy/stats4cj) - 由仓颉实现的数学统计库。

### Security

- [jwt4cj](https://gitcode.com/Cangjie-TPC/jwt4cj) - 生成和验证 JSON Web Tokens，支持 Payload 验证、HMAC 算法签名和验证、RSA 算法签名和验证，以及 ECDSA 算法签名和验证。

### Web

- [easyapi](https://gitcode.com/OpenCangjieCommunity/easyapi) - 轻量级 Http 服务框架。
- [spire](https://gitcode.com/soulsoft/spire) - Spire (天擎) 一个基于仓颉语言开发、借鉴 ASP.NET Core 设计哲学的现代化 Web 框架。我们与仓颉官方团队共同研发，致力于打造轻量级、高性能、可扩展的应用开发体验。
- [tea](https://gitcode.com/yishengTH/tea) - 轻量级、函数式、高效的 HTTP Web 框架。

## Resources

- [Cangjie Official Website](https://cangjie-lang.cn/)
- [Cangjie Playground](https://playground.cj.zxilly.dev) - [Run cangjie code online](https://github.com/Zxilly/playground-cj)
