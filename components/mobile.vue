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
        <img :src="require('@/static/brackets.svg')" class="load-hidden" />
        <span class="load-hidden">Henrique Melo</span>
        <span class="spacer"></span>
        <div class="navbar-mobile-icon load-hidden">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <v-icon style="font-size: 2rem">mdi-menu</v-icon>
          </v-app-bar-nav-icon>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right class="drawer">
      <v-row class="drawer-close">
        <v-spacer></v-spacer>
        <svg
          @click.stop="drawer = !drawer"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="3.5rem"
          height="3.5rem"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 50 50"
        >
          <path
            fill="white"
            d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
          />
          <path
            fill="white"
            d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
          />
        </svg>
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
      ScrollReveal().reveal(".navbar-mobile img", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-mobile span", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-mobile-icon", {
        delay: 100,
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
.navbar-mobile img {
  width: 3rem;
  margin: 0 15px 0 0 !important;
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

.drawer-close:hover {
  color: #1094bc !important;
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
