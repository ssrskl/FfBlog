<script setup>
import {ref} from "vue";
import {navigateToArticle} from "@/router/router";
</script>

<template>
  <main class="flex flex-col flex-grow w-3/5 text-gray-500 px-5">
    <div class=" py-5 space-y-2">
      <h1 class="text-black font-light text-2xl">猫颜</h1>
      <h3 class="text-xs text-gray-500">提笔，写忧伤，停笔，心怅然。</h3>
    </div>
    <!--文章1-->
    <div @click="navigateToArticle(1)"
        class="flex flex-col pt-28 pb-6 px-8  my-3 rounded-md bg-cover space-y-5 drop-shadow-md text-white"
         style="background-image: url(https://www.ihewro.com/usr/uploads/2019/01/762065921.jpg)">
      <div>
        <div></div>
        <h2 @click="navigateToArticle()">文章标题</h2>
      </div>
      <div class="flex flex-col space-y-2">
        <span>文章简介</span>
        <div class="flex space-x-3">
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>猫颜</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>2023年8月5日</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>17条评论</span>
          </button>
        </div>
      </div>
    </div>
    <!--文章2-->
    <div class="flex my-3 rounded-md drop-shadow-md">
      <a href="#" class="flex items-center">
        <div class="w-36 h-36 overflow-hidden rounded-l-md">
          <img src="https://www.ihewro.com/usr/uploads/2023/01/1752784567.png"
               class="object-cover w-36 h-36"/>
        </div>
      </a>
      <div class="flex flex-col justify-between py-3 px-5 bg-white rounded-r-md">
        <h2>生活的难题没有因为新年而消失（2022年终总结）</h2>
        <span>今年是我的博客第七年，也是写的第七份年终总结。从大二开始到研究生再到现在工作，每一年的变化在自己看来都不...</span>
        <div class="flex space-x-3">
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>猫颜</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>2023年8月5日</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>17条评论</span>
          </button>
        </div>
      </div>
    </div>
    <!--文章3-->
    <div class="flex flex-col pt-28 pb-6 px-8 my-3 rounded-md bg-cover space-y-5 drop-shadow-md text-white"
         style="background-image: url(https://www.ihewro.com/usr/uploads/2022/10/2974733431.jpg)">
      <div>
        <div></div>
        <h2>文章标题</h2>
      </div>
      <div class="flex flex-col space-y-2">
        <span>文章简介</span>
        <div class="flex space-x-3">
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>猫颜</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>2023年8月5日</span>
          </button>
          <button class="flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="w-4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>17条评论</span>
          </button>
        </div>
      </div>
    </div>
    <footer class="text-xs flex justify-between bg-white py-4 px-2 rounded-md mt-8 mb-3">
      <span class="block">© 2023 All rights reserved.</span>
      <a class="block hover:text-gray-800">京ICP备17006801号-2 </a>
    </footer>
  </main>
</template>