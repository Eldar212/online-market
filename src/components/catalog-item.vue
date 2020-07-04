<template>
<div class="catalog-item">
  <img class="catalogItem_image" :src=" require('../assets/images/' + product_data.image)"
       alt="">
  <p class="catalogItem_name">{{product_data.name}}</p>
  <p class="catalogItem_price">Price: {{product_data.price}} P.</p>
  <button
    class="catalogItem_add_to_card_btn"
    @click="addToCArt">
    В корзину
  </button>
</div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    addToCArt () {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted () {
    this.$set(this.product_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 4px *2;
    margin-bottom: 8px *2;
    width: 290px;
    border-radius: 7px;
  }
  .catalogItem_add_to_card_btn {
    background: #40bbc7;
    border-radius: 7px;
    height: 32px;
    color: #fff;
    border: none;
    box-shadow: 0 0 8px 0 #e0e0e0;
    font-size: large;
  }
  .catalogItem_image {
    width: 100px;
  }
</style>
