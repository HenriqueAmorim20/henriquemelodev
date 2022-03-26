<template>
  <div>
    <div style="height: 60px"></div>
    <v-app-bar
      height="60"
      color="#0f0e18"
      elevation="5"
      elevate-on-scroll
      fixed
    >
      <div class="navbar-mobile">
        <img
          class="nav-logo-icon load-hidden"
          :src="require('@/static/brackets.svg')"
        />
        <span class="nav-logo-text load-hidden">Henrique Melo</span>
        <span class="spacer"></span>
        <div class="nav-icon load-hidden">
          <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right class="drawer">
      <v-row class="drawer-close">
        <v-spacer></v-spacer>
        <v-icon class="drawer-close-icon" @click.stop="drawer = !drawer">
          mdi-close
        </v-icon>
      </v-row>
      <div class="drawer-items">
        <div
          v-for="item in menu"
          :key="item.name"
          class="drawer-item"
          @click="scroll(item.name)"
        >
          <span class="drawer-item-order">{{ item.order }}</span>
          <span class="drawer-item-name">{{ item.name }}</span>
        </div>
      </div>
      <div class="logo">
        <img :src="require('@/static/brackets.svg')" />
        <span>Henrique Melo</span>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MobileComponent",
  props: {
    menu: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.revealScroll();
  },
  methods: {
    // Closes drawer then call parent(navbar) function scroll
    scroll(to) {
      this.drawer = false;
      this.$emit("scroll", to);
    },

    // Method called to initialize scroll reveal
    revealScroll() {
      // Mobile
      ScrollReveal().reveal(".nav-logo-icon", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".nav-logo-text", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".nav-icon", {
        delay: 200,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
    },
  },
};
</script>

<style scoped>
.navbar-mobile {
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0 5% !important;
}
.nav-logo-icon {
  width: 3rem;
  margin: 0 15px 0 0 !important;
}

.nav-logo-text {
  font-size: 1.5rem;
}

.nav-icon >>> * {
  font-size: 2rem;
}

.drawer {
  z-index: 11;
  background-color: #0f0e18 !important;
  width: 425px !important;
  padding: 15px !important;
}

.drawer-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80% !important;
  width: 100% !important;
}

.drawer-close {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
}

.drawer-close-icon {
  font-size: 3rem;
}

.divider {
  width: 100%;
  border-bottom: 1px solid #1094bc;
  margin-left: 15px !important;
}

.drawer-item {
  display: flex;
  align-items: center;
  width: 100% !important;
  height: fit-content !important;
  cursor: pointer;
}

.drawer-item:hover .drawer-item-name {
  color: #1094bc !important;
}

.drawer-item-order {
  font-family: "tech" !important;
  color: #1094bc !important;
  margin: 0 10px 0 0 !important;
  font-size: 1.3rem;
}

.drawer-item-name {
  font-size: 2.8rem;
  text-transform: capitalize;
}

.logo {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: 15px 10px 5px !important;
  left: 0;
  bottom: 10px;
}

.logo img {
  width: 50px !important;
  margin-right: 15px !important;
}

.logo span {
  font-size: 1.8rem;
}
</style>
