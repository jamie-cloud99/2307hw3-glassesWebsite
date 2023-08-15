<template>
  <header>
    <NavbarComponent></NavbarComponent>
  </header>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
