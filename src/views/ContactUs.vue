<template>
  <section class="contact-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div class="content-wrapper mt-16 max-w-5xl mx-auto px-4">
      <div class="heading">Contact Us</div>
      <div class="text-white/70 mb-4 text-center">
        Have questions? We're here to help!
      </div>
      <div
        class="w-24 h-1 bg-gradient-to-r from-[#f8f8f8] to-blue-500 mx-auto rounded-full mb-16"
      ></div>

      <div class="grid md:grid-cols-1 gap-12">
        <!-- Contact Information -->
        <div class="contact-info">
          <div class="info-card">
            <h3 class="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <p class="text-white/70 mb-8">
              Have questions about the hackathon? Reach out to our team leads:
            </p>

            <div class="contact-leads space-y-6">
              <!-- Contact Person 1 -->
              <div class="lead-card">
                <div class="name">Khushmita</div>
                <div class="role">GDGC UIET Lead</div>
                <div class="contact-details">
                  <a href="tel:+919877377522" class="contact-link">
                    <span class="icon">📱</span>
                    +91 98773 77522
                  </a>
                </div>
              </div>

              <!-- Contact Person 2 -->
              <div class="lead-card">
                <div class="name">Kapil</div>
                <div class="role">GDGC UIET Web Development Lead</div>
                <div class="contact-details">
                  <a href="tel:+916239682493" class="contact-link">
                    <span class="icon">📱</span>
                    +91 62396 82493
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links mt-8">
              <h4 class="text-white/90 mb-4">Follow Us</h4>
              <div class="flex gap-4">
                <a
                  href="https://www.instagram.com/gdgc_uiet"
                  class="social-icon"
                  target="_blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a
                  href="https://www.linkedin.com/company/google-developer-student-club-uiet-panjab-university/posts/?feedView=all"
                  target="_blank"
                  class="social-icon"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #000000, #1a0846, #240c9074);
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

.contact-section::before,
.contact-section::after {
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

.contact-section::before {
  top: 20%;
  left: -100px;
}

.contact-section::after {
  bottom: 20%;
  right: -100px;
  animation-delay: -5s;
}

.contact-section::after {
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

.info-card,
.form-card,
.faq-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.lead-card {
  padding: 1em 1.5em;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.lead-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.role {
  color: #8599ff;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: white;
  transform: translateX(5px);
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #8599ff;
  outline: none;
  background: rgba(255, 255, 255, 0.08);
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #8599ff, #3b1a7e);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(133, 153, 255, 0.2);
}

.social-icon {
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.faq-card {
  padding: 1.5rem;
}

.faq-card h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.faq-card p {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 1rem;
  }

  .grid {
    gap: 2rem;
  }
}
</style>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
