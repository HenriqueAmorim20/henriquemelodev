<template>
  <v-app-bar color="transparent" height="100px" flat>
    <div class="navbar">
      <div class="logo">
        <img :src="require('@/static/brackets.svg')" />
        <span>Henrique Melo</span>
      </div>
      <span class="spacer"></span>
      <div
        v-for="item in menu"
        :key="item.name"
        @click="scroll(item.name)"
        class="navbar-item"
      >
        <span class="navbar-item-order">{{ item.order }}</span>
        <span class="navbar-item-name">{{ item.name }}</span>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "DesktopComponent",
  props: {
    menu: {
      type: Array,
      default: null,
    },
  },
  mounted() {
    ScrollReveal().reveal(".logo", {
      delay: 0,
      duration: 2500,
      distance: "100px",
      origin: "top",
    });
    ScrollReveal().reveal(".navbar-item", {
      delay: 0,
      duration: 2500,
      distance: "100px",
      origin: "top",
      interval: 100
    });
  },
  methods: {
    // call parent(navbar) function scroll
    scroll(to) {
      this.$emit("scroll", to);
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0 5% !important;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 3rem;
  margin: 0 15px 0 0 !important;
}

.navbar-item {
  margin: 0 0 0 35px !important;
  cursor: pointer;
}

.navbar-item:hover .navbar-item-name {
  color: #1094bc !important;
}

.navbar-item-name {
  font-size: 1.1rem;
  text-transform: capitalize;
}

.navbar-item-order {
  font-family: "tech" !important;
  color: #1094bc !important;
  margin: 0 3px 0 0 !important;
}

.spacer {
  flex: 1 1 auto;
}
</style>
