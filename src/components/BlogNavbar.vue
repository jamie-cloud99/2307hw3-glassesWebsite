<template>
  <div class="hidden bg-apple-dark text-white py-2 md:block">
    <div class="container">
      <div class="flex justify-between items-center">
        <ul class="flex gap-12">
          <li
            class=" text-lg transition-transform duration-300 hover:-translate-y-0.5"
            v-for="item in blogCategories"
            :key="item"
          >
            <a class="block py-2" href="">{{ item }}</a>
          </li>
        </ul>
        <div><button type="button"><span class="material-icons-outlined text-[40px] align-bottom transition-transform duration-300 hover:-translate-y-0.5"> search </span></button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogCategories: ['最新消息', '特別企劃', '新品上市', '鏡框小知識']
    }
  }
}
</script>
