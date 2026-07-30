---
title: "Home"
date: 2026-07-30
layout: "home"
summary: "Home"
url: "/"
draft: false
---

<style>
.post .post-content,
.post p,
.post li,
.post div { font-size: 18px !important; line-height: 1.6 !important; }

.post h1,
.post h2,
.post h3,
.post h4,
.post h5,
.post h6 { line-height: 1.3 !important; }

.home-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(190px, 0.7fr);
  gap: 2.2rem;
  overflow: hidden;
  margin: 0.5rem 0 3.2rem;
  padding: 2.7rem 2.6rem;
  border-radius: 20px;
  color: #f9fbff;
  background:
    radial-gradient(circle at 89% 17%, rgba(126, 224, 255, 0.38), transparent 20%),
    radial-gradient(circle at 72% 105%, rgba(163, 112, 255, 0.48), transparent 36%),
    linear-gradient(128deg, #071d45 0%, #123875 48%, #352a78 100%);
  box-shadow: 0 18px 38px rgba(20, 42, 99, 0.22);
}

.home-hero::after {
  position: absolute;
  right: -80px;
  bottom: -115px;
  width: 285px;
  height: 285px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  content: "";
}

.home-eyebrow {
  margin: 0 0 0.7rem;
  color: #9ce9ff;
  font-size: 0.78em !important;
  font-weight: 750;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.home-hero h1 {
  max-width: 660px;
  margin: 0 0 0.85rem;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3.15rem) !important;
  letter-spacing: -0.045em;
  line-height: 1.08 !important;
}

.home-hero-copy {
  position: relative;
  z-index: 1;
  max-width: 710px;
  margin: 0;
  color: rgba(245, 249, 255, 0.9);
}

.home-focuses {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.home-focuses span {
  padding: 0.34rem 0.7rem;
  border: 1px solid rgba(202, 237, 255, 0.4);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #ecf8ff;
  font-size: 0.77em !important;
  font-weight: 650;
  line-height: 1.2 !important;
}

.home-hero-aside {
  position: relative;
  z-index: 1;
  align-self: center;
  transform: translateY(-0.2rem);
  padding: 1.2rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.home-hero-aside span,
.home-hero-aside strong { display: block; }

.home-hero-aside span {
  color: #aedfff;
  font-size: 0.73em !important;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.home-hero-aside strong {
  margin-top: 0.22rem;
  color: #ffffff;
  font-size: 1.15em !important;
  line-height: 1.25 !important;
}

.home-hero-aside hr {
  height: 1px;
  margin: 0.95rem 0;
  border: 0;
  background: rgba(255, 255, 255, 0.18);
}

.home-section { margin: 3.1rem 0; }

.home-section > h2 {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.15rem;
  color: #132f5e;
  font-size: 1.38em !important;
  letter-spacing: -0.02em;
}

.home-section > h2::before {
  display: inline-block;
  width: 0.32rem;
  height: 1.3em;
  border-radius: 999px;
  background: linear-gradient(180deg, #34bdd8, #6554dd);
  content: "";
}

.home-section--featured { margin-top: 0; }

.featured-projects,
.home-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}

.featured-project,
.home-highlight {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(36, 72, 123, 0.13);
  border-radius: 14px;
  padding: 1.25rem 1.28rem;
  background: #f8fbff;
}

.featured-project {
  min-height: 210px;
  color: #1d3154;
  text-decoration: none;
  transition: transform 190ms ease, box-shadow 190ms ease, border-color 190ms ease;
}

.featured-project::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #18b8d5, #386bd9);
  content: "";
}

.featured-project:nth-child(2) { background: linear-gradient(145deg, #fbfaff, #f0edff); }
.featured-project:nth-child(2)::before { background: linear-gradient(90deg, #7760df, #ac63d5); }
.featured-project:nth-child(3) { background: linear-gradient(145deg, #fffdf8, #fff3df); }
.featured-project:nth-child(3)::before { background: linear-gradient(90deg, #f09a39, #e66754); }

.featured-project:hover {
  color: #132f5e;
  text-decoration: none;
  transform: translateY(-5px);
  border-color: rgba(58, 96, 170, 0.32);
  box-shadow: 0 15px 30px rgba(20, 46, 101, 0.15);
}

.home-status {
  display: table;
  width: fit-content;
  margin: 0 0 0.75rem;
  padding: 0.2rem 0.52rem;
  border-radius: 999px;
  color: #0c6c8e;
  background: #dff5fb;
  font-size: 0.74em !important;
  font-weight: 650;
  letter-spacing: 0.02em;
  line-height: 1.25 !important;
}

.featured-project:nth-child(2) .home-status { color: #5b42a5; background: #e9e3ff; }
.featured-project:nth-child(3) .home-status { color: #a65516; background: #ffebcf; }

.featured-project h3,
.home-highlight h3 {
  margin: 0 0 0.45rem;
  color: #152e58;
  font-size: 1.04em !important;
}

.featured-project p,
.home-highlight p { margin: 0; }

.home-highlight {
  min-height: 108px;
  justify-content: center;
  padding-left: 1.35rem;
  background: linear-gradient(135deg, #ffffff, #f4f8ff);
}

.home-highlight::before {
  position: absolute;
  top: 1.15rem;
  bottom: 1.15rem;
  left: 0;
  width: 4px;
  border-radius: 0 999px 999px 0;
  background: #36b9d4;
  content: "";
}

.home-highlight:nth-child(2)::before { background: #745fdb; }
.home-highlight:nth-child(3)::before { background: #ed9a36; }
.home-highlight:nth-child(4)::before { background: #e65e77; }
.home-highlight h3 { color: #263d67; }
.home-highlight p { color: #52637d; font-size: 0.91em !important; }

.home-news {
  max-width: 930px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-news li {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 0.9rem;
  padding: 0.9rem 1rem;
  border-top: 1px solid rgba(41, 81, 143, 0.1);
  border-left: 3px solid transparent;
  background: linear-gradient(90deg, #f5f9ff, rgba(245, 249, 255, 0));
  transition: border-color 160ms ease, transform 160ms ease;
}

.home-news li:hover {
  border-left-color: #3d9fd3;
  transform: translateX(3px);
}

.home-news li:last-child { border-bottom: 1px solid rgba(41, 81, 143, 0.1); }

.home-news time {
  color: #456994;
  font-size: 0.87em !important;
  font-weight: 650;
}

.archive-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  color: #214d93 !important;
  background: #e9f0ff;
  font-size: 0.87em !important;
  font-weight: 700;
  transition: transform 160ms ease, background 160ms ease;
}

.archive-link:hover { background: #dbe8ff; transform: translateX(3px); }

.news-slider {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.15rem 0 0.9rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.news-slide {
  flex: 0 0 min(78%, 330px);
  min-height: 148px;
  scroll-snap-align: start;
  border: 1px solid rgba(54, 85, 137, 0.14);
  border-radius: 14px;
  padding: 1.1rem 1.2rem;
  background: linear-gradient(145deg, #f5fbff, #edf3ff);
  box-shadow: 0 7px 16px rgba(34, 68, 126, 0.07);
}

.news-slide:nth-child(2) { background: linear-gradient(145deg, #fbfaff, #f1efff); }
.news-slide:nth-child(3) { background: linear-gradient(145deg, #fffdf8, #fff2df); }
.news-slide:nth-child(4) { background: linear-gradient(145deg, #fff9fb, #ffedf3); }

.news-slide time {
  display: block;
  margin-bottom: 0.6rem;
  color: #456994;
  font-size: 0.82em !important;
  font-weight: 650;
}

.news-slide p { margin: 0; }

.slider-hint {
  margin: -0.15rem 0 0.7rem;
  color: #6d7782;
  font-size: 0.83em !important;
}

@media (max-width: 560px) {
  .home-hero {
    grid-template-columns: 1fr;
    gap: 1.3rem;
    padding: 2rem 1.45rem;
    border-radius: 16px;
  }

  .home-news li { grid-template-columns: 1fr; gap: 0.15rem; }
  .news-slide { flex-basis: 88%; }
}
</style>

<section class="home-hero">
  <div>
    <p class="home-eyebrow">Duke ECE · CEI</p>
    <h1>Hi, I’m Zishan Shao.</h1>
    <p class="home-hero-copy">I am a <strong>Ph.D. student in Electrical and Computer Engineering at Duke University</strong>, advised by <strong>Prof. Yiran Chen</strong>. I build efficient and interpretable methods for LLMs, MLLMs, diffusion models, and world models.</p>
    <div class="home-focuses" aria-label="Research areas">
      <span>MLSys</span>
      <span>Efficient AI</span>
      <span>Multimodal AI</span>
    </div>
  </div>
  <aside class="home-hero-aside">
    <span>Research home</span>
    <strong>Generative AI systems</strong>
    <hr>
    <span>Advisor</span>
    <strong>Yiran Chen</strong>
  </aside>
</section>

<section class="home-section home-section--featured">

## Featured Projects

<div class="featured-projects">
  <a class="featured-project" href="https://zishan-shao.github.io/decodeshare/" target="_blank" rel="noopener">
    <span class="home-status">ICML 2026 · Spotlight</span>
    <h3>DecodeShare</h3>
    <p>Identifies a compact, task-general subspace in decode-time LLM states and tests its causal role with matched interventions.</p>
  </a>
  <a class="featured-project" href="https://github.com/Zishan-Shao/FlashSVD" target="_blank" rel="noopener">
    <span class="home-status">AAAI 2026 · Poster</span>
    <h3>FlashSVD</h3>
    <p>Accelerates large-model SVD with GPU-efficient randomized methods and adaptive rank selection for practical low-rank inference.</p>
  </a>
  <a class="featured-project" href="https://arxiv.org/abs/2604.01552" target="_blank" rel="noopener">
    <span class="home-status">ACM MM 2026 · Poster</span>
    <h3>ZEUS</h3>
    <p>Uses a training-free second-order predictor to reduce denoiser evaluations in diffusion and other ODE-based generative models.</p>
  </a>
</div>

</section>

<section class="home-section">

## Selected Highlights

<div class="home-highlights">
  <article class="home-highlight">
    <h3>ICML 2026 Spotlight</h3>
    <p>DecodeShare was selected for a Spotlight presentation.</p>
  </article>
  <article class="home-highlight">
    <h3>HPCAsia ’25 Award</h3>
    <p>Scalable DCD received the Outstanding Paper Award.</p>
  </article>
</div>

</section>

<section class="home-section">

## Recent News

<ul class="home-news">
  <li><time datetime="2026-06">Jun. 2026</time><span>DecodeShare was selected as an <strong>ICML 2026 Spotlight</strong>.</span></li>
  <li><time datetime="2026">2026</time><span><strong>ZEUS</strong> was accepted to ACM Multimedia 2026; I am a co-first author.</span></li>
  <li><time datetime="2026">2026</time><span><strong>FlashSVD</strong> was presented as an AAAI 2026 poster.</span></li>
</ul>

<a class="archive-link" href="/news/">View all news →</a>

</section>

<section class="home-section">

## Earlier Milestones

<p class="slider-hint">Swipe or scroll horizontally to explore earlier updates.</p>

<div class="news-slider" aria-label="Earlier milestones">
  <article class="news-slide">
    <time datetime="2023-12">Dec. 2023</time>
    <p>Enrolled in Duke’s M.S. in Statistical Science program.</p>
  </article>
  <article class="news-slide">
    <time datetime="2023-11">Nov. 2023</time>
    <p>Received a scholarship from the Upsilon Pi Epsilon (UPE) Honor Society.</p>
  </article>
  <article class="news-slide">
    <time datetime="2023-10">Oct. 2023</time>
    <p>Placed 2nd in Deadlift and 3rd in Squat at the NCHSAA Triangle Novice.</p>
  </article>
  <article class="news-slide">
    <time datetime="2023-05">May 2023</time>
    <p>Began a URECA research project with the Wake Forest IRSC Laboratory.</p>
  </article>
</div>

</section>
