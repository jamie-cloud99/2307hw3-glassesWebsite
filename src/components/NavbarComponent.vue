<template>
  <nav class="bg-apple text-white">
    <div class="md:container">
      <div class="md:flex justify-between items-center">
        <RouterLink to="/" class="block pl-[15px] md:pl-0 py-4"
          ><img
            class="w-20"
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
            alt="logo"
        /></RouterLink>
        <ul class="menu grid grid-cols-2 md:grid-cols-4 md:gap-x-16">
          <li v-for="item in menuList" :key="item.title">
            <router-link
              :to="item.url"
              class="block text-lg text-center border border-white md:border-0 py-3 md:py-2 hover:text-apple-light"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '系列鏡框',
          url: '/products',
        },
        {
          title: '門市據點',
          url: '/shops',
        },
        {
          title: '部落格',
          url: '/blog',
        },
        {
          title: '常見問題',
          url: '/faq',
        },
      ]
    }
  }
}
</script>