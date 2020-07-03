<template>
  <div class="select">
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{selected}}
    </p>
    <div
      class="options"
      v-if="areOptionsVisible"
    >
      <p
        v-for='options in options'
        :key="options.value"
        @click="selectOptions(options)"
      >
        {{options.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOptions (options) {
      this.$emit('select', options)
      this.areOptionsVisible = false
    },
    hideSelect () {
      this.areOptionsVisible = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect())
  }
}
</script>

<style>
  .select {
    position: relative;
    width: 200px;
    z-index: 1;
  }
  .title {
    border: solid 1px #2c3e50;
    cursor: pointer;
  }
  .select p {
    margin: 0;
    font-size: 18px;
  }
  .options {
    border: solid 1px #2c3e50;
    position: absolute;
    top: 25px;
    right: 0;
    width: 100%;
    cursor: pointer;
  }
  .options p:hover {
    background: #e7e7e7;
    font-size: 20px;
  }
</style>
