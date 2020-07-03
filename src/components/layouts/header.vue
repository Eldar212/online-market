<template>
<header class="header">
  <router-link :to="{name: 'mainPage'}">
    <span class="logo">
      Logo
    </span>
  </router-link>
  <div class="search">
    <input
      type="text"
      class="search-field"
      v-model="searchValue"
    >
    <button
      class="seacrh-btn"
    >
      <img
        @click="search(searchValue)"
        class="seacrh-icon" src="../../../public/img/icons/search-icon.png" alt=""
      >
    </button>

  </div>
  <ul class="main-header-list">
    <li>
      <img src="../../../public/img/icons/home-icon.png" alt="">
      <p>Главная</p>
    </li>
    <li>
      <img src="../../../public/img/icons/icon-categories.png" alt="">
      <p>Категории</p>
    </li>
  </ul>
  <div class="cart">
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
