<template>
<div class="catalogItem">
  <p>Item 1</p>
  <p>Price</p>
  <button>Add to cart</button>
</div>
</template>

<script>
export default {
  name: 'catalog-item'
}
</script>

<style>
  .catalogItem {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>
