<template>
  <div>
    <div style="height: 60px"></div>
    <v-app-bar height="60" flat fixed color="#0f0e18">
      <div class="navbar-desktop">
        <img :src="require('@/static/brackets.svg')"  class="load-hidden"/>
        <span class="navbar-desktop-title load-hidden">Henrique Melo</span>
        <v-spacer></v-spacer>
        <div
          v-for="item in menu"
          :key="item.name"
          @click="scroll(item.name)"
          class="navbar-desktop-item load-hidden"
        >
          <span class="navbar-desktop-item-order">{{ item.order }}</span>
          <span class="navbar-desktop-item-name">{{ item.name }}</span>
        </div>
      </div>
    </v-app-bar>
  </div>
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
    this.revealScroll();
  },
  methods: {
    // call parent(navbar) function scroll
    scroll(to) {
      this.$emit("scroll", to);
    },

    // Method called to initialize scroll reveal
    revealScroll() {
      // Desktop
      ScrollReveal().reveal(".navbar-desktop img", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-desktop span", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-desktop .navbar-desktop-item", {
        delay: 150,
        duration: 1500,
        distance: "50px",
        origin: "top",
        interval: 150,
      });
    },
  },
};
</script>

<style scoped>
.navbar-desktop {
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0 5% !important;
}

.navbar-desktop img {
  width: 3rem;
  margin: 0 15px 0 0 !important;
}

.navbar-desktop-title {
  font-size: 1.3rem;
}

.navbar-desktop-item {
  margin: 0 0 0 35px !important;
  cursor: pointer;
}

.navbar-desktop-item:hover .navbar-desktop-item-name {
  color: #1094bc !important;
}

.navbar-desktop-item-name {
  font-size: 1.1rem;
  text-transform: capitalize;
}

.navbar-desktop-item-order {
  font-family: "tech" !important;
  color: #1094bc !important;
  margin: 0 3px 0 0 !important;
}

.spacer {
  flex: 1 1 auto;
}
</style>
