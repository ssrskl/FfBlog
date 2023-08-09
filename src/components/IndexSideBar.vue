<script setup>
import {ref} from "vue";
import {navigateToIndex} from "@/router/router";

let showIndex = ref(0)

function showSwitch(index) {
  if (showIndex.value !== index) {
    showIndex.value = index
  } else {
    showIndex.value = 0
  }
}
</script>

<template>
  <aside class="fixed w-3/20 h-full flex flex-col text-gray-400 bg-gray-50 text-sm px-3 py-6 shadow-md">
    <div class="flex space-x-4 items-center">
      <a href="#" class="flex items-center hover:text-blue-400">
        <div class="w-14 h-14 rounded-full bg-blue-400 overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/18780761?v=4"/>
        </div>
      </a>
      <div class="flex flex-col">
        <div class="flex space-x-0.5">
          <span>猫颜</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" data-view-component="true" class="w-4 ">
            <path
                d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </div>
        <span class="text-xs">The Best Is Yet To Come.</span>
      </div>
    </div>
    <ul class="mt-6 space-y-2">
      <router-link class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md" to="/home/index">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>首页</span>
      </router-link>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>朋友</span>
      </li>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span>相册</span>
      </li>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>日记</span>
      </li>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="w-4">
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
        <span>归档</span>
      </li>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md justify-between"
          @click="showSwitch(1)">
        <div class="flex space-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>关于</span>
        </div>
        <span>></span>
      </li>
      <el-collapse-transition>
        <ul v-show="showIndex === 1" class="flex flex-col pl-3 bg-white rounded-md space-y-2">
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">关于我</li>
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">留言本</li>
        </ul>
      </el-collapse-transition>
      <li></li>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md justify-between"
          @click="showSwitch(2)">
        <div class="flex space-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="w-4">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>分类</span>
        </div>
        <span>></span>
      </li>
      <el-collapse-transition>
        <ul v-show="showIndex === 2" class="flex flex-col pl-3 bg-white rounded-md space-y-2">
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">时光机</li>
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">万花筒</li>
        </ul>
      </el-collapse-transition>
      <div class="flex flex-col px-3 py-1.5 hover:bg-gray-200 rounded-md" @click="showSwitch(3)">
        <div class="flex items-center justify-between">
          <div class="flex space-x-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
            <span>页面</span>
          </div>
          <span>></span>
        </div>
      </div>
      <el-collapse-transition>
        <ul v-show="showIndex === 3" class="flex flex-col pl-3 bg-white rounded-md space-y-2">
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">关于我</li>
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">时光机</li>
          <li class="hover:bg-[#1da1f2]/90 px-3 rounded-md py-1.5 hover:bg-gray-200">万花筒</li>
        </ul>
      </el-collapse-transition>
      <li class="flex space-x-3 items-center px-3 py-1.5 hover:bg-gray-200 rounded-md justify-between">
        <div class="flex space-x-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="w-4">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>友链</span>
        </div>
        <span>></span>
      </li>
    </ul>
    <div class="z-30 fixed space-x-10 bottom-2 flex py-2 px-3 justify-between bg-white rounded-md drop-shadow-md">
      <el-tooltip effect="dark"
                  content="设置"
                  placement="top">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <circle cx="12" cy="12" r="3"></circle>
            <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </el-tooltip>
      <el-tooltip effect="dark"
                  content="Github"
                  placement="top">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
      </el-tooltip>
      <el-tooltip effect="dark"
                  content="RSS"
                  placement="top">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip effect="dark"
                  content="信息"
                  placement="top">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="w-4">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </el-tooltip>
    </div>
  </aside>
</template>
<style>
.router-link-active {
  background-color: rgb(229 231 235);
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>