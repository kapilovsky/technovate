<template>
  <section class="tracks-section">
    <div class="stars-overlay"></div>
    <Navbar />
    <div
      class="content-wrapper flex flex-col justify-center mt-16 max-w-7xl mx-auto"
    >
      <div class="status-badge">Hackathon is Live</div>
      <div class="heading text-5xl m-8">Problem Statements</div>

      <a class="text-white/70 mb-4" target="_blank" :href="rulebook"
        >- View Rulebook</a
      >

      <div class="mb-4">
        <div class="text-white/70 text-2xl mb-4">Track-1: Full Stack</div>
        <div class="text-white/70 mb-4">
          <div class="mb-2">
            1. Revolutionizing Campus Resource Sharing <br />
            <strong>Problem Statement:</strong> <br />
            Students struggle with finding and sharing academic resources,
            leading to duplicated efforts and inefficient learning. Current
            solutions are fragmented across Google Drive, WhatsApp groups, and
            personal notes.
            <br />
            <strong>Challenge:</strong> <br />
            Build a solution that makes academic resource sharing more
            efficient, organized, and accessible while ensuring quality and
            authenticity of materials.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Content organization and discovery</li>
              <li>
                Real-time collaborative document editing (like Google Docs)
              </li>
              <li>Quality validation mechanisms</li>
              <li>Real-time collaboration</li>
              <li>Mobile accessibility</li>
              <li>Integration with existing tools</li>
            </ul>
          </div>
          <div class="mb-2">
            2. Reimagining Campus Events <br />
            <strong>Problem Statement:</strong> <br />
            Managing and participating in college events is often chaotic, with
            information scattered across multiple platforms, leading to poor
            attendance and engagement.
            <br />
            <strong>Challenge:</strong> <br />
            Create a solution that streamlines the entire lifecycle of campus
            events - from planning to feedback collection.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Event discovery</li>
              <li>Registration and attendance</li>
              <li>Resource allocation</li>
              <li>Engagement metrics</li>
              <li>Post-event analysis (Analytics)</li>
            </ul>
          </div>
          <div class="mb-2">
            3. Building the Future of Project Showcasing <br />
            <strong>Problem Statement:</strong> <br />
            Students lack a dedicated platform to showcase their projects, get
            meaningful feedback, and connect with opportunities, while companies
            struggle to discover student talent.
            <br />
            <strong>Challenge:</strong> <br />
            Develop a platform that bridges the gap between student projects and
            real-world opportunities.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Project presentation</li>
              <li>Peer feedback systems</li>
              <li>Industry connections</li>
              <li>Portfolio building</li>
              <li>Opportunity matching</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="text-white/70 text-2xl mb-4">
          Track-2: BlockChain: Decentralized Solutions
        </div>
        <div class="text-white/70 mb-4">
          <div class="mb-2">
            1. Transparent Campus Funding <br />
            <strong>Problem Statement:</strong> <br />
            College clubs and student organizations face challenges in managing
            funds transparently, leading to trust issues and inefficient
            resource allocation.
            <br />
            <strong>Challenge:</strong> <br />
            Create a decentralized solution for managing and tracking
            organizational funds, ensuring transparency and accountability.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Fund allocation tracking</li>
              <li>Expense verification</li>
              <li>Donor management</li>
              <li>Real-time fund utilization</li>
              <li>Automated reporting</li>
              <li>Integration with existing tools</li>
            </ul>
          </div>
          <div class="mb-2">
            2. Campus Token Economy <br />
            <strong>Problem Statement:</strong> <br />
            Traditional campus transactions are limited by cash handling, lack
            of incentives, and complex reconciliation processes. Create a
            cryptocurrency solution for the campus ecosystem.
            <br />
            <strong>Challenge:</strong> <br />
            Design and implement a campus-specific cryptocurrency that makes
            transactions seamless while adding value to the campus community.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Canteen payment systems</li>
              <li>Attendance rewards</li>
              <li>Peer-to-peer transactions</li>
              <li>Event-based rewards</li>
              <li>Scholarship distribution</li>
            </ul>
          </div>
          <div class="mb-2">
            3. NFT Event Access <br />
            <strong>Problem Statement:</strong> <br />
            Traditional event ticketing faces issues with verification,
            transferability, and memorabilia value. Create an NFT-based solution
            for campus events.
            <br />
            <strong>Challenge:</strong> <br />
            Develop an NFT ticketing system that provides secure access to
            events while creating lasting digital value.
            <br />

            <strong>Possible Areas to explore:</strong> <br />
            <ul>
              <li>Dynamic ticket pricing</li>
              <li>Transferable access rights</li>
              <li>VIP access tokens</li>
              <li>Attendance tracking</li>
              <li>Workshop certificates</li>
              <li>Event analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div class="text-white/70 text-2xl mb-4">Track-3: AI & ML</div>
        <a class="text-white/70 mb-4" :href="pdfFile" download
          >Download Problem Statements ↗️</a
        >
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
  text-transform: uppercase;
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
import pdfFile from "../assets/pdf/AI_ML_ProblemStatements.pdf";
import rulebook from "../assets/pdf/Technovate_Rulebook.pdf";
import Navbar from "../components/Navbar.vue";
</script>
