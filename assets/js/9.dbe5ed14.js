(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("##在eclipse中安装angular插件\n1.插件安装地址为http://oss.opensagres.fr/angularjs-eclipse/1.1.0/\n最新的安装地址在"),s("a",{attrs:{href:"https://github.com/angelozerr/angularjs-eclipse/wiki/Installation-Update-Site",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._m(1),t._m(2),s("p",[t._v("##插件配置")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("新建一个html文件，输入以下简单angular代码：")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"title-macos-x-eclipse-angular插件安装与配置-date-2016-02-24-22-13-40tags-angularcategories-angular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title-macos-x-eclipse-angular插件安装与配置-date-2016-02-24-22-13-40tags-angularcategories-angular","aria-hidden":"true"}},[this._v("#")]),this._v(' title: "MacOS X eclipse angular插件安装与配置"\ndate: 2016-02-24 22:13:40\ntags: angular\ncategories: angular')])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("2.在eclipse中选择help->install new software，输入插件安装地址，选择所有的插件：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/augular-getting-started-1.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("3.安装插件预览：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/auglar-getting-started-2.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("全局配置\n由于AngularJS插件使用了JavaScript分析引擎tern.js（使用JavaScript编写），因此需要node.js来执行这个引擎。\n选择eclipse/偏好设置，由于JEE版本的eclipse包含了JSDT，tern配置节点在JavaScript节点之下：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-3.png",alt:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("保持默认配置即可，默认使用的是安装插件时已经装好的node.js。\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-4.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("2.项目配置\n新建一个dynamic web project，并且转为angular项目\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-5a.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("选择Tern支持插件，我在保持默认的基础上选择了jQuery，并确定\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-6.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("打开项目属性，可以看到项目属性里增加了AngularJS和Tern，说明已经是angular项目了：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-7a.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("3.脚本路径配置\n使用Tern进行代码完成，代码验证等特性，Tern需要预先加载JavaScript文件，这样就可以用于代码完成和代码验证了。\n在WebContent下面新建js文件夹，并将下载的angular.js拖到其中：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-8.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("打开项目属性，可以看到script paths 已经自动加入了angular.js\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-9.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"检查验证功能是否有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查验证功能是否有效","aria-hidden":"true"}},[this._v("#")]),this._v(" 检查验证功能是否有效")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/angular.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ng-app")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Input something in the input box:"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Name : "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ng-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter name here"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello {{name}}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("可以看到ng-app还是带黄色下划线警告：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-10.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("我们打开项目属性，在Validation节点下做如下配置。\n关闭html syntax validator和JSP content validator，选择对应的angular validator\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-11.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("关闭已经打开的html文件，再次打开，可以看到警告已经消失：\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-12.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("##代码提示功能\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-13.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("##部署应用\n"),a("img",{attrs:{src:"http://7xpph3.com1.z0.glb.clouddn.com/angular-getting-started-14.png",alt:""}})])}],!1,null,null,null);a.default=e.exports}}]);