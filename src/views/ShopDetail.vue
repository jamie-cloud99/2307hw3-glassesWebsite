<template>
  <div class="pb-16 pt-10 md:py-20">
    <div class="container">
      <h2 class="before:title-before relative mb-6 ml-4 text-xl font-bold md:mb-10 md:text-3xl">
        門市據點
      </h2>
      <label for="area" class="mr-2 md:mr-4 md:text-xl">選擇分店</label>
      <select
        name="area"
        id="area"
        class="form-select mb-6 w-full max-w-[304px] border-[#CED4DA] bg-arrow-dropdown text-md text-[#495057]/75 md:mb-10"
      >
        <option value="台北中山旗艦店">台北中山旗艦店</option>
        <option value="台北綠園店">台北綠園店</option>
      </select>
      <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-12 xl:mb-0">
        <div class="md:col-span-6 xl:col-span-5">
          <div class="h-full flex flex-col">
            <img class="block w-full h-56 object-cover" :src="shop.imgUrl" :alt="shop.title" />
            <div class="hidden border border-black/20 xl:block xl:w-full flex-grow">
              <h3 class="border-b border-black/20 py-2 pl-6 text-xl">{{ shop.title }}</h3>
              <div class="px-6 py-4 ">
                <p class="text-lg">
                  <span class="material-icons-outlined mr-2 align-bottom text-lg"> call </span
                  >電話：{{ shop.tel }}
                </p>
                <p class="text-lg">
                  <span class="material-icons-outlined mr-2 align-bottom text-lg"> schedule </span
                  >時間：{{ shop.time }}
                </p>
                <p class="text-lg">
                  <span class="material-icons-outlined mr-2 align-bottom text-lg"> place </span
                  >地址：{{ shop.address }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-6 xl:col-span-7">
          <div class="h-full border border-black/20 xl:hidden">
            <h3 class="border-b border-black/20 py-2 pl-6 text-xl">{{ shop.title }}</h3>
            <div class="px-6 py-4">
              <p class="text-lg">
                <span class="material-icons-outlined mr-2 align-bottom text-lg"> call </span
                >電話：{{ shop.tel }}
              </p>
              <p class="text-lg">
                <span class="material-icons-outlined mr-2 align-bottom text-lg"> schedule </span
                >時間：{{ shop.time }}
              </p>
              <p class="text-lg">
                <span class="material-icons-outlined mr-2 align-bottom text-lg"> place </span
                >地址：{{ shop.address }}
              </p>
            </div>
          </div>
          <img class="hidden object-cover xl:block" src="@/assets/images/map.png" alt="地圖" />
        </div>
      </div>
      <img class="block w-full object-cover xl:hidden" src="@/assets/images/map.png" alt="地圖" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: {
        title: '台北中山旗艦店',
        imgUrl:
          'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/storepage-1.png?raw=true',
        tel: '(02)000-1234',
        time: '10:00-21:00',
        address: '台北市中正區復興南路 132-1 號'
      }
    }
  }
}
</script>
