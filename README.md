# capture-courses

## 使用说明
在 [USTC 在线视频平台-直录播-录播课程](https://v.ustc.edu.cn/capture-course/)标签页打开浏览器开发者工具，使用 [Edge 的本地覆写](https://learn.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/javascript/overrides)或 [Chrome 的本地覆写](https://developer.chrome.com/docs/devtools/overrides?hl=zh-cn)，将覆写文件夹设为本仓库根目录下的 overrides，然后即可访问所有已录制的课程。设置时有以下几点注意事项：
1. 设置覆写文件夹时应保持本仓库原本的目录结构：  
   <pre>
   overrides（设置为覆写文件夹）   
   └─v.ustc.edu.cn
       └─assets
           │   capture*.js
           │   captureCourses*.js
   </pre>
2. 设置完成后，覆写文件夹的位置不可移动，否则需要在开发者工具内重新设置路径。本仓库更新后，直接将覆写文件夹内的文件更新即可。
3. 本地覆写需要开发者工具**始终处于打开状态**，打开以后，刷新网页即可生效。成功观看一个录播视频后，在后续不刷新网页的情况下，可以关闭开发者工具。
4. 在观看录播视频前，网站需要通过统一身份认证登录。

## 往期课程支持
网站默认搜索本学期课程。在搜索框中输入如下格式中的任意一个，即可搜索往期课程（最早支持22春）。
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
本工具仅供校内学生学习使用，请勿将视频平台的内容私自上传至公共平台，这可能对任课老师造成非常严重的负面影响。教师手动授权后，无需使用本工具即可访问录播课程，具体方法如下（助教推荐使用）：
   1. 教师登录 https://home.v.ustc.edu.cn - 进入"我的课程"（左栏） - 进入具体课程 - 点击"发布"
   2. 学生登录 https://home.v.ustc.edu.cn - 进入"我的课程"（左栏） - 进入具体课程 - 在"录播教材"中查看往期课程
