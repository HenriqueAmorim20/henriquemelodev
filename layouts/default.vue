<template>
  <v-app class="window">
    <div v-if="!loading">
      <Navbar />
      <v-main>
        <Nuxt />
      </v-main>
      <Footer />
    </div>
    <Loading v-if="loading" />
  </v-app>
</template>

<script>
import Navbar from "~/layouts/navbar.vue";
import Footer from "~/layouts/footer.vue";
import Loading from "~/layouts/loading.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.addLoadEvent(this.preloader());
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    preloader() {
      if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.src = "_nuxt/static/error_404.svg";
        img2.src = "_nuxt/static/skillsbg.svg";
        img3.src = "_nuxt/static/perfil.jpg";
      }
    },
    addLoadEvent(func) {
      var oldonload = window.onload;
      if (typeof window.onload != "function") {
        window.onload = func;
      } else {
        window.onload = function () {
          if (oldonload) {
            oldonload();
          }
          func();
        };
      }
    },
  },
};
</script>

<style>
/* Global styles */

* {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "custom" !important;
  color: #fff !important;
}

body {
  overflow: hidden !important;
}

.window {
  background: #0f0e18 !important;
}

@font-face {
  font-family: "custom";
  src: url("~/assets/ChakraPetch-Light.ttf") format("truetype");
}

@font-face {
  font-family: "tech";
  src: url("~/assets/ShareTechMono-Regular.ttf") format("truetype");
}

.main {
  max-width: 1100px;
  margin: 0 auto 100px !important;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 10px 0 !important;
}
.header-name {
  min-width: 210px;
  font-size: 2rem !important;
  padding: 15px 25px !important;
}

.header-order {
  font-size: 1.3rem;
  font-family: "tech" !important;
  color: #1094bc !important;
}

.header-divider {
  width: 300px;
  border-bottom: 1px solid #1094bc41;
}
</style>
