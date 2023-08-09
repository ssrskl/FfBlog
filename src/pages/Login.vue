<script setup>
import {ref} from "vue";
import {navigateToRegister} from "@/router/router";
</script>

<template>
  <body class="flex">
  <div class="w-1/3 flex">
    <video src="public/videos/videos.mp4" class="h-screen object-cover w-3/4" autoplay>
      Your browser does not support the <code>video</code> element.
    </video>
  </div>
  <div class="w-1/3 flex flex-col px-12">
    <h1 class="font-semibold text-3xl my-28">登录您的账户</h1>
    <div class="flex flex-col space-y-8">
      <div class="flex flex-col space-y-1">
        <span class="font-semibold">电子邮件</span>
        <input type="text" class="rounded-md bg-gray-100 px-2 py-2 border-0"/>
      </div>
      <div class="flex flex-col space-y-1">
        <span class="font-semibold">密码</span>
        <input type="password" class="rounded-md bg-gray-100 px-2 py-2 border-0"/>
      </div>
    </div>
    <div class="py-4">
      <label class="flex items-center">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
          <label for="hs-default-checkbox" class="text-sm text-gray-500 ml-3 dark:text-gray-400">记住我</label>
      </label>
    </div>

    <button class="bg-black text-white py-4 rounded-md font-semibold">
      登录
    </button>
    <div class="flex justify-center mt-2">
      <span>还没有账户？</span>
      <a class="hover:text-blue-600 hover:underline" @click="navigateToRegister()">注册</a>
    </div>
  </div>
  </body>
</template>
