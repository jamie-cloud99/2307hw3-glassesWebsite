<template>
  <div class="pb-16 pt-10 md:py-20">
    <div class="container">
      <h1 class="before:title-before relative mb-6 ml-4 text-xl font-bold md:mb-10 md:text-3xl">
        門市據點
      </h1>
      <label for="area" class="mr-2 md:mr-4 md:text-xl">選擇地區</label>
      <select
        name="area"
        id="area"
        class="form-select mb-6 w-full max-w-[304px] border-[#CED4DA] bg-arrow-dropdown text-md text-[#495057]/75 md:mb-10"
      >
        <option value="台北市" class="">台北市</option>
        <option value="台中市" class="">台中市</option>
        <option value="高雄市" class="">高雄市</option>
      </select>
      <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-12">
        <li class="flex flex-col border border-black/20 cursor-pointer" v-for="item in shopList" :key="item.title" @click="$router.push('/shops/shop-detail')">
          <img class="block h-56 object-cover" :src="item.imgUrl" :alt="item.title" />
          <h2 class="py-2 pl-6 text-xl border-b border-black/20">{{ item.title }}</h2>
          <div class="py-4 px-6">
            <p class="text-lg"><span class="material-icons-outlined text-lg mr-2 align-bottom"> call </span>電話：{{ item.tel }}</p>
            <p class="text-lg"><span class="material-icons-outlined text-lg mr-2 align-bottom"> schedule </span>時間：{{ item.time }}</p>
            <p class="text-lg"><span class="material-icons-outlined text-lg mr-2 align-bottom"> place </span>地址：{{ item.address }}</p>
          </div>
          <button type="button" class="btn bg-black text-white text-[19px] py-4 hover:opacity-80">詳細資訊</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: [
        {
          title: '台北中山旗艦店',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true',
          tel: '(02)000-1234',
          time: '10:00-21:00',
          address: '台北市中正區復興南路 132-1 號'
        },
        {
          title: '台北綠園店',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-2.png?raw=true',
          tel: '(02)000-2345',
          time: '10:00-21:00',
          address: '台北市中正區復興南路 132-1 號'
        },
        {
          title: '台中清水旗艦店',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-3.png?raw=true',
          tel: '(02)000-1234',
          time: '10:00-21:00',
          address: '台中市清水區經南一路 23 號 8 樓'
        },
        {
          title: '高雄中正形象店',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-4.png?raw=true',
          tel: '(07)000-2345',
          time: '10:00-21:00',
          address: '高雄市苓雅區中正路 38 號 12 樓'
        },
        {
          title: '高雄夢時代店',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-5.png?raw=true',
          tel: '(07)000-1234',
          time: '10:00-21:00',
          address: '高雄市前鎮區中華一路 63 號 6 樓'
        }
      ]
    }
  }
}
</script>
