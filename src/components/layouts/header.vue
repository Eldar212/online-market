<template>
<header class="header">
  <router-link :to="{name: 'mainPage'}">
    <span class="logo">
      <img src="../../../public/img/icons/logo.png" alt="">
    </span>
  </router-link>
  <div class="search">
    <input
      type="text"
      class="search-field"
      v-model="searchValue"
    >
    <button class="seacrh-btn">
      <img
        @click="search(searchValue)"
        class="seacrh-icon" src="../../../public/img/icons/search-icon.png" alt=""
      >
    </button>

  </div>
  <ul class="main-header-list">
    <router-link :to="{name: 'mainPage'}">
      <li>
        <img src="../../../public/img/icons/home-icon.png" alt="">
        <p>Главная</p>
      </li>
    </router-link>
    <router-link :to="{name: 'catalog'}">
      <li>
        <img src="../../../public/img/icons/icon-categories.png" alt="">
        <p>Каталог</p>
      </li>
    </router-link>
  </ul>
  <div class="toCart">
    <img src="../../../public/img/icons/cart-icon.png" alt="">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <p>Корзина {{CART.length}}</p>
    </router-link>
  </div>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'header',
  data () {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search (value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value)
      if (this.$router.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style lang="scss">

</style>
