# Awesome Cangjie [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome Cangjie frameworks, libraries, software and resources.

English | [中文](README.md)

---

## Contents

- [Projects](#projects)
  - [Cangjie Open Source](#cangjie-open-source)
  - [AI](#ai)
  - [Collection](#collection)
  - [Compression](#compression)
  - [Configuration](#configuration)
  - [Database](#database)
  - [Distributed Systems](#distributed-systems)
  - [eBPF](#ebpf)
  - [CLI Tools](#cli-tools)
  - [Developer Tools](#developer-tools)
  - [Editor / IDE](#editor-ide)
  - [GUI](#gui)
  - [Job Scheduling](#job-scheduling)
  - [Logging](#logging)
  - [Miscellaneous](#miscellaneous)
  - [Networking](#networking)
  - [Science and Data Analysis](#science-and-data-analysis)
  - [Security](#security)
  - [Web](#web)
- [Resources](#resources)

## Projects

### Cangjie Open Source

- [Cangjie Compiler](https://gitcode.com/Cangjie/cangjie_compiler) *(Official)* - Cangjie compiler source code and cjdb debugging tool.
- [Cangjie Runtime](https://gitcode.com/Cangjie/cangjie_runtime) *(Official)* - Cangjie programming language runtime and standard library.
- [Cangjie Standard Extension](https://gitcode.com/Cangjie/cangjie_stdx) *(Official)* - Cangjie programming language provides the stdx module, which offers general capabilities in networking, security, and other domains.
- [Cangjie CLI Tools](https://gitcode.com/Cangjie/cangjie_tools) *(Official)* - Cangjie programming language command-line tools, including package manager, formatter, FFI tools, and language server.
- [Cangjie Test](https://gitcode.com/Cangjie/cangjie_test) *(Official)* - Cangjie programming language test cases.

### AI

- [CangjieMagic](https://gitcode.com/Cangjie-TPC/CangjieMagic) - LLM Agent development framework built with Cangjie. Main features: Agent DSL, MCP protocol support, modular invocation, intelligent task planning.
- [CangChain](https://gitcode.com/Cangjie-TPC/CangChain) - Multi-agent collaboration framework based on Cangjie.

### Collection

- [deque4cj](https://gitcode.com/SIGCANGJIE/deque4cj) - deque4cj is an efficient double-ended queue library implemented in Cangjie, supporting flexible element insertion, deletion, and dynamic capacity management.
- [cjgrapht](https://gitcode.com/Cangjie-SIG/cjgrapht) - Graph theory data structures and algorithms library, providing various graph structure implementations and common graph algorithms.

### Compression

- [zip4cj](https://gitcode.com/Cangjie-TPC/zip4cj) - Library for creating and extracting ZIP compression format.

### Configuration

- [cangjie_toml](https://gitcode.com/PermissionDog/cangjie_toml) - TOML parser for Cangjie.
- [cjjson](https://gitcode.com/Cangjie-TPC/cangjieJSON) - JSON serialization/deserialization library for Cangjie.
- [CJson](https://gitcode.com/Cangjie-TPC/CJson) - JSON serialization/deserialization tool.
- [ini4cj](https://gitcode.com/Cangjie-TPC/ini4cj) - INI file parser.
- [toml4cj](https://gitcode.com/Cangjie-TPC/toml4cj) - TOML format parser.
- [xmlstream](https://gitcode.com/Cangjie-TPC/xml_stream) - XML serialization/deserialization library providing STAX-style interfaces for XML operations, compliant with XML 1.0 specification and supporting namespaces.
- [xml-ffi](https://gitcode.com/Cangjie-TPC/xml-ffi) - XML format parsing library supporting both XML DOM and XML SAX parsing modes.
- [yaml4cj](https://gitcode.com/Cangjie-TPC/yaml4cj) - Fast and reliable YAML parsing and generation, supporting most of YAML 1.1 and 1.2 specifications.

### Database

- [mysqlclient4cj](https://gitcode.com/Cangjie-SIG/mysql-driver) - Native MySQL client driver for Cangjie, supporting TiDB, OceanBase, etc.
- [opengauss-driver](https://gitcode.com/Cangjie-TPC/opengauss-driver) - openGauss and PostgreSQL client driver.
- [redis-sdk](https://gitcode.com/Cangjie-TPC/redis-sdk) - Redis client SDK implemented in Cangjie. Compatible with Jedis API. Supports RESP2 and RESP3 protocols.
- [sqlsharp](https://gitcode.com/soulsoft/sqlsharp) - An ORM inspired by C#'s ADO.NET + Dapper design.
- [simplekv](https://gitcode.com/Cangjie-SIG/simplekv) - Efficient and concise key-value storage library implemented in Cangjie, supporting fast data lookup, insertion, and deletion, with advanced features like sorted data retrieval, range scanning, and concurrent safety, suitable for high-performance data storage scenarios.

### Distributed Systems

- [Dapr Cangjie SDK](https://gitcode.com/PermissionDog/dapr-cangjie-sdk) - Dapr SDK implemented in Cangjie language.
- [mqtt4cj](https://gitcode.com/Cangjie-TPC/mqtt4cj) - MQTT message queue telemetry transport protocol library.
- [s3-sdk](https://gitcode.com/Cangjie-TPC/s3-sdk) - AWS S3 client SDK implementation for Cangjie.
- [gateway-cj](https://gitcode.com/Cangjie-SIG/gateway-cj) - Microservice gateway implemented in Cangjie.

### eBPF

- [cangjie_libbpf](https://gitcode.com/hevienz/cangjie_libbpf) - libbpf bindings for Cangjie.

### CLI Tools

- [cjxe](https://github.com/gtn1024/cjxe) - Fast command-line argument parser for Cangjie.
- [cli-cj](https://gitcode.com/Cangjie-SIG/cli-cj) - Command-line framework written in Cangjie, designed to simplify the creation of CLI interfaces. Provides a declarative way to define commands, subcommands, and parameters, automatically handling input parsing, help generation, and parameter validation.
- [terminalcolor](https://gitcode.com/Cangjie-SIG/terminalcolor) - Intuitive terminal color library that's easy to use.
- [ansies4cj](https://gitcode.com/Cangjie-SIG/ansies4cj) - ANSI escape sequence library, providing terminal colors, styles, cursor control, and screen operations.

### Developer Tools

- [derive_macros](https://gitcode.com/OpenCangjieCommunity/derive_macros) - Derive macros for Cangjie.
- [cjbind](https://github.com/cjbind/cjbind) - Automatically generate FFI binding code from C libraries to Cangjie.
- [J2CJ](https://gitcode.com/Cangjie-SIG/j2cj) - Java to Cangjie source code transformation tool based on AST conversion, compatible with Java ecosystem, simplifying code migration.

### Editor / IDE

- [CodeArts IDE for Cangjie](https://devcloud.cn-north-4.huaweicloud.com/codeartside/home?product=cangjie) *(Official)* - Huawei Cloud CodeArts IDE for Cangjie.
- [intellij-cangjie](https://gitcode.com/OpenCangjieCommunity/intellij-cangjie) - Cangjie plugin for IntelliJ IDEA.
- [Cangjie-language-Neovim](https://github.com/shiro-42/Cangjie-language-Neovim) - Simple syntax highlighting for Neovim.

### GUI

- [webview-sdk](https://gitcode.com/service/webview-sdk) - WebView bindings for Cangjie; develop desktop applications using any web technology.
- [CJQT](https://gitcode.com/Cangjie-TPC/CJQT) - Qt binding library for Cangjie language.

### Job Scheduling

- [quartz4cj](https://gitcode.com/Cangjie-TPC/quartz4cj) - Feature-rich open source job scheduling library.

### Logging

- [log-cj](https://gitcode.com/Cangjie-TPC/log-cj) - Logging management framework.
- [seq4cj](https://gitcode.com/PermissionDog/seq4cj) - Seq logging client implementation for Cangjie's standard library log.Logger.

### Miscellaneous

- [charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj) - Common character encoding collection library.
- [cjdotenv](https://github.com/gtn1024/cjdotenv) - Cangjie library for loading environment variables from .env files.
- [filetype4cj](https://gitcode.com/Cangjie-SIG/filetype4cj) - Infer file and MIME types by checking magic number signatures.
- [is_png_cj](https://gitcode.com/PermissionDog/is-png-cj) - Detect whether a file is a PNG image.
- [snowflake4cj](https://github.com/gtn1024/snowflake4cj) - Snowflake algorithm implementation for Cangjie.

### Networking

- [ginger](https://gitcode.com/Chemxy/ginger) - Lightweight HTTP client supporting request and response interception.
- [httpclient4cj](https://gitcode.com/Cangjie-TPC/httpclient4cj) - Efficient HTTP client.
- [hyperion](https://gitcode.com/Cangjie-TPC/hyperion) - A TCP communication framework implemented in Cangjie, supporting custom encoders and IoFilters for handling message push and pop.
- [feign4cj](https://gitcode.com/Cangjie-SIG/feign4cj) - Macro-based declarative HTTP client inspired by Feign, defining HTTP APIs through interfaces.

### Science and Data Analysis

- [matrix4cj](https://gitcode.com/Cangjie-TPC/matrix4cj) - Linear algebra library for building and manipulating dense matrices.
- [stats4cj](https://gitcode.com/Chemxy/stats4cj) - Mathematical statistics library implemented in Cangjie.
- [cjnum](https://gitcode.com/Cangjie-SIG/cjnum) - Numerical computing library for Cangjie, providing mathematical functions, scientific computing, and numerical analysis capabilities.

### Security

- [jwt4cj](https://gitcode.com/Cangjie-TPC/jwt4cj) - Generate and verify JSON Web Tokens, supporting payload validation, HMAC signing and verification, RSA signing and verification, and ECDSA signing and verification.
- [md2_cj](https://gitcode.com/Cangjie-TPC/md2_cj) - Cangjie version of MD2 digest algorithm.

### Web

- [cjoy](https://gitcode.com/Cangjie-SIG/cjoy) - A high-performance, scalable, lightweight, and easy-to-use Cangjie web framework. RESTful, macro routing, JSON, middleware, parameter binding and validation, file upload/download, MCP...
- [spire](https://gitcode.com/soulsoft/spire) - Spire is a modern web framework developed in Cangjie, inspired by ASP.NET Core design philosophy. Developed jointly with the Cangjie official team, dedicated to creating a lightweight, high-performance, scalable application development experience.
- [tea](https://gitcode.com/yishengTH/tea) - Lightweight, functional, efficient HTTP web framework.
- [easyapi](https://gitcode.com/OpenCangjieCommunity/easyapi) - Lightweight HTTP service framework.
- [fountain](https://gitcode.com/Cangjie-SIG/fountain) - A comprehensive toolkit for server application development.
- [mustache-cj](https://gitcode.com/Cangjie-SIG/mustache-cj) - Mustache template engine implemented in Cangjie.

## Resources

- [Cangjie Official Website](https://cangjie-lang.cn/)
- [Cangjie Playground](https://playground.cj.zxilly.dev) - [Run cangjie code online](https://github.com/Zxilly/playground-cj)


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=gtn1024/awesome-cangjie&type=Date)](https://www.star-history.com/#gtn1024/awesome-cangjie&Date)
