<template>
  <nav class="flex justify-between w-full p-4 text-white bg-transparent">
    <div>GDGC</div>
    <div class="flex gap-8">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/tracks">Tracks</RouterLink>
      <RouterLink active-class="active" to="/faqs">FAQs</RouterLink>
      <a href="#">Contact</a>
    </div>
    <div>
      <button>Register</button>
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
</style>
