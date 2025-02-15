<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";

const items = [
  {
    question: "What is the registeration fee?",
    answer: "Rs 300.00 per team.",
  },
  {
    question: "How many members can a team have ?",
    answer: "2-5 members per team.",
  },
  {
    question: "Can we code something other than the given problem statement?",
    answer: "No, you have to code on the given problem statement only.",
  },
  {
    question: "When and Where will the problem statements be released?",
    answer:
      "The problem statements will be released on the day of Hackathon on this website.",
  },
  {
    question: "What are the timings of the Hackathon?",
    answer:
      "The Hackathon will start at 11:00 AM , 19th Feb 2025 and end at 11:00 AM , 20th Feb 2025.",
  },
];

// Track which item is open
const openItemIndex = ref(null);

const toggleItem = (index) => {
  openItemIndex.value = openItemIndex.value === index ? null : index;
};
</script>

<template>
  <div class="faqs-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div id="faqs" class="text-white mt-8">
      <div class="container">
        <h2 class="heading">Frequently asked questions</h2>
        <div class="max-w-xl mx-auto">
          <p class="mt-5 text-xl text-center text-white/70">
            Questions About the Hackathon.
          </p>
        </div>
        <div class="max-w-2xl mx-auto mt-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="border-b py-7 border-white/30 cursor-pointer"
            @click="toggleItem(index)"
          >
            <div class="flex items-center justify-between mt-4">
              <h3 class="text-lg font-bold">{{ item.question }}</h3>
              <p class="text-2xl" v-if="openItemIndex === index">-</p>
              <p class="text-2xl" v-else>+</p>
            </div>
            <transition
              name="accordion"
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-out"
            >
              <div
                v-show="openItemIndex === index"
                class="mt-4 text-white/70 overflow-hidden"
              >
                {{ item.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div class="gradient-overlay"></div>
  </div>
</template>

<style scoped>
#faqs {
  font-family: Inter;
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

.container {
  max-width: 1800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
}

.faqs-section {
  min-height: 100vh;
  background: linear-gradient(to bottom, #000000, #1a0846, #280da196);
  /* background: radial-gradient(
      circle at bottom,
      var(--gradient-start) 0%,
      var(--gradient-middle) 50%,
      var(--gradient-end) 100%
    ); */
  position: relative;
  overflow: hidden;
}

.faqs-section::before,
.faqs-section::after {
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

.faqs-section::before {
  top: 20%;
  left: -100px;
}

.faqs-section::after {
  bottom: 20%;
  right: -100px;
  animation-delay: -5s;
}

.faqs-section::after {
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

  .faqs-section {
    padding: 3rem 1rem;
  }
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
  opacity: 0;
  margin-top: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  height: auto;
  opacity: 1;
  margin-top: 16px;
}
</style>
