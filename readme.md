# 前言

这个web mobile端的项目


## 技术栈

react16.x+  + react-router4.x + webpack4.x + axios + less



## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 

```
git clone https://github.com/duxianwei520/react-m.git  

cd react-m （进入当前的项目）

npm install  (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)

npm run mock (本地测试接口)

```


## 说明

>  喜欢的别忘记了可以star一下的噢！ 

>  开发环境 win10  Chrome 58.0.3029.110  nodejs 6.2.0

>  如果npm install太慢导致有些npm依赖包下载失败 你可以看控制台的报错信息，再手动npm install 具体的开发包，推荐使用淘宝的注册源，直接运行，
```
npm install -g cnpm --registry=https://registry.npm.taobao.org 

```

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍



## 功能一览
- [√] 登录
- [√] 主页
- [√] 业务模块资源按需加载
- [√] mock模拟后端接口
- [√] redux完整示范
- [√] axios数据跨域的设置
- [√] 页面切换的过场动画



## 总结

这套框架我们前端部门10个人已经在开发过大大小小十几个项目了，表示还是不错的，兼容性我们没有特别的测试，主流的现代的浏览器功能基本没问题，测试过Firefox跟Safari，现在把web mobile端的框架也开源出来，主要是加入了过场动画以及更换了UI框架，后续我们会继续维护

Mobile端，大家可以看构建好的包大小，经过gzip压缩之后，公共文件包是110.41K，在现在4G的网络环境下，问题不大，然后就是每个业务自己的业务js包了


## 部分截图


### 页面切换

<img src="https://github.com/duxianwei520/react-m/blob/master/screenshots/login.gif" width="408" height="560"/>


### 构建完成的包的分析截图

<img src="https://github.com/duxianwei520/react-m/blob/master/screenshots/analysis.gif" width="1101" height="555"/>



## License

[GPL](https://github.com/duxianwei520/react-m/blob/master/COPYING)


## 交流
想跟其他的使用react的小伙伴们交流的话，
可以加入我创建的react QQ群哦：598372207~
