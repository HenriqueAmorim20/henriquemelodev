<template>
  <div>
    <Mobile v-if="width <= 760" :menu="menu" @scroll="scroll"/>
    <Desktop v-if="width > 760" :menu="menu" @scroll="scroll"/>
  </div>
</template>

<script>
import Mobile from "~/components/mobile.vue";
import Desktop from "~/components/desktop.vue";

export default {
  name: "NavbarLayout",
  components: {
    Mobile,
    Desktop,
  },
  data() {
    return {
      width: null,
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
    };
  },

  mounted() {
    // Gets the device width and add a listener to watch changes on the width
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  //Remove listener before the component is destroyed
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    // Method called everytime window is resized
    onResize() {
      this.width = window.innerWidth;
    },

    // Scroll to element on page
    scroll(to) {
      const element = document.getElementById(to);
      const y = element?.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  },
};
</script>
