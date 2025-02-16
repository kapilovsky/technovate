<template>
  <section class="about-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div class="content-wrapper mt-16 max-w-5xl mx-auto">
      <div class="heading">About Technovate Hackathon</div>
      <div
        class="w-24 h-1 bg-gradient-to-r from-[#f8f8f8] to-blue-500 mx-auto rounded-full mb-16"
      ></div>

      <div class="flex flex-col gap-8 content">
        <div class="flex sm:flex-row flex-col gap-8 text-left">
          <div
            class="bg-black/20 backdrop-blur-sm flex-[3] p-4 px-6 rounded-2xl"
          >
            UIET Chandigarh presents TECHNOVATE’25, a thrilling 24-hour
            hackathon powered by the GDGC Club! <br />
            This year’s theme, Space and Cosmos
            <span class="text-xl gradient-span px-3 rounded-2xl">✨</span>,
            challenges you to innovate and code solutions inspired by the
            vastness of the universe. Get ready to push the boundaries of your
            imagination!
          </div>
          <div
            class="bg-black/20 backdrop-blur-sm flex-[1.5] p-4 px-6 rounded-2xl"
          >
            <h1 class="text-xl font-bold mb-2">
              Event Highlights
              <span class="text-xl gradient-span px-3 rounded-2xl">⚡</span>
            </h1>
            <ul class="list-disc list-inside">
              <li>24 Hours of Innovation</li>
              <li>Expert Mentorship</li>
              <li>Exciting Prizes</li>
              <li>Networking Opportunities</li>
            </ul>
          </div>
        </div>
        <div class="flex sm:flex-row flex-col gap-8 text-left">
          <div class="bg-black/20 backdrop-blur-sm p-4 px-6 rounded-2xl">
            <h1 class="text-xl font-bold mb-2">Why Participate?</h1>
            Launch your ideas into orbit, collaborate with fellow innovators,
            and create products that will revolutionize the digital universe.
          </div>
          <div class="bg-black/20 backdrop-blur-sm p-4 px-6 rounded-2xl">
            <h1 class="text-xl font-bold mb-2">Who Can Participate?</h1>
            Open to all university students passionate about technology,
            innovation, and creating stellar products .
          </div>
        </div>
      </div>
    </div>
    <div class="gradient-overlay"></div>
  </section>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  background: linear-gradient(to bottom, #000000, #1a0846, #280da1d1);
  /* background: radial-gradient(
    circle at bottom,
    var(--gradient-start) 0%,
    var(--gradient-middle) 50%,
    var(--gradient-end) 100%
  ); */
  position: relative;
  overflow: hidden;
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

.about-section::before,
.about-section::after {
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

.about-section::before {
  top: 20%;
  left: -100px;
}

.about-section::after {
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
.about-section::after {
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

/* Optional: Add animated particles */
@keyframes particle-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-200px);
  }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particle-float 4s infinite ease-in-out;
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

  .about-section {
    padding: 3rem 1rem;
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import Navbar from "../components/Navbar.vue";

// Optional: Add dynamic particles
onMounted(() => {
  const section = document.querySelector(".about-section");
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    section.appendChild(particle);
  }
});
</script>
