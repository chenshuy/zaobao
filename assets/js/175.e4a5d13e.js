(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{311:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_2019-05-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-05-22","aria-hidden":"true"}},[t._v("#")]),t._v(" 2019.05.22")]),t._v(" "),a("p",[t._v("[类库] 将字节转换成可以读的字符串，比如 1337 个字节，会显示成 1.34 KB："),a("a",{attrs:{href:"https://github.com/sindresorhus/pretty-bytes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sindresorhus/pretty-bytes"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] Webpack 打包后，可以和上一次打包的文件进行对比，看看本次打包增加了多大的存储空间："),a("a",{attrs:{href:"https://github.com/GoogleChromeLabs/size-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GoogleChromeLabs/size-plugin"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[工具] 在 GitHub README 下方显示 NPM 的依赖信息，对阅读源码来说很有用，我是习惯先从 "),a("code",[t._v("package.json")]),t._v(" 文件入手："),a("a",{attrs:{href:"https://github.com/npmhub/npmhub",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/npmhub/npmhub"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[工具] Refined GitHub 是一个 Chrome 扩展，访问 GitHub 网站时，改进原网站的一些特性："),a("a",{attrs:{href:"https://github.com/sindresorhus/refined-github",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sindresorhus/refined-github"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"示例-将字节转换成可以读的字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-将字节转换成可以读的字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例 - 将字节转换成可以读的字符串")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prettyBytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pretty-bytes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prettyBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '1.34 kB'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prettyBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '100 B'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display file size differences")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prettyBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '+42 B'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Localized output using German locale")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prettyBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("locale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '1,34 kB'")]),t._v("\n")])])]),a("h3",{attrs:{id:"配图-查看-webpack-包大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-查看-webpack-包大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 配图 - 查看 Webpack 包大小")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/3bWBrJm.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配图-在-github-readme-下方显示-npm-的依赖信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-在-github-readme-下方显示-npm-的依赖信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 配图 - 在 GitHub README 下方显示 NPM 的依赖信息")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/npmhub/npmhub/master/assets/npm-hub-screenshot.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配图-refined-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-refined-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 配图 - Refined GitHub")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/170270/25370217/61718820-29b3-11e7-89c5-2959eaf8cac8.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/1402241/34438653-f66535a4-ecda-11e7-9406-2e1258050cfa.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"今日图-黑色的耐脏，有理有据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今日图-黑色的耐脏，有理有据","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日图 - 黑色的耐脏，有理有据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/13/16ab055d40ec2c58?imageView2/2/w/800/q/100",alt:""}})])])},[],!1,null,null,null);s.default=n.exports}}]);