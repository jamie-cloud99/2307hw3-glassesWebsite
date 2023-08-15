<template>
  <nav class="bg-apple text-white">
    <div class="md:container">
      <div class="items-center justify-between md:flex">
        <h1>
          <RouterLink to="/" class="block py-4 pl-[15px] md:pl-0"
            ><img
              class="w-20"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
              alt="logo"
          /></RouterLink>
        </h1>
        <ul class="menu grid grid-cols-2 md:grid-cols-4 md:gap-x-16">
          <li v-for="item in menuList" :key="item.title">
            <RouterLink
              :to="item.url"
              class="block border border-white py-3 text-center text-lg hover:text-apple-light md:border-0 md:py-2"
              >{{ item.title }}</RouterLink
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
      ]
    }
  }
}
</script>
