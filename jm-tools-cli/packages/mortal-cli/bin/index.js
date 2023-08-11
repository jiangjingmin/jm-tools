#!/usr/bin/env node
const yargs = require("yargs");
const path = require("path");
const { inquirerPrompt } = require("./inquirer");
const { checkMkdirExists, copyTemplate } = require("./copy");
const { install } = require("./manager");

// console.log("name", yargs.argv.name);

/**
 * 生成一个模板的子命令
 */

yargs.command(
  ["create", "c"],
  "新建一个模板",
  function (yargs) {
    return yargs.option("name", {
      alias: "n",
      demand: true,
      describe: "模板名称",
      type: "string",
    });
  },
  function (argv) {
    // 拷贝文件夹
    // inquirerPrompt(argv).then((answers) => {
    //   const { name, type } = answers;
    //   const isMkdirExists = checkMkdirExists(
    //     path.resolve(process.cwd(), `./src/pages/${name}`)
    //   );
    //   if (isMkdirExists) {
    //     console.log(`${name}文件夹已经存在`);
    //   } else {
    //     copyDir(
    //       path.resolve(__dirname, `./template/${type}`),
    //       path.resolve(process.cwd(), `./src/pages/${name}`)
    //     );
    //   }
    // });

    // 拷贝文件
    // inquirerPrompt(argv).then((answers) => {
    //   const { name, type } = answers;
    //   const isMkdirExists = checkMkdirExists(
    //     path.resolve(process.cwd(), `./src/pages/${name}/index.js`)
    //   );
    //   if (isMkdirExists) {
    //     console.log(`${name}/index.js文件已经存在`);
    //   } else {
    //     copyFile(
    //       path.resolve(__dirname, `./template/${type}/index.js`),
    //       path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
    //       {
    //         name,
    //       }
    //     );
    //   }
    // });

    // 拷贝文件到指定地方
    inquirerPrompt(argv).then((answers) => {
      const { name, type } = answers;
      const isMkdirExists = checkMkdirExists(
        path.resolve(process.cwd(), `./src/pages/${name}/index.js`)
      );
      if (isMkdirExists) {
        console.log(`${name}/index.js文件已经存在`);
      } else {
        copyTemplate(
          path.resolve(__dirname, `./template/${type}/index.tpl`),
          path.resolve(process.cwd(), `./src/pages/${name}/index.js`),
          {
            name,
          }
        );
        install(process.cwd(), answers);
      }
    });
  }
).argv;
