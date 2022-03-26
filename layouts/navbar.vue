<template>
  <div>
    <!-- Navbar -->
    <v-app-bar class="navbar" height="65" flat fixed color="#0f0e18">
      <!-- Logo do site -->
      <div class="navbar-logo load-hidden">
        <img src="/brackets.svg" class="navbar-logo-img" />
        <span class="navbar-logo-label">Henrique Melo</span>
      </div>
      <v-spacer></v-spacer>
      <!-- Menu de navegacao para desktop -->
      <div class="navbar-menu">
        <div
          v-for="item in menu"
          :key="item.name"
          @click="scroll(item.name)"
          class="navbar-menu-item load-hidden"
        >
          <span class="navbar-menu-item-order">{{ item.order }}</span>
          <span class="navbar-menu-item-name">{{ item.name }}</span>
        </div>
      </div>
      <!-- Icone para mobile -->
      <div class="navbar-mobile load-hidden">
        <v-icon
          class="navbar-mobile-icon"
          @click.stop="drawer = !drawer"
        >
          mdi-menu
        </v-icon>
      </div>
    </v-app-bar>

    <!-- Menu drawer para mobile -->
    <v-navigation-drawer v-model="drawer" fixed right width="425px">
      <div class="drawer">
        <v-icon class="drawer-close-icon" @click.stop="drawer = !drawer">
          mdi-close
        </v-icon>
        <div class="drawer-items">
          <div
            v-for="item in menu"
            :key="item.name"
            class="drawer-item"
            @click="
              scroll(item.name);
              drawer = false;
            "
          >
            <span class="drawer-item-order">{{ item.order }}</span>
            <span class="drawer-item-name">{{ item.name }}</span>
          </div>
        </div>
        <div class="drawer-logo">
          <img src="/brackets.svg" class="drawer-logo-img" />
          <span class="drawer-logo-label">Henrique Melo</span>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "NavbarLayout",
  data() {
    return {
      menu: [
        {
          name: "about",
          order: "01.",
        },
        {
          name: "skills",
          order: "02.",
        },
        {
          name: "experience",
          order: "03.",
        },
        {
          name: "projects",
          order: "04.",
        },
      ],
      drawer: false,
    };
  },
  mounted() {
    this.revealScroll();
  },
  methods: {
    // Scroll to element on page
    scroll(to) {
      const element = document.getElementById(to);
      const y = element?.getBoundingClientRect().top + window.pageYOffset - 65;
      window.scrollTo({ top: y, behavior: "smooth" });
    },

    // Method called to initialize scroll reveal
    revealScroll() {
      ScrollReveal().reveal(".navbar-logo", {
        delay: 0,
        duration: 1500,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-menu-item", {
        delay: 100,
        duration: 1500,
        distance: "50px",
        origin: "top",
        interval: 100,
      });
      ScrollReveal().reveal(".navbar-mobile", {
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
/* Inicio navbar */
.navbar {
  max-width: 1300px;
  margin: 0 auto;
}
/* Inicio navbar */

/* Inicio icon mobile */
.navbar-mobile-icon {
  font-size: 2rem;
}
/* Fim icon mobile */

/* Inicio navbar logo */
.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo-img {
  width: 50px;
  margin-right: 1rem;
}

.navbar-logo-label {
  font-size: 1.4rem;
}
/* Fim navbar logo */

/* Inicio menu desktop */
.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-menu-item {
  margin: 0 0 0 2rem;
  cursor: pointer;
}

.navbar-menu-item:hover .navbar-menu-item-name {
  color: #1094bc;
}

.navbar-menu-item-name {
  font-size: 1.1rem;
  text-transform: capitalize;
}

.navbar-menu-item-order {
  font-family: "tech";
  color: #1094bc;
  margin: 0 3px 0 0;
}
/* Fim menu desktop */

/* Inicio drawer mobile */
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #0f0e18;
  padding: 1rem;
}

.drawer-close-icon {
  width: max-content;
  align-self: flex-end;
  font-size: 2.8rem;
}

.drawer-items {
  margin-top: -5rem;
}

.drawer-item {
  display: flex;
  align-items: center;
}

.drawer-item-order {
  font-family: "tech";
  color: #1094bc;
  margin: 0 1rem 0 0;
  font-size: 1.2rem;
}

.drawer-item-name {
  font-size: 2.5rem;
  text-transform: capitalize;
}

.drawer-logo {
  display: flex;
  align-items: center;
  align-self: flex-end;
}

.drawer-logo-img {
  width: 3rem;
  margin-right: 1rem;
}

.drawer-logo-label {
  font-size: 1.8rem;
}
/* Fim drawer mobile */

/* Inicio media query para desktop */
@media (min-width: 750px) {
  .navbar-mobile-icon {
    display: none;
  }
}
/* Fim media query para desktop */

/* Inicio media query para mobile */
@media (max-width: 751px) {
  .navbar-menu {
    display: none;
  }
}
/* Fim media query para mobile */
</style>
