#!/usr/bin/env node

const program = require('commander')
program.version(require('../package.json').version)
program.command('create <path> [config]')
    .description('创建文件 path 创建文件夹路径  config 配置文件的路径')
    .action(require('../lib/createFile/index').create)

program.parse(process.argv)