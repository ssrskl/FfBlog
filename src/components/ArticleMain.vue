<script setup>
import {ref} from "vue";
import * as marked from "marked";

const markdownInfo = "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)" +
    "# Vue\n" +
    "\n" +
    "# 资源\n" +
    "\n" +
    "[Vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)\n" +
    "\n" +
    "[Axios 官方文档](https://axios-http.com/docs/intro)"
let htmlInfo = marked.parse(markdownInfo)
</script>

<template>
  <main class="flex flex-col flex-grow w-3/5 text-gray-500 ">
    <div class="px-5 py-5 space-y-2 bg-gray-100 drop-shadow-md">
      <div class="flex space-x-3 items-center">
        <h1 class="text-black font-light text-2xl">文章标题</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-3.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>猫颜</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-grow text-gray-500 mx-5">
      <div class="flex bg-white px-3 py-2 rounded-md my-6 justify-between drop-shadow-md">
        <div class="flex space-x-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>首页/正文</span>
        </div>
        <div class="flex space-x-2 items-center">
          <span>分享到：</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
      </div>
      <!--文章正文-->
      <div class="flex flex-col bg-white py-4 px-2 rounded-md mb-3 drop-shadow-md">
        <div v-html="htmlInfo"></div>
        <div class="flex justify-between mt-6 text-xs">
          <div>
            <span>最后修改时间：2023年8月9日</span>
          </div>
          <div>
            <span>允许规范转载</span>
          </div>
        </div>
        <!--点赞收藏和分享-->
        <div class="flex justify-between my-8 px-52">
          <!--图标链接:https://www.iconfont.cn/collections/detail?spm=a313x.search_index.0.da5a778a4.36a13a81MsfwTO&cid=16957-->
          <svg t="1691569901483" class="w-7 drop-shadow-md" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="3444">
            <path
                d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z"
                fill="#fb2003" p-id="3445"></path>
          </svg>
          <svg t="1691571666648" class="w-7 drop-shadow-md" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3660">
            <path
                d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
                fill="#fcf005" p-id="3661"></path>
          </svg>
          <svg t="1691569742751" class="w-7 drop-shadow-md" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="3230">
            <path
                d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z"
                fill="#bfbfbf" p-id="3231"></path>
          </svg>
        </div>
      </div>
      <!--上下页-->
      <div class="flex justify-between px-4 mt-6">
        <button class="px-2 py-1 bg-white rounded-md drop-shadow-md">上一篇</button>
        <button class="px-2 py-1 bg-white rounded-md drop-shadow-md">下一篇</button>
      </div>
      <!--评论-->
      <div class="flex flex-col mt-6 space-y-2 drop-shadow-md">
        <div class="font-semibold">评论 1100条</div>
        <ul class="bg-white px-4 rounded-md py-6">
          <li>
            <div class="flex space-x-2 items-start">
              <a href="#" class="flex items-center hover:text-blue-400">
                <div class="w-8 h-8 rounded-full bg-blue-400 overflow-hidden">
                  <img src="https://avatars.githubusercontent.com/u/18780761?v=4"/>
                </div>
              </a>
              <div class="flex flex-col space-y-2">
                <span class="font-semibold text-sm">用户名</span>
                <span
                    class="text-sm">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
                <ul>
                  <li class="mt-4 flex items-start space-x-2">
                    <a href="#" class="flex items-center hover:text-blue-400">
                      <div class="w-6 h-6 rounded-full bg-blue-400 overflow-hidden">
                        <img src="https://avatars.githubusercontent.com/u/18780761?v=4"/>
                      </div>
                    </a>
                    <div class="flex flex-col space-y-2">
                      <span class="font-semibold text-xs">用户名</span>
                      <span class="text-sm">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
                    </div>
                  </li>
                  <li class="mt-4 flex items-start space-x-2">
                    <a href="#" class="flex items-center hover:text-blue-400">
                      <div class="w-6 h-6 rounded-full bg-blue-400 overflow-hidden">
                        <img src="https://avatars.githubusercontent.com/u/18780761?v=4"/>
                      </div>
                    </a>
                    <div class="flex flex-col space-y-2">
                      <span class="font-semibold text-xs">用户名</span>
                      <span class="text-sm">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <footer class="text-xs flex justify-between bg-white py-4 px-2 rounded-md mt-8 mb-3 drop-shadow-md">
        <span class="block">© 2023 All rights reserved.</span>
        <a class="block hover:text-gray-800">京ICP备17006801号-2 </a>
      </footer>
    </div>
  </main>
</template>
