<template>
  <section class="tracks-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div class="content-wrapper mt-8 max-w-7xl mx-auto">
      <div class="heading">Explore the Tracks</div>
      <div class="text-white/70 mb-4 text-center">
        Choose your cosmic path and launch your innovation journey
      </div>
      <div
        class="w-24 h-1 bg-gradient-to-r from-[#f8f8f8] to-blue-500 mx-auto rounded-full mb-2"
      ></div>

      <div class="flex sm:flex-row flex-col justify-center gap-8 content">
        <!-- Blockchain Card -->
        <div class="track-card blockchain-card">
          <div class="card-icon">🔗</div>
          <h3 class="card-title">Blockchain</h3>
          <p class="card-description">
            Dive into the decentralized future. Create innovative solutions
            using blockchain technology, smart contracts, and Web3
            infrastructure.
          </p>
          <ul class="track-features text-left">
            <li>Smart Contracts</li>
            <li>DeFi Solutions</li>
            <li>NFT Platforms</li>
            <li>Decentralized Apps</li>
          </ul>
          <div class="card-overlay"></div>
        </div>

        <!-- AI/ML Card -->
        <div class="track-card ai-card">
          <div class="card-icon">🤖</div>
          <h3 class="card-title">AI & Machine Learning</h3>
          <p class="card-description">
            Transform data into intelligence. Build cutting-edge AI solutions
            that solve real-world problems using advanced algorithms.
          </p>
          <ul class="track-features text-left">
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Predictive Analytics</li>
            <li>Deep Learning Models</li>
          </ul>
          <div class="card-overlay"></div>
        </div>

        <!-- Web Development Card -->
        <div class="track-card web-card">
          <div class="card-icon">🌐</div>
          <h3 class="card-title">Web Development</h3>
          <p class="card-description">
            Create the next generation of web applications. Build scalable,
            responsive, and innovative solutions for the modern web.
          </p>
          <ul class="track-features text-left">
            <li>Full Stack Applications</li>
            <li>Progressive Web Apps</li>
            <li>Real-time Systems</li>
            <li>Cloud Integration</li>
          </ul>
          <div class="card-overlay"></div>
        </div>
      </div>
    </div>
    <div class="gradient-overlay"></div>
  </section>
</template>

<style>
.tracks-section {
  min-height: 100vh;
  /* background: linear-gradient(to bottom, #000000, #1a0846, #280da1d1); */
  background: radial-gradient(
    circle at top,
    var(--gradient-start) 0%,
    var(--gradient-middle) 50%,
    var(--gradient-end) 100%
  );
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
  background: linear-gradient(to top, transparent, rgb(17, 5, 71));
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
      transparent 20%
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

.track-card {
  width: 420px;
  min-height: 400px;
  /* background: rgba(255, 255, 255, 0.03); */
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.track-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-family: "Basement", sans-serif;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #8599ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.track-features {
  list-style: none;
  padding: 0;
}

.track-features li {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.9rem;
}

.track-features li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #8599ff;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  pointer-events: none;
  background: radial-gradient(
    circle at top right,
    rgba(133, 153, 255, 0.1),
    transparent 70%
  );
}

/* Specific card styling */
.blockchain-card .card-overlay {
  background: radial-gradient(
    circle at top right,
    rgba(183, 0, 255, 0.2),
    transparent 100%
  );
}

.ai-card .card-overlay {
  background: radial-gradient(
    circle at top right,
    rgba(133, 153, 255, 0.2),
    transparent 100%
  );
}

.web-card .card-overlay {
  background: radial-gradient(
    circle at top right,
    rgba(0, 255, 255, 0.2),
    transparent 100%
  );
}

/* Hover effects */
.track-card:hover .card-overlay {
  opacity: 0.8;
}

/* Animation for cards */
@keyframes cardFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

.track-card {
  animation: cardFloat 6s ease-in-out infinite;
}

.track-card:nth-child(2) {
  animation-delay: -2s;
}

.track-card:nth-child(3) {
  animation-delay: -4s;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .track-card {
    width: calc(50% - 2rem);
  }
}

@media (max-width: 768px) {
  .track-card {
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import Navbar from "../components/Navbar.vue";

onMounted(() => {
  // Add hover effect for cards
  const cards = document.querySelectorAll(".track-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
</script>
