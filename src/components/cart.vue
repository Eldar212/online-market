<template>
<div class="cart">
   <!-- <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">Back to Catalog</div>
    </router-link> -->
  <h1>Cart</h1>
  <p v-if="!cart_data.length">There are no produts in cart...</p>
  <cart-item
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart='deleteFromCart(index)'
    @increment='increment(index)'
    @decrement='decrement(index)'
  />
  <div class="cart__total">
    <p class="total__name">Total:</p>
    <p>{{cartTotalCoast}} P.</p>
  </div>
  </div>
</template>

<script>
import cartItem from './cart-item'
import { mapActions } from 'vuex'

export default {
  name: 'cart',
  components: {
    cartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    cartTotalCoast () {
      let result = []

      if (this.cart_data.length) {
        for (const item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    },
    increment (index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement (index) {
      this.DECREMENT_CART_ITEM(index)
    }
  }
}
</script>

<style lang="scss">
  .cart {
    margin-bottom: 100px;

    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background: #26ae68;
      color: #ffffff;
      font-size: 20px;
    }

    .total__name {
      margin-right: $margin*2;
    }
  }
  .catalog {
    &__list {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
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
