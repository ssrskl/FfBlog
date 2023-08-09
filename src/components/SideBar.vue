<script lang="ts" setup>
import {ref} from "vue";
let activeName = ref('1')
</script>

<template>
  <nav class="fixed w-1/6 flex flex-col h-screen bg-[#304156] py-6">
    <div class="flex space-x-2 items-center justify-center">
      <img src="https://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png" class="w-8">
      <span class="font-semibold text-white">若依管理系统</span>
    </div>
    <ul class="flex flex-col mt-6">
      <li class="flex items-center space-x-3 px-4 py-4 hover:bg-[#253550]">
        <svg t="1691391658684" class="w-4" viewBox="0 0 1199 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2359">
          <path
              d="M599.883366 36.485018 14.397338 622.032998l237.705 0 0 383.981 222.536 0c38.057984-82.68503 101.058048-151.528038 179.386982-196.925952-0.27095-17.363968-0.420966-36.896051-0.134963-62.398976-90.196992 44.91305-164.726989 116.515021-213.204992 204.47703L306.957344 951.166101 306.957344 567.178 143.639344 567.178l455.873024-455.873024L1055.391334 567.178035 892.074344 567.178035l0 383.989L745.790344 951.167035l0 54.848 201.139 0L946.929344 622.033l237.705 0L599.883366 36.485018z"
              p-id="2360" fill="#bfbfbf"></path>
        </svg>
        <span class="text-slate-200 text-sm">首页</span>
      </li>
      <li class="hs-accordion-group flex flex-col">
        <div class="hs-accordion active flex flex-col" id="hs-basic-heading-one">
          <button class="hs-accordion-toggle flex items-center py-4 px-4 space-x-3 hover:bg-[#253550]"
                  aria-controls="hs-basic-collapse-one-one hs-basic-collapse-one-two">
            <svg t="1691391658684" class="w-4" viewBox="0 0 1199 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2359">
              <path
                  d="M599.883366 36.485018 14.397338 622.032998l237.705 0 0 383.981 222.536 0c38.057984-82.68503 101.058048-151.528038 179.386982-196.925952-0.27095-17.363968-0.420966-36.896051-0.134963-62.398976-90.196992 44.91305-164.726989 116.515021-213.204992 204.47703L306.957344 951.166101 306.957344 567.178 143.639344 567.178l455.873024-455.873024L1055.391334 567.178035 892.074344 567.178035l0 383.989L745.790344 951.167035l0 54.848 201.139 0L946.929344 622.033l237.705 0L599.883366 36.485018z"
                  p-id="2360" fill="#bfbfbf"></path>
            </svg>
            <span class="text-slate-200 text-sm">系统管理</span>
          </button>
          <ul id="hs-basic-collapse-one-one"
              class="hs-accordion-content overflow-hidden transition-[height] duration-300 bg-[#1F2D3D]"
              aria-labelledby="hs-basic-heading-one">
            <li class="hover:bg-[#001528]">
              <button class="flex items-center py-4 pl-6 space-x-3">
                <svg t="1691455540122" class="w-4 fill-white" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4231">
                  <path
                      d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"
                      p-id="4232"></path>
                  <path
                      d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z"
                      p-id="4233"></path>
                </svg>
                <span class="text-slate-200 text-sm">用户管理</span>
              </button>
            </li>
            <li class="hover:bg-[#001528]">
              <button class="flex items-center py-4 pl-6 space-x-3">
                <svg t="1691455540122" class="w-4 fill-white" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4231">
                  <path
                      d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"
                      p-id="4232"></path>
                  <path
                      d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z"
                      p-id="4233"></path>
                </svg>
                <span class="text-slate-200 text-sm">角色管理</span>
              </button>
            </li>
            <li class="hover:bg-[#001528]">
              <button class="flex items-center py-4 pl-6 space-x-3">
                <svg t="1691455540122" class="w-4 fill-white" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4231">
                  <path
                      d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"
                      p-id="4232"></path>
                  <path
                      d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z"
                      p-id="4233"></path>
                </svg>
                <span class="text-slate-200 text-sm">角色管理</span>
              </button>
            </li>
            <li class="hover:bg-[#001528]">
              <button class="flex items-center py-4 pl-6 space-x-3">
                <svg t="1691455540122" class="w-4 fill-white" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4231">
                  <path
                      d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"
                      p-id="4232"></path>
                  <path
                      d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z"
                      p-id="4233"></path>
                </svg>
                <span class="text-slate-200 text-sm">角色管理</span>
              </button>
            </li>
            <li class="hover:bg-[#001528]">
              <button class="flex items-center py-4 pl-6 space-x-3">
                <svg t="1691455540122" class="w-4 fill-white" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4231">
                  <path
                      d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z"
                      p-id="4232"></path>
                  <path
                      d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z"
                      p-id="4233"></path>
                </svg>
                <span class="text-slate-200 text-sm">角色管理</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="hs-accordion flex flex-col" id="hs-basic-heading-two">
          <button class="hs-accordion-toggle flex px-4 py-4 space-x-3 hover:bg-[#253550]"
                  aria-controls="hs-basic-collapse-two">
            <svg t="1691391658684" class="w-4" viewBox="0 0 1199 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2359">
              <path
                  d="M599.883366 36.485018 14.397338 622.032998l237.705 0 0 383.981 222.536 0c38.057984-82.68503 101.058048-151.528038 179.386982-196.925952-0.27095-17.363968-0.420966-36.896051-0.134963-62.398976-90.196992 44.91305-164.726989 116.515021-213.204992 204.47703L306.957344 951.166101 306.957344 567.178 143.639344 567.178l455.873024-455.873024L1055.391334 567.178035 892.074344 567.178035l0 383.989L745.790344 951.167035l0 54.848 201.139 0L946.929344 622.033l237.705 0L599.883366 36.485018z"
                  p-id="2360" fill="#bfbfbf"></path>
            </svg>
            <span class="text-slate-200 text-sm">首页</span>
          </button>
          <div id="hs-basic-collapse-two"
               class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
               aria-labelledby="hs-basic-heading-two">
            <p class="text-gray-800 dark:text-gray-200">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds
              the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>

        <div class="hs-accordion" id="hs-basic-heading-three">
          <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-collapse-three">
            <svg
                class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg
                class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Accordion #3
          </button>
          <div id="hs-basic-collapse-three"
               class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
               aria-labelledby="hs-basic-heading-three">
            <p class="text-gray-800 dark:text-gray-200">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds
              the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </li>

    </ul>
  </nav>
</template>