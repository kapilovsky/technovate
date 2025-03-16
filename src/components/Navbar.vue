<template>
  <nav class="p-4 w-full text-white bg-transparent relative">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="instrument z-[51]">GDGC UIET</div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
        <RouterLink active-class="active" to="/tracks">Tracks</RouterLink>
        <RouterLink active-class="active" to="/faqs">FAQs</RouterLink>
        <RouterLink active-class="active" to="/gallery">Gallery</RouterLink>
        <RouterLink active-class="active" to="/contact">Contact Us</RouterLink>
      </div>

      <!-- Desktop Register Button -->
      <div class="hidden md:block">
        <RouterLink active-class="active" to="/register">Register</RouterLink>
      </div>

      <!-- Hamburger Button -->
      <button
        class="md:hidden z-[51] relative w-8 h-8 flex flex-col justify-center items-center"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white my-1.5 transition-all duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
        ></span>
      </button>

      <!-- Mobile Menu -->
      <div
        class="fixed z-50 inset-0 backdrop-blur-lg transform transition-transform duration-300 ease-in-out"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        v-if="isMenuOpen || $route.path !== currentPath"
      >
        <div
          class="flex flex-col bg-[#110139]/80 items-center justify-center h-full gap-8 text-lg"
        >
          <RouterLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            @click="closeMenu"
            class="mobile-link"
          >
            {{ link.name }}
          </RouterLink>
          <RouterLink
            to="/register"
            @click="closeMenu"
            class="mobile-register-btn"
          >
            Register
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);
const currentPath = ref(route.path);

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tracks", path: "/tracks" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Close menu on route change
watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath;
    isMenuOpen.value = false;
  }
);
</script>

<style scoped>
.active {
  border-bottom: 2px solid white;
}

.instrument {
  font-family: "Instrument Serif", serif;
  font-size: 1.2em;
}

.mobile-link {
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.mobile-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.mobile-link:hover::after {
  width: 100%;
}

.mobile-register-btn {
  padding: 0.8rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.mobile-register-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Animation for menu items */
.mobile-link {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for menu items */
.mobile-link:nth-child(1) {
  animation-delay: 0.1s;
}
.mobile-link:nth-child(2) {
  animation-delay: 0.2s;
}
.mobile-link:nth-child(3) {
  animation-delay: 0.3s;
}
.mobile-link:nth-child(4) {
  animation-delay: 0.4s;
}
.mobile-link:nth-child(5) {
  animation-delay: 0.5s;
}
.mobile-register-btn {
  animation-delay: 0.6s;
}

/* Ensure smooth transitions */
@media (max-width: 768px) {
  .mobile-link {
    font-size: 1.25rem;
    padding: 1rem;
  }

  .mobile-register-btn {
    margin-top: 1rem;
  }
}

/* Optional: Add blur effect when menu is open */
.blur-bg {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
