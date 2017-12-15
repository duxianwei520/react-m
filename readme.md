# 前言

这个web mobile端的项目


## 技术栈

react + redux + react-router + webpack + fetch + less



## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 

```
git clone https://github.com/duxianwei520/react-m.git  

cd react-m （进入当前的项目）

npm install  (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)

另开启一个命令窗口 启动node的本地json数据代理服务

npm run mock (对，就是传说中的 mockjs http://highsea90.com/t/mock/)

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
- [√] 项目按路由模块加载
- [√] 登录
- [√] 欢迎主页
- [√] redux完整示范
- [√] mockjs模拟后端返回接口
- [√] fetch数据跨域的设置
- [√] 实时的webpack包大小预览,方便优化
- [√] 页面切换的过场动画



## 总结

这套框架我们前端部门10个人已经在开发过大大小小十几个项目了，表示还是不错的，兼容性我们没有特别的测试，主流的现代的浏览器功能基本没问题，测试过Firefox跟Safari，现在把web mobile端的框架也开源出来，主要是加入了过场动画以及更换了UI框架，后续我们会继续维护


## 部分截图


### 页面切换

<img src="https://github.com/duxianwei520/react-m/blob/master/screenshots/list.gif" width="408" height="560"/>


### 构建完成的包的分析截图

<img src="https://github.com/duxianwei520/react-m/blob/master/screenshots/analysis.png" width="1101" height="555"/>



## License

[GPL](https://github.com/duxianwei520/react-m/blob/master/COPYING)


## 交流
想跟其他的使用react的小伙伴们交流的话，
可以加入我创建的react QQ群哦：598372207~
