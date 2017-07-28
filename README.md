### 使用
```
npm i               // 安装依赖
npm run dev         // 本地开发
npm run build       // 生产部署
```
--------------

### 目录结构
	|-- build                                  // webpack配置文件
	|-- config                                 // 项目打包路径
	|-- static                                 // 静态文件目录
	|-- src                                    // 源码目录
	|   |-- components                         // 组件
	|       |-- common                         // 全局
	|           |-- about.vue                  // 关于页面
	|           |-- index.vue                  // 入口
	|           |-- login.vue                  // 登录页面
	|   	|-- page                           // 主要页面
	|           |-- eharts.vue                 // 百度echarts
	|           |-- form.vue                   // 表单
	|           |-- rtf.vue                    // 富文本框
	|           |-- markdown-viewer.vue        // markdown显示
	|           |-- markdown-editor.vue        // markdown编辑器
	|           |-- table.vue                  // 表格
	|           |-- upload.vue                 // 文件上传
	| 		|-- fetch						   // ajax请求文件 axios
	|           |-- api.js
	| 		|-- store							//vux 全局状态保持
	|           |-- index.js					//入口文件
	|           |-- type.js					    //全局静态变量
	|			|--modules						//模块区分
	|		 		|--mine.js					//主要逻辑文件
	|   |-- App.vue                            // 页面入口
	|   |-- main.js                            // 程序入口
	|-- .babelrc                               // ES6语法编译配置
	|-- .editorconfig                          // 代码编写规格
	|-- .gitignore                             // push忽略文件
	|-- index.html                             // 入口html页面
	|-- package.json                           // 依赖及配置
	|-- README.md                              // 简介
	
--------------
### License
[MIT](https://opensource.org/licenses/MIT)