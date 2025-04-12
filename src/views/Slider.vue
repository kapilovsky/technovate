<template>
  <div class="slider-wrapper">
    <canvas></canvas>
  </div>

  <div class="overlay"></div>
</template>

<style scoped>
.slider-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 75%,
    rgba(23, 23, 23, 0.5) 100%
  );
  z-index: 1;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
</script>
