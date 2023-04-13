### createBrowserRouter
1. 使用DOM历史记录API来更新URL并管理历史记录堆栈

### createHashRouter
1. 当你的后台无法配置将所有流量重定向到react路由的应用时，使用哈希路由#来管理

### createMemoryRouter
1. 内存路由使用内存中自己的历史记录堆栈，主要用于测试和组件开发，也可以用于任何非浏览器环境中运行react-router
   
### hashRouter
1. url与服务器没有交互，不需要将url发送至服务器时可以使用

### BrowserRouter
1. 使用URL将当前位置存储在浏览器地址栏中，使用浏览器的内置历史记录堆栈进行导航