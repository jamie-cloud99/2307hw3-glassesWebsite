<template>
  <nav aria-label="Page navigation example">
    <ul class="list-style-none flex">
      <li class="border border-dark">
        <a @click.prevent
          href="#"
          class="relative block px-3 py-1.5  text-dark transition-all duration-300 hover:bg-[#F2F2F2]"
          :class="{'link-disable': !pages.havePre}"
          >上一頁</a
        >
      </li>
      <li class="border border-dark" v-for="i in pages.totalPage" :key="'i' + i">
        <a @click.prevent
          class="block px-3 py-1.5 h-full text-dark transition-all duration-300 hover:bg-[#F2F2F2] "
          href="#" :class="{'link-active': i === pages.curPage}"
          >{{ i }}</a
        >
      </li>
      <li class="border border-dark">
        <a @click.prevent
          class="relative block px-3 py-1.5 text-dark transition-all duration-300 hover:bg-[#F2F2F2] "
          href="#"
          :class="{'link-disable': !pages.haveNext}"
          >下一頁</a
        >
      </li>
    </ul>
  </nav>
</template>


<script>

export default {
  data() {
    return {
      pages: {
        curPage: 2,
        totalPage: 5,
        haveNext: true,
        havePre: true
      }
    }
  }
}

</script>

