# capture-courses

## 使用说明
打开浏览器开发者工具，使用 [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/overrides) 或 [Chrome](https://developer.chrome.com/docs/devtools/overrides?hl=zh-cn) 的本地覆盖，将存储覆盖文件的文件夹设为本仓库根目录下的 overrides，然后即可访问 USTC 在线视频平台[直录播-录播课程](https://v.ustc.edu.cn/capture-course/)中的所有课程。设置时有以下几点注意事项：
1. 设置覆盖文件夹应保证如下的目录结构：
   覆盖文件夹(即本仓库根目录下的overrides)  
   └───v.ustc.edu.cn
       │   capture*.js
       │   captureCourses*.js
2. 设置完成后，覆盖文件夹的位置不可移动，否则需要在开发者工具内重新设置路径。本仓库更新后，直接将覆盖文件夹内的文件更新即可。
3. 本地覆盖需要开发者工具始终处于打开状态，打开以后，刷新网页即可生效。
4. 观看具体的录播视频前，需要通过统一身份认证进行登录。

## 往期课程支持
[直录播-录播课程](https://v.ustc.edu.cn/capture-course/)的搜索框默认搜索本学期课程。输入如下格式中的任意一个，即可搜索往期课程（最早支持22春）。
- 相对论 23春
- 相对论-23春
- 相对论/23春
- 23春
- 23春 相对论
- 23春-相对论
- 23春/相对论
- 23春 PHYS5002P
- 23春 周双勇

## 声明
本工具仅供校内学生学习使用，请勿将视频平台的内容私自上传至公共平台。教师手动授权后，无需使用本工具即可访问录播课程，具体方法如下（助教推荐使用）：
   1. 教师登录 https://home.v.ustc.edu.cn - 进入"我的课程"（左栏） - 进入具体课程 - 点击"发布"
   2. 学生登录 https://home.v.ustc.edu.cn - 进入"我的课程"（左栏） - 进入具体课程 - 在"录播教材"中查看往期课程
