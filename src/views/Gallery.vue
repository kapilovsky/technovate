<template>
  <section class="gallery-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div class="content-wrapper mt-16 max-w-7xl mx-auto px-4">
      <div class="heading">Event Gallery</div>
      <div
        class="w-24 h-1 bg-gradient-to-r from-[#f8f8f8] to-blue-500 mx-auto rounded-full mb-16"
      ></div>

      <div class="bento-gallery">
        <div class="bento-grid">
          <div class="bento-item landscape">
            <img
              :src="image1"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image2"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image3"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item large-square">
            <img
              :src="image4"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image5"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image6"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item large-square">
            <img
              :src="image7"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image8"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image9"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image10"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item square">
            <img
              :src="image11"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image12"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item square">
            <img
              :src="image13"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item square">
            <img
              :src="image14"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item square">
            <img
              :src="image15"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image16"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
          <div class="bento-item landscape">
            <img
              :src="image17"
              loading="lazy"
              alt="Hackathon Moment"
              class="bento-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #000000, #10052d, #1a086974);
  padding-bottom: 4em;
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

.gradient-overlay {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, transparent, hwb(251 2% 72%));
  pointer-events: none;
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

.bento-gallery {
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: min-content;
  gap: 1rem;
}

.bento-item {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0;
  /* transition: all 0.3s ease; */
}

/* .bento-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 10;
} */

.bento-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* transition: transform 0.3s ease; */
}

@keyframes appear {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* .bento-item:hover .bento-image {
  transform: scale(1.1);
} */

/* Image Size Variations */
.square {
  grid-column: span 2;
  grid-row: span 2;
  aspect-ratio: 1/1;
}

.portrait {
  grid-column: span 2;
  grid-row: span 3;
  aspect-ratio: 2/3;
}

.landscape {
  grid-column: span 3;
  grid-row: span 2;
  aspect-ratio: 16/9;
}

.large-square {
  grid-column: span 3;
  grid-row: span 3;
  aspect-ratio: 1/1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .square,
  .portrait,
  .landscape,
  .large-square {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .square,
  .portrait,
  .landscape,
  .large-square {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>

<script setup>
import Lenis from "lenis";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    axis: "vertical",
    direction: "vertical",
    gestureDirection: "vertical",
    gesture: true,
    scrollDirection: "vertical",
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  onUnmounted(() => {
    lenis.destroy();
  });
});
import Navbar from "../components/Navbar.vue";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";
import image11 from "../assets/images/11.jpg";
import image12 from "../assets/images/12.jpg";
import image13 from "../assets/images/13.jpg";
import image14 from "../assets/images/14.jpg";
import image15 from "../assets/images/15.jpg";
import image16 from "../assets/images/16.jpg";
import image17 from "../assets/images/17.jpg";
</script>
