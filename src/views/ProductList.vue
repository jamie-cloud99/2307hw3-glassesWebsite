<template>
  <div class="xl:container">
    <ul class="flex divide-x border border-[#DCDCDC] text-center">
      <li @click="changeCategory(item.category)"
        v-for="item in categoryList"
        :key="item.title"
        class="w-1/3 border-0 py-4 font-medium transition-all duration-300 hover:border-b-8 hover:border-b-apple md:text-xl xl:py-6 xl:text-[32px]"
        :class="{'category-active': item.category === tempCategory}"
      >
        {{ item.category }}
      </li>
    </ul>
  </div>

  <ul class="flex">
    <li class="w-1/2" v-for="item in tempCategoryProducts.categoryInfo.headerImgUrl" :key="item.lg">
      <picture>
        <source media="(min-width: 1280px)" :srcset="item.lg" />
        <img class="w-full max-h-[296px] object-cover" :src="item.sm" alt="glasses">
      </picture>
    </li>
  </ul>
  <div class="pb-16 pt-10 md:py-20">
    <div class="container">
      <div class="text-center text-xl mb-6 md:mb-8">
        <h1 class="font-medium md:text-[42px]">{{ tempCategoryProducts.categoryInfo.engTitle }}</h1>
      <h2 class="md:text-[32px]">{{ tempCategoryProducts.categoryInfo.title }}</h2>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-y-10 xl:gap-y-20 mb-16 md:mb-20">
        <li class="" v-for="product in tempCategoryProducts.productList" :key="product.id">
          <img class="block" :src="product.imgUrl" :alt="product.id">
          <div class="flex justify-between text-xl ">
            <h3>{{ product.id }}</h3>
            <p class="text-apple font-medium">{{ product.price }}</p>
          </div>
          <div class="flex gap-2">
            <div class="w-6 h-6 rounded bg-[#5F3E2D]"></div>
            <div class="w-6 h-6 rounded bg-[#B75929]"></div>
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
import PageComponent from '../components/PageComponent.vue'

export default {
  components: {
    PageComponent
  },
  data() {
    return {
      tempCategory: 'OPTICAL',
      categoryList: [
        {
          category: 'OPTICAL',
          title: '賽璐珞鈦金屬混合鏡框',
          engTitle: 'Celluloid Combi',
          headerImgUrl: [
            {
              lg: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true',
              sm: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-1.png?raw=true'
            },
            {
              lg: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true',
              sm: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-2.png?raw=true'
            }
          ]
        },
        {
          category: 'SUNGLASSES',
          title: '賽璐珞鈦金屬混合鏡框',
          engTitle: '2020 NEW COLLECTION',
          headerImgUrl: [
            {
              lg: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-3.png?raw=true',
              sm: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-3.png?raw=true'
            },
            {
              lg: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-4.png?raw=true',
              sm: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-4.png?raw=true'
            }
          ]
        },
        {
          category: 'FUNCTIONAL',
          title: '',
          engTitle: ''
        }
      ],
      productList: [
        {
          category: 'OPTICAL',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-1.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'OPTICAL',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-2.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'OPTICAL',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-3.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'OPTICAL',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-4.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'OPTICAL',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-5.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'SUNGLASSES',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-6.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'SUNGLASSES',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-7.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'SUNGLASSES',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-8.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'SUNGLASSES',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-9.png?raw=true',
          price: 'NTD3,490'
        },
        {
          category: 'SUNGLASSES',
          id: 'BJ41600S',
          imgUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-10.png?raw=true',
          price: 'NTD3,490'
        },
    ]
    }
  },
  computed: {
    tempCategoryProducts () {
      const categoryProducts = {}
      categoryProducts.categoryInfo = this.categoryList.filter(item => item.category === this.tempCategory)[0]
      categoryProducts.productList = this.productList.filter(item => item.category === this.tempCategory)
      return categoryProducts
    }
  },
  methods: {
    changeCategory(category) {
      this.tempCategory = category
    }
  }
}
</script>
