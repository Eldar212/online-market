<template>
  <div class="catalog">
<!--    <router-link :to="{name: 'cart', params: {cart_data: CART}}">-->
<!--      <div class="catalog__link_to_cart">{{CART.length}}</div>-->
<!--    </router-link>-->
    <h1>Catalog</h1>
    <Select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="catalog__list">
      <catalog-item
        v-for="product in filterProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from './catalog-item'
import Select from './select/select'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'catalog',
  components: {
    CatalogItem,
    Select
  },
  data () {
    return {
      categories: [
        { name: 'Все', value: 'ALL' },
        { name: 'Мужские', value: 'М' },
        { name: 'Женские', value: 'Ж' }
      ],
      selected: 'Все',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'SEARCH_VALUE'
    ]),
    filterProducts () {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories (category) {
      this.sortedProducts = [...this.PRODUCTS]
      const vm = this
      this.PRODUCTS.map(function (item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item)
        }
      })
      this.selected = category.name
    },
    sortProductsBySerchValue (value) {
      this.sotedProducts = [...this.PRODUCTS]
      if (value) {
        this.sotedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sotedProducts = this.PRODUCTS
      }
    }
  },
  watch: {
    SERCH_VALUE () {
      this.sortProductsBySerchValue(this.SERCH_VALUE)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          this.sortProductsBySerchValue(this.SERCH_VALUE)
        }
      })
  }
}
</script>

<style lang="scss">
  .catalog {
    width: 900px;
    position: absolute;
    right: 330px;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: 70px;
     }
    &__link_to_cart {
      position: absolute;;
      top: 10px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #eee;
    }
  }
</style>
