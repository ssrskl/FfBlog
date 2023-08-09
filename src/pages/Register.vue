<script setup>
import {ref} from "vue";
import {navigateToLogin} from "@/router/router";
</script>

<template>
  <body class="flex">
  <div class="w-1/3 flex">
    <video src="public/videos/videos.mp4" class="h-screen object-cover w-3/4" autoplay>
      Your browser does not support the <code>video</code> element.
    </video>
  </div>
  <div class="w-1/3 flex flex-col px-12">
    <h1 class="font-semibold text-3xl my-28">注册账户</h1>
    <div class="flex flex-col space-y-8">
      <div class="flex justify-between">
        <div class="flex flex-col space-y-1">
          <span class="font-semibold">姓名</span>
          <input type="text" class="rounded-md bg-slate-100 px-2 py-2 border-0"/>
        </div>
        <div class="flex flex-col space-y-1">
          <span class="font-semibold">用户名</span>
          <input type="text" class="rounded-md bg-gray-100 px-2 py-2 border-0"/>
        </div>
      </div>
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
        <input type="checkbox" class="form-checkbox checkbox checkbox-info rounded-md"/>
        <span class="ml-1 text-sm">我同意 Maoyan 的服务条款、隐私政策和默认通知设置.</span>
      </label>
    </div>

    <button class="bg-black text-white py-4 rounded-md font-semibold">
      创建账户
    </button>
    <div class="flex justify-center mt-2">
      <span>已经有账户？</span>
      <a class="hover:text-blue-600 hover:underline" @click="navigateToLogin()">登录</a>
    </div>
  </div>
  </body>
</template>
