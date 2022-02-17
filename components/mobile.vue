<template>
  <div>Mobile</div>
</template>

<script>
export default {
  name: 'MobileComponent',
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
