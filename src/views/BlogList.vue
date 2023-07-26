<template>
  <BlogNavbar></BlogNavbar>
  <div class="pb-16 pt-10 md:py-20">
    <div class="container">
      <h1 class="before:title-before relative mb-6 ml-4 text-xl font-bold md:mb-10 md:text-3xl">
        部落格
      </h1>
      <ul class="space-y-6 mb-16 md:mb-20 xl:mb-[124px]">
        <li v-for="item in blogList" :key="item.title" @click="$router.push('/blog/post')">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img :src="item.imgUrl" :alt="item.title" />
            <div class="flex flex-col justify-between">
              <div>
                <h2 class="text-xl text-apple-dark xl:text-[32px]">{{ item.title }}</h2>
                <div class="mb-0 flex items-center justify-between md:mb-1 xl:mb-4">
                  <h3 class="font-bold xl:text-lg">{{ item.subtitle }}</h3>
                  <p class="font-medium opacity-70">{{ item.date }}</p>
                </div>
                <p class="hidden text-dark md:block xl:text-lg">
                  {{ item.description }}
                  <span class="xl:hidden">more</span>
                </p>
              </div>

              <p class="hidden text-end text-2xl font-black text-apple-dark xl:block">more</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex justify-center">
        <PageComponent></PageComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BlogNavbar from '../components/BlogNavbar.vue'
import PageComponent from '../components/PageComponent.vue';

export default {
  components: {
    BlogNavbar,
    PageComponent
  },
  data() {
    return {
      blogList: [
        {
          title: '情人特別企劃',
          subtitle: '2020 Valentine’s Special',
          date: '2020/02/14',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-1.png?raw=true',
          description:
            '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯'
        },
        {
          title: '街頭潮人訪問',
          subtitle: 'Street Interview',
          date: '2020/02/02',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-2.png?raw=true',
          description:
            '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣⋯⋯'
        },
        {
          title: '春季新品上市',
          subtitle: 'New Selection',
          date: '2020/02/02',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-3.png?raw=true',
          description:
            '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯'
        },
        {
          title: '設計師獨享鏡框優惠',
          subtitle: 'Sales for Designer',
          date: '2020/01/18',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-4.png?raw=true',
          description:
            '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯'
        },
        {
          title: '抵抗夏日大作戰',
          subtitle: 'Summer Special',
          date: '2019/08/07',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-5.png?raw=true',
          description:
            '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯'
        }
      ]
    }
  }
}
</script>
