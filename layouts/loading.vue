<template>
  <div class="full">
    <div class="Loader"></div>
    <div class="logo">
      <img :src="require('@/static/brackets.svg')" />
      <span>Henrique Melo</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingLayout",
};
</script>

<style scoped scass>
.full {
  height: 100vh !important;
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  position: absolute;
  top: 48%;
}

.logo img {
  width: 3.5rem;
  margin: 0 15px 0 0 !important;
}

.Loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 17rem;
  margin-top: 17rem/2;
  margin-bottom: 17rem/2;
}

.Loader::before,
.Loader::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  filter: drop-shadow(0 0 0.5rem/2.25 rgba(#fff, 0.75));
}
.Loader::before {
  width: 100%;
  padding-bottom: 100%;
  box-shadow: inset 0 0 0 0.5rem #fff;
  animation-name: pulsA;
}
.Loader::after {
  width: calc(100% - 1rem);
  padding-bottom: calc(100% - 1rem);
  box-shadow: 0 0 0 0 #fff;
  animation-name: pulsB;
}

@keyframes pulsA {
  0% {
    box-shadow: inset 0 0 0 0.5rem #fff;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 #fff;
    opacity: 0;
  }
}

@keyframes pulsB {
  0%,
  50% {
    box-shadow: 0 0 0 0 #fff;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 0.5rem #fff;
    opacity: 1;
  }
}
</style>
