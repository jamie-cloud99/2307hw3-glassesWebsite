<template>
  <div class="bg-home-bn-sm bg-cover bg-center py-36 md:py-74 xl:bg-home-bn">
    <div class="container">
      <div class="text-end">
        <h1 class="mb-2 text-xl font-bold text-apple-dark md:mb-1 md:text-4xl">
          <span class="block text-base font-normal md:text-2xl">Promise-Desert 2020 早春系列</span>
          看得清，才能看得遠
        </h1>
        <button type="button" class="btn bg-apple text-white hover:bg-apple-dark">立即購買</button>
      </div>
    </div>
  </div>

  <main>
    <div class="bg-apple-light py-10 text-center text-apple-dark md:py-20">
      <div class="container">
        <h2 class="text-xl font-bold md:text-3xl">用專業的心，做專業的事</h2>
        <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <li class="py-6" v-for="item in features" :key="item.title">
            <p>
              <span class="material-icons-outlined mb-4 text-9xl">{{ item.icon }}</span>
            </p>
            <h3 class="mb-2 text-xl font-bold">{{ item.title }}</h3>
            <p class="text-start text-black">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="py-10 text-center text-apple-dark md:py-20">
      <div class="container">
        <h2 class="mb-6 text-xl font-bold md:mb-12 md:text-3xl">經典系列鏡框</h2>
        <ul class="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <li v-for="item in productsCategories" :key="item.title">
            <a href="#" class="block">
              <img
                class="mx-auto mb-2 block hover:opacity-80 md:w-1/2 xl:w-full"
                :src="item.imgUrl"
                :alt="item.title"
              />
              <h3 class="text-3xl font-black italic text-apple">{{ item.title }}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="xl:bg-index-lg bg-index-bg-sm bg-cover bg-center py-10 text-center md:bg-index-bg-md md:py-20"
    >
      <div class="container">
        <h2 class="mb-6 text-xl font-bold text-white md:mb-12 md:text-3xl">聯名設計鏡框</h2>
        <ul class="grid grid-cols-1 gap-y-6 xl:grid-cols-2">
          <li v-for="item in coBrandings" :key="item.title">
            <a href="#" class="block">
              <picture>
                <source
                  class="max-h-60 w-full object-cover"
                  media="(min-width: 1280px)"
                  :srcset="item.imgUrl"
                />
                <img class="max-h-60 w-full object-cover" :src="item.imgUrlSm" :alt="item.title" />
              </picture>
              <h3 class="bg-white py-2 text-3xl font-black italic text-apple">{{ item.title }}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="py-10 text-center sm:py-20">
      <div class="container">
        <h2 class="mb-6 text-xl font-bold text-apple-dark md:mb-12 md:text-3xl">顧客推薦</h2>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <li
            v-for="item in reviews"
            :key="item.name"
            class="block overflow-hidden rounded bg-white text-start shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          >
            <div class="overflow-hidden">
              <img
                class="block transition-all duration-500 hover:scale-110"
                :src="item.imgUrl"
                :alt="item.name"
              />
            </div>
            <div class="mb-10 p-4">
              <h3 class="mb-2 font-medium">{{ item.name }}</h3>
              <p>{{ item.review }}</p>
            </div>
            <div class="p-4">
              <p class="text-sm text-light">{{ item.date }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-apple-light py-10 text-center md:py-20">
      <div class="container">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div class="md:col-span-10 md:col-start-2 xl:col-span-6 xl:col-start-4">
            <h2 class="mb-6 text-xl font-bold text-apple-dark md:text-3xl xl:mb-12">聯絡我們</h2>
            <p class="mb-6 xl:text-lg">
              我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
            </p>

            <form class="text-start">
              <div class="mb-4">
                <label for="name" class="mb-2 block">姓名</label>
                <input
                  class="form-input block w-full border-black bg-transparent px-3 py-1.5 placeholder:text-[#00000033]"
                  type="text"
                  id="name"
                  placeholder="陳小明"
                />
              </div>
              <div class="mb-4">
                <label for="phone" class="mb-2 block">聯絡電話</label>
                <input
                  class="form-input block w-full border-black bg-transparent px-3 py-1.5 placeholder:text-[#00000033]"
                  type="tel"
                  id="phone"
                  placeholder="0912-345-678"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="mb-2 block">電子郵件</label>
                <input
                  class="form-input block w-full border-black bg-transparent px-3 py-1.5 placeholder:text-[#00000033]"
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>
              <div class="mb-4">
                <label for="message" class="mb-2 block">意見反應</label>
                <textarea
                  class="form-textarea block h-[136px] w-full border-black bg-transparent px-3 py-1.5 placeholder:text-[#00000033]"
                  type="text"
                  id="message"
                  placeholder="請輸入您的意見"
                />
              </div>
              <div class="mb-6 flex md:mb-12">
                <input
                  class="form-checkbox mr-1 inline-block h-5 w-5 border-black bg-transparent text-apple checked:ring-apple focus:ring-apple"
                  type="checkbox"
                  id="privacy-policy"
                />
                <label for="privacy-policy"
                  >我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label
                >
              </div>
              <div class="md:grid md:grid-cols-10 xl:grid-cols-6">
                <div class="md:col-span-6 md:col-start-3 xl:col-span-4 xl:col-start-2">
                  <button
                    class="btn w-full bg-apple py-4 font-bold text-white hover:bg-apple-dark"
                    type="button"
                  >
                    確認送出
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: '單一價格',
          icon: 'paid',
          description: '無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。'
        },
        {
          title: '20 分鐘即可取件',
          icon: 'schedule',
          description:
            '為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。'
        },
        {
          title: '安心售後服務',
          icon: 'favorite_border',
          description:
            '我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。'
        },
        {
          title: '關於鏡片',
          icon: 'voicemail',
          description: '使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。'
        }
      ],
      productsCategories: [
        {
          title: 'OPTICAL',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true'
        },
        {
          title: 'SUNGLASSES',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true'
        },
        {
          title: 'FUNCTIONAL',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true'
        }
      ],
      coBrandings: [
        {
          title: 'DOUBLE A+',
          imgUrlSm:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true'
        },
        {
          title: 'YOUTH',
          imgUrlSm:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true'
        }
      ],
      reviews: [
        {
          name: 'Jessy',
          review: '眼鏡品質優良，下次還會想來這邊購買！',
          date: '2021/06/20',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-1.png?raw=true'
        },
        {
          name: '凱倫',
          review: '做工細緻、鏡架很輕盈，戴久也不會覺得有負擔，推薦給大家！',
          date: '2021/04/18',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-2.png?raw=true'
        },
        {
          name: '悠悠',
          review: '謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！',
          date: '2020/12/25',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-3.png?raw=true'
        },
        {
          name: 'Kyuan',
          review: '服務很好，品質沒有任何問題，非常喜歡。',
          date: '2020/10/31',
          imgUrl:
            'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-4.png?raw=true'
        }
      ]
    }
  }
}
</script>
