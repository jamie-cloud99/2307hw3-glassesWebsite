<template>
  <div class="pb-16 pt-10 md:py-20">
    <div class="container">
      <h1 class="before:title-before relative mb-6 ml-4 text-xl font-bold md:mb-8 md:text-3xl">
        常見問題
      </h1>
      <h2 class="mb-6 text-xl font-bold">我想詢問配鏡問題</h2>
      <ol class="grid grid-cols-1 gap-x-6 gap-y-6 md:gap-y-8 xl:grid-cols-3">
        <li class="col-span-2" v-for="item in faqList" :key="item.question">
          <h3 class="mb-2 text-lg font-bold">{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          question: 'Q1.請問可否自備鏡框單配鏡片？',
          answer:
            'A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。'
        },
        {
          question: 'Q2.眼鏡都可以20分鐘取件嗎？',
          answer:
            'A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。'
        },
        {
          question: 'Q3.散光鏡片需要額外加價嗎？',
          answer:
            'A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。'
        },
        {
          question: 'Q4.我可以使用舊眼鏡的度數配鏡片嗎？',
          answer:
            'A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。'
        },
        {
          question: 'Q5.請問可以單購買鏡框嗎？',
          answer:
            'A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。'
        }
      ]
    }
  }
}
</script>
