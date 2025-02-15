<template>
  <nav class="flex justify-between w-full p-4 text-white bg-transparent">
    <div>GDGC</div>
    <div class="flex gap-8">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a href="#">Tracks</a>
      <a href="#">FAQ</a>
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
