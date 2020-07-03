<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
    <div class="cart_item_info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart_item_data__quantiy">
      <p>Qty:</p>
      <span>
        <span class="quantity__btn" @click="decremetItem">-</span>
          {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
      </div>
    <button
      @click="deleteFromCart">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart')
    },
    decremetItem () {
      this.$emit('decrement')
    },
    incrementItem () {
      this.$emit('increment')
    }
  },
  mounted () {}
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 4px *2;
    margin-bottom: 8px *2;
    &__image {
      max-width: 50px;
    }
  }
  .quantity__btn {
    cursor: pointer;
  }
</style>
