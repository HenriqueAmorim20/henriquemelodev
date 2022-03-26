<template>
  <v-footer class="footer">
    <v-row>
      <v-col cols="6" align="center" class="footer-text">
        <span>
          All rights reserved Henrique Melo &copy;
          {{ new Date().getFullYear() }}
        </span>
      </v-col>
      <v-col cols="6" align="start" class="footer-media">
        <a
          href="https://www.linkedin.com/in/henriqueamorim20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon class="footer-media-icon">mdi-linkedin</v-icon>
        </a>
        <a
          href="https://github.com/HenriqueAmorim20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon class="footer-media-icon">mdi-github</v-icon>
        </a>
        <a
          href="https://www.instagram.com/henriqueamorimcm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon class="footer-media-icon">mdi-instagram</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterLayout",
};
</script>

<style scoped>
.footer {
  background-color: transparent !important;
  padding: 30px 0px !important;
}

.footer-media,
.footer-text {
  padding: 15px 5px !important;
}

.footer-media {
  min-width: 160px;
}

.footer-text {
  min-width: 320px;
}

.footer-media a {
  text-decoration: none;
}

.footer-media-icon {
  font-size: 1.2rem;
  margin: 0 0.5rem !important;
  transition: 0.5s all ease;
}

.footer-media-icon:hover {
  color: #1094bc !important;
}
</style>
