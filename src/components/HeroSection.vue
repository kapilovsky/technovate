<!-- HeroSection.vue -->
<template>
  <div class="hero-container" ref="heroContainerRef">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-spinner"></div>
      <div class="loading-text">Entering Product Universe</div>
    </div>

    <template v-else>
      <!-- Starry Background -->
      <div class="stars-container">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
      </div>

      <!-- Spotlight Effect -->
      <div ref="spotlightRef" class="spotlight"></div>

      <!-- Main Content -->
      <div class="content">
        <h1
          ref="titleRef"
          class="main-title"
          :class="{ 'animate-in': !isLoading }"
        >
          GDGC HACKATHON
        </h1>
        <p class="tagline" :class="{ 'animate-in': !isLoading }">
          Embark on a cosmic journey of innovation where your products <br />
          become constellations in the universe of possibilities
        </p>
        <div class="event-details" :class="{ 'animate-in': !isLoading }">
          <span
            v-for="(detail, index) in eventDetails"
            :key="index"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            {{ detail }}
          </span>
        </div>
        <button
          @click="handleRegister"
          class="register-btn"
          :class="{ 'animate-in': !isLoading }"
        >
          <span class="btn-text">Launch Your Journey</span>
          <div class="btn-glow"></div>
        </button>
      </div>

      <!-- Floating Elements -->
      <div class="floating-elements">
        <div class="orbit-circle"></div>
        <div class="constellation"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";

// Reactive State
const isLoading = ref(true);
const spotlightRef = ref(null);
const titleRef = ref(null);
const heroContainerRef = ref(null);

const eventDetails = reactive(["24 HOURS", "300+ HACKERS", "MARCH 2024"]);

// Mouse Effects Handlers
const handleMouseMove = (event) => {
  if (!spotlightRef.value) return;

  const { clientX, clientY } = event;
  const x = (clientX / window.innerWidth) * 100;
  const y = (clientY / window.innerHeight) * 100;

  spotlightRef.value.style.background = `radial-gradient(
    circle at ${x}% ${y}%,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0) 50%
  )`;

  // Parallax effect for title
  if (titleRef.value) {
    const xAxis = (window.innerWidth / 2 - clientX) / 25;
    const yAxis = (window.innerHeight / 2 - clientY) / 25;
    titleRef.value.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  }
};

const handleRegister = () => {
  // Add your registration logic here
  console.log("Registration clicked");
};

// Lifecycle Hooks
onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);

  // Simulate loading
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
@font-face {
  font-family: Basement;
  src: url(../assets/fonts/BasementGrotesque-Black_v1.202.otf);
}
.hero-container {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to top, #000000, #101015, #4314b036, #4c00ff36);
}

/* Loading Screen */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0b0b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #ff7000;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  color: #ff7000;
  margin-top: 20px;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

/* Stars Animation */
.stars-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.stars,
.stars2,
.stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(../assets/images/stars.png) repeat top center;
  z-index: 0;
}

.stars {
  animation: stars-animation 200s linear infinite;
}

/* .stars2 {
  background-image: url(../assets/images/stars.png);
  animation: stars-animation 150s linear infinite;
} */

.stars3 {
  background-image: url(../assets/images/stars2.png);
  animation: stars-animation 50s linear infinite;
}

/* Spotlight Effect */
.spotlight {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Main Content */
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 20vh;
}

.main-title {
  font-size: 5rem;
  letter-spacing: -6px;
  font-family: Basement;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #f0f0f0, #cc7dff, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transform: translateY(30px);
}

.tagline {
  font-size: 1.25rem;
  font-family: Arame;
  color: #f5f5f5;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  opacity: 0;
  transform: translateY(30px);
}

.event-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.event-details span {
  color: #ff7000;
  font-weight: 600;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(30px);
}

/* Register Button */
.register-btn {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background: linear-gradient(
    45deg,
    rgba(255, 112, 0, 0.8),
    rgba(59, 24, 95, 0.8)
  );
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.btn-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  transform: rotate(45deg);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes stars-animation {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-1000px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-in {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Effects */
.register-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 112, 0, 0.5);
}

.register-btn:hover .btn-glow {
  transform: rotate(45deg) translate(50%, 50%);
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .event-details {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
