<template>
  <div>Desktop</div>
</template>

<script>
export default {
  name: 'DesktopComponent',
  props: {
    menu: {
      type: Array,
      default: null
    }
  },
  methods: {
    // call parent(navbar) function scroll
    scroll(to) {
      this.$emit("scroll", to)
    }
  }
}
</script>
