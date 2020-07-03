<template>
  <div class="MainWrapper">
    <Header/>
<!--    <Select-->
<!--      :options="options"-->
<!--      @select="selectOptions"-->
<!--      :selected="selected"-->
<!--    />-->
<!--    <p>Selected options {{selected}}</p>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from './layouts/header'
// import Select from './select/select'
export default {
  name: 'main-wrapper',
  components: {
    Header
    // Select
  },
  data () {
    return {
      options: [
        {
          name: 'Options 1',
          value: 1
        },
        {
          name: 'Options 2',
          value: 2
        },
        {
          name: 'Options 3',
          value: 3
        },
        {
          name: 'Options 4',
          value: 4
        }
      ],
      selected: 'Select'
    }
  },
  methods: {
    selectOptions (options) {
      this.selected = options.name
    }
  }
}
</script>

<style>
.MainWrapper {
  max-width: 100%;
  margin: 0 auto;
}
</style>
