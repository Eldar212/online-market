<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <catalog-item/>
  </div>
</template>

<script>
import CatalogItem from './catalog-item'
export default {
  name: 'catalog',
  components: { CatalogItem },
  data() {
    return {

    }
  }
}
</script>

<style>
  .catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
