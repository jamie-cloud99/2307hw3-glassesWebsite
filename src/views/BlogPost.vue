<template>
  <BlogNavbar></BlogNavbar>
  <div class="pb-16 pt-4 md:pb-20 md:pt-2 xl:pt-6">
    <div class="container">
      <div class="mb-2">
        <BreadcrumbsComponent></BreadcrumbsComponent>
      </div>
      <ul class="mb-2 flex gap-4 font-bold text-apple md:text-xl">
        <li class="">#special</li>
        <li class="">#event</li>
      </ul>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div class="md:col-span-9 xl:col-span-8">
          <article class="md:mb-10">
            <h2 class="text-xl md:text-3xl">情人特別企劃</h2>
            <h3 class="mb-4 font-medium md:mb-6 md:text-xl xl:mb-4">2020 Valentine’s Special</h3>
            <img :src="imgUrls[0]" alt="情人特別企劃" class="mb-2 block md:mb-4 xl:mb-2" />
            <p class="mb-4 text-dark md:mb-6 xl:mb-10">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img :src="imgUrls[1]" alt="情人特別企劃" class="mb-2 block md:mb-4 xl:mb-2" />
            <p class="mb-4 text-dark md:mb-6 xl:mb-10">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img :src="imgUrls[2]" alt="情人特別企劃" class="mb-2 block md:mb-4 xl:mb-2" />
            <p class="mb-4 text-dark md:mb-6 xl:mb-10">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
              本次拍攝的鏡框款式與 NEEDS CLASSIC
              聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img :src="imgUrls[3]" alt="情人特別企劃" class="mb-2 block md:mb-4 xl:mb-2" />
            <p class="text-dark">
              2/14(五)-2/20(日) <br />至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個<br />
              期間優惠還有~~持他牌鏡框更換鏡片<br />
              薄型非球面鏡片折300元 <br />濾藍光鏡片折500元 <br />快快帶上另一半
              <br />讓彼此每一次睜開眼，都被愛的視線包圍!
            </p>
          </article>
          <div class="hidden md:block">
            <p class="mb-4 font-bold">
              share
              <a class="ml-4 inline-block align-middle" href="#"
                ><img
                  class="w-6"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-facebook.png?raw=true"
                  alt="facebook"
              /></a>
              <a class="ml-4 inline-block align-middle" href="#"
                ><img
                  class="w-6"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-instagram.png?raw=true"
                  alt="instagram"
              /></a>
            </p>
            <hr class="mb-6 border-light" />
            <nav class="flex justify-between">
              <RouterLink to="/" class="hover:text-apple"
                ><span class="material-icons-outlined mr-3 align-bottom text-base">
                  arrow_back </span
                >上一篇：街頭潮人訪問 1</RouterLink
              >
              <RouterLink to="/" class="hover:text-apple"
                >下一篇：街頭潮人訪問 2<span
                  class="material-icons-outlined ml-3 align-bottom text-base"
                >
                  arrow_forward
                </span></RouterLink
              >
            </nav>
          </div>
        </div>
        <div class="hidden md:col-span-3 md:block">
          <aside class="font-bold text-apple">
            <h3 class="mb-2 xl:mb-1 xl:text-[32px]">
              <span
                class="material-icons-outlined align-bottom text-base leading-normal xl:text-[32px]"
              >
                label </span
              >TAGS
            </h3>
            <ul class="flex flex-wrap gap-x-4 xl:gap-x-6 xl:gap-y-1 xl:text-xl">
              <li class="hover:text-apple/70 cursor-pointer" v-for="item in tags" :key="item">{{ item }}</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogNavbar from '../components/BlogNavbar.vue'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent.vue'

export default {
  components: {
    BlogNavbar,
    BreadcrumbsComponent
  },
  data() {
    return {
      tags: ['#special', '#sale', '#new_item', '#interview', '#trivia', '#news', '#event'],
      imgUrls: [
        'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-1.png?raw=true',
        'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-2.png?raw=true',
        'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-3.png?raw=true',
        'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-4.png?raw=true'
      ]
    }
  }
}
</script>
