<template>
  <footer class="bg-apple py-6 text-white md:pb-8 md:pt-12">
    <div class="container">
      <div class="mb-4 flex items-start justify-between md:mb-6">
        <div>
          <ul class="mb-6 hidden gap-x-8 md:flex">
            <li v-for="item in menuList" :key="item.title">
              <router-link :to="item.url" class="block p-2 hover:text-apple-light">{{
                item.title
              }}</router-link>
            </li>
          </ul>
          <p class="mb-2 md:text-2xl">
            <a href="tel:+886-8-00000000">
              <span
                class="material-icons-outlined mr-2 align-middle text-md md:mr-4 md:align-bottom md:text-2xl"
                >call</span
              >0800-000-000
            </a>
          </p>
          <p class="mb-2 md:text-2xl">
            <a href="mailto:glasses@business.com">
              <span
                class="material-icons-outlined mr-2 align-middle text-md md:mr-4 md:align-bottom md:text-2xl"
                >email</span
              >glasses@business.com
            </a>
          </p>
        </div>
        <ul class="flex gap-x-2 md:gap-x-4">
          <li v-for="item in socialList" :key="item.title">
            <a href="#"
              ><img class="block w-6 hover:opacity-80 md:w-10" :src="item.imgUrl" :alt="item.title"
            /></a>
          </li>
        </ul>
      </div>
      <hr class="mb-4 md:mb-8" />
      <div class="justify-between md:flex">
        <p class="mb-2 md:mb-0">Copyright © 2020 Glasses.All rights reserved.</p>
        <div class="gap-x-12 md:flex">
          <RouterLink to="/" class="mb-2 block md:mb-0">隱私權政策</RouterLink>
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
