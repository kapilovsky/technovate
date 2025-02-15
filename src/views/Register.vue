<template>
  <section class="tracks-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div
      class="content-wrapper flex flex-col justify-center mt-16 max-w-7xl mx-auto"
    >
      <div class="status-badge">REGISTRATIONS CLOSED</div>
      <div class="heading">Thank You for Your Overwhelming Response!</div>
      <div class="text-white/70 text-center">
        We've received an incredible
        <span class="highlight">150+</span> registrations, far exceeding our
        expectations!
      </div>
      <div class="text-white/70 mb-4 text-center">
        Selected Team's Leaders will be notified via email. Stay tuned for more!
      </div>
      <div
        class="w-24 h-1 bg-gradient-to-r from-[#f8f8f8] to-blue-500 mx-auto rounded-full mb-2"
      ></div>
    </div>
    <div class="gradient-overlay"></div>
  </section>
</template>

<style>
.tracks-section {
  min-height: 100vh;
  /* background: linear-gradient(to bottom, #000000, #1a0846, #280da1d1); */
  background: radial-gradient(
    circle at center,
    #150634 0%,
    #280da1 70%,
    #000 100%
  );
  position: relative;
  overflow: hidden;
}

.status-badge {
  background: rgba(255, 112, 0, 0.1);
  color: #ff7000;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  display: inline-block;
  margin: 1rem auto;
  font-weight: 600;
  border: 1px solid rgba(255, 112, 0, 0.2);
  animation: pulse 2s infinite;
  text-align: center;
  font-family: Instrument Serif;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 112, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 112, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 112, 0, 0);
  }
}

.gradient-span {
  background: linear-gradient(
    to right,
    #ff9d00 -20%,
    #000000 40%,
    #280da1 130%
  );
}

.stars-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.5) 1.2px,
    transparent 1px
  );
  background-size: 30px 30px;
  opacity: 0.5;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

.heading {
  font-family: Basement;
  font-size: 2.5rem;
  background: linear-gradient(to right, #ffffff, #8599ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: center;
}

.gradient-overlay {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, transparent, hwb(251 2% 72%));
  pointer-events: none;
}

.tracks-section::before,
.tracks-section::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(59, 26, 126, 0.4),
    transparent
  );
  filter: blur(60px);
  animation: float 10s infinite alternate ease-in-out;
}

.tracks-section::before {
  top: 20%;
  left: -100px;
}

.tracks-section::after {
  bottom: 20%;
  right: -100px;
  animation-delay: -5s;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Add nebula effect */
.tracks-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(138, 43, 226, 0.2),
      transparent 40%
    ),
    radial-gradient(circle at 80% 70%, rgba(65, 105, 225, 0.2), transparent 40%);
  pointer-events: none;
}

.content {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .heading {
    font-size: 2rem;
  }

  .tracks-section {
    padding: 3rem 1rem;
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
</script>
