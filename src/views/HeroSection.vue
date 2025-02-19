<script setup>
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";
const canvasRef = ref(null);
const particles = ref([]);

const createParticle = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * 2,
  velocityX: (Math.random() - 0.5) * 0.5,
  velocityY: (Math.random() - 0.5) * 0.5,
  alpha: Math.random() * 0.5 + 0.5,
});

const initParticles = () => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particles.value = Array(100).fill().map(createParticle);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.value.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
      ctx.fill();

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > canvas.width) particle.velocityX *= -1;
      if (particle.y < 0 || particle.y > canvas.height)
        particle.velocityY *= -1;
    });

    requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  initParticles();
  window.addEventListener("resize", () => {
    if (canvasRef.value) {
      canvasRef.value.width = window.innerWidth;
      canvasRef.value.height = window.innerHeight;
    }
  });
});
</script>

<template>
  <div class="landing-page">
    <canvas ref="canvasRef" class="particles"></canvas>
    <Navbar />

    <div class="content">
      <div class="header">GDGC UIET Presents ⚡️</div>

      <h1 class="title text-5xl sm:text-6xl">
        Technovate Hackathon<br />
        <span class="italic">2025</span>
      </h1>

      <p class="subtitle mb-8">
        Embark on a cosmic journey of innovation where your products <br />
        become constellations in the universe of possibilities
      </p>

      <!-- <RouterLink to="/register" class="register-button"
        >Register Now</RouterLink
      > -->

      <p class="subtitle text-[#ff7000]">Problem Statements are out now!</p>
      <RouterLink to="/problems" class="register-button"
        >Problem Statements</RouterLink
      >

      <p class="subtitle">
        This year's theme is Product Universe. <br />
        #BuildProductsNotProjects
      </p>
    </div>

    <!-- <div class="ellipse"></div> -->
  </div>
</template>

<style>
:root {
  --gradient-start: #3b1a7e;
  --gradient-middle: #280da1;
  --gradient-end: #000000;
}
@font-face {
  font-family: Basement;
  src: url("../assets/fonts/BasementGrotesque-Black_v1.202.otf");
}
.landing-page {
  min-height: 100vh;
  background: radial-gradient(
    circle at top,
    var(--gradient-start) 0%,
    var(--gradient-middle) 50%,
    var(--gradient-end) 100%
  );
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8rem;
}

nav {
  font-family: Inter;
  font-weight: 600;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

.header {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 2rem;
}

.title {
  font-family: Basement;
  font-weight: bold;
  letter-spacing: -4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #ffffff, #8599ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.italic {
  font-style: italic;
  font-weight: normal;
  font-family: Instrument Serif;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  line-height: 1.6;
}

/* .register-button {
  padding: 0.8rem 1.5rem;
  font-family: Inter;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  background: white;
  color: black;
  cursor: pointer;
  transition: opacity 0.2s ease;
} */

button:hover {
  opacity: 0.9;
}

.ellipse {
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 200%;
  height: 300px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
  border-radius: 50% 50% 0 0;
  filter: blur(30px);
  box-shadow: 0 -10px 50px rgba(0, 26, 255, 0.2);
}

.register-button {
  background: rgba(255, 112, 0, 0.1);
  color: #ff7000;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  display: inline-block;
  margin: 1rem auto;
  font-weight: 600;
  border: 1px solid rgba(255, 112, 0, 0.2);
  animation: pulsee 2s infinite;
  text-align: center;
  font-family: Instrument Serif;
  font-size: 1.1em;
}

@keyframes pulsee {
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
</style>
