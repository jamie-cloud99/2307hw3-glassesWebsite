<template>
  <div class="bg-apple-dark py-2 text-white">
    <div class="container">
      <div class="items-center justify-between md:flex">
        <ul class="mx-auto flex max-w-screen-sm justify-between gap-4 md:gap-12">
          <li
            class="text-lg transition-transform duration-300 hover:-translate-y-0.5"
            v-for="item in blogCategories"
            :key="item"
          >
            <a class="block py-2" href="">{{ item }}</a>
          </li>
        </ul>
        <div class="hidden md:block">
          <button type="button">
            <span
              class="material-icons-outlined align-bottom text-[40px] transition-transform duration-300 hover:-translate-y-0.5"
            >
              search
            </span>
          </button>
        </div>
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
