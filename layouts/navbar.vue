<template>
  <div>
    navbar
    <Mobile />
    <Desktop />
  </div>
</template>

<script>

import Mobile from "~/components/mobile.vue"
import Desktop from "~/components/desktop.vue"

export default {
  name: 'NavbarLayout',
  components: {
    Mobile,
    Desktop
  }
}
</script>
