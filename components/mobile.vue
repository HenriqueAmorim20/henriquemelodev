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
      <div class="navbar">
        <img :src="require('@/static/brackets.svg')" />
        <span>Henrique Melo</span>
        <span class="spacer"></span>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
          >
            <path
              class="clr-i-outline clr-i-outline-path-1"
              d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2z"
              fill="white"
            />
            <path
              class="clr-i-outline clr-i-outline-path-2"
              d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2z"
              fill="white"
            />
            <path
              class="clr-i-outline clr-i-outline-path-3"
              d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2z"
              fill="white"
            />
          </svg>
        </v-app-bar-nav-icon>
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
          width="4rem"
          height="4rem"
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
      <div
        v-for="item in menu"
        :key="item.name"
        class="drawer-item"
        @click="scroll(item.name)"
      >
        <span class="drawer-item-order">{{item.order}}</span>
        <span class="drawer-item-name">{{ item.name }}</span>
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
  methods: {
    // Closes drawer then call parent(navbar) function scroll
    scroll(to) {
      this.drawer = false;
      setTimeout(() => {
        this.$emit("scroll", to);
      }, 800);
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
.navbar img {
  width: 3rem;
  margin: 0 15px 0 0 !important;
}

.drawer {
  z-index: 11;
  background-color: #0f0e18 !important;
  width: 425px !important;
  padding: 15px !important;
}

.drawer-close {
  margin-bottom: 40px !important;
  cursor: pointer;
}

.drawer-close:hover {
  color: #1094bc !important;
}

.drawer-item {
  display: flex;
  align-items: center;
  width: 100% !important;
  height: fit-content !important;
  cursor: pointer;
}

.drawer-item:hover .drawer-item-name{
  color: #1094bc !important;
}

.drawer-item-order {
  font-family: "tech" !important;
  color: #1094bc !important;
  margin: 0 10px 0 0 !important;
  font-size: 1.8rem;
}

.drawer-item-name {
  font-size: 2.8rem;
  text-transform: capitalize;
}
</style>
