<template>
  <nav class="flex justify-between w-full p-4 text-white bg-transparent">
    <div class="instrument">GDGC UIET</div>
    <div class="flex gap-8">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/tracks">Tracks</RouterLink>
      <RouterLink active-class="active" to="/faqs">FAQs</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact Us</RouterLink>
    </div>
    <div>
      <RouterLink active-class="active" to="/register">Register</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.active {
  border-bottom: 2px solid white;
}

.instrument {
  font-family: Instrument Serif;
  font-size: 1.2em;
}
</style>
