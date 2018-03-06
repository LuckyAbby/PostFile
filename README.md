# PostFile
通过 ajax 和 fetch 测试使用 FormData 传送文件的时候，不能设置 Content-Type

### 启动后端

通过 express 搭建后端，通过 multer 解析文件
```
git clone https://github.com/LuckyAbby/PostFile.git
cd PostFile
npm install
node app.js
```
### 前端页面

简(hen)单(chou)的一个上传文件的页面，通过 FormData 上传文件

index.js 通过 fetch 发送请求， index2.js 通过原生 ajax 发送请求

测试设置 Content-Type 在后端是否能正常接收到文件
