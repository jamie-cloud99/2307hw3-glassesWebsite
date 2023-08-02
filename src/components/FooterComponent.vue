<template>
  <footer class="bg-apple text-white py-6 md:pt-12 md:pb-8">
    <div class="container">
      <div class="flex items-start justify-between mb-4 md:mb-6">
        <div>
          <ul class="hidden md:flex gap-x-8 mb-6">
            <li v-for="item in menuList" :key="item.title">
              <router-link :to="item.url" class="block p-2 hover:text-apple-light">{{
                item.title
              }}</router-link>
            </li>
          </ul>
          <p class="md:text-2xl mb-2">
            <a href="tel:+886-8-00000000">
              <span
              class="material-icons-outlined text-md md:text-2xl align-middle md:align-bottom mr-2 md:mr-4"
              >call</span
            >0800-000-000
            </a>
            
          </p>
          <p class="md:text-2xl mb-2">
            <a href="mailto:glasses@business.com">
              <span
              class="material-icons-outlined text-md md:text-2xl align-middle md:align-bottom mr-2 md:mr-4"
              >email</span
            >glasses@business.com
            </a>
            
          </p>
        </div>
        <ul class="flex gap-x-2 md:gap-x-4">
          <li v-for="item in socialList" :key="item.title">
            <a href="#"><img class="block w-6 md:w-10 hover:opacity-80" :src="item.imgUrl" :alt="item.title" /></a>
          </li>
        </ul>
      </div>
      <hr class="mb-4 md:mb-8" />
      <div class="md:flex justify-between">
        <p class="mb-2 md:mb-0">Copyright © 2020 Glasses.All rights reserved.</p>
        <div class="md:flex gap-x-12">
          <RouterLink to="/" class="block mb-2 md:mb-0">隱私權政策</RouterLink>
          <RouterLink to="/" class="block">服務條款</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '系列鏡框',
          url: '/products'
        },
        {
          title: '門市據點',
          url: '/shops'
        },
        {
          title: '部落格',
          url: '/blog'
        },
        {
          title: '常見問題',
          url: '/faq'
        }
      ],
      socialList: [
        {
          title: 'facebook',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true'
        },
        {
          title: 'instagram',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true'
        },
        {
          title: 'line',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true'
        }
      ]
    }
  }
}
</script>
