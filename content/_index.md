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
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(190px, 0.42fr);
  gap: 2rem;
  margin: 0.5rem 0 3rem;
  padding: 0 0 2rem;
  border-bottom: 1px solid #dfe4ea;
}

.home-eyebrow {
  margin: 0 0 0.45rem;
  color: #53657a;
  font-size: 0.78em !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.home-hero h1 {
  max-width: 680px;
  margin: 0 0 0.7rem;
  color: #1d2a39;
  font-size: clamp(2rem, 4vw, 2.85rem) !important;
  letter-spacing: -0.035em;
  line-height: 1.12 !important;
}

.home-hero-copy {
  max-width: 710px;
  margin: 0;
  color: #455364;
}

.home-focuses {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
}

.home-focuses span {
  padding: 0.2rem 0.55rem;
  border: 1px solid #d5dce5;
  border-radius: 4px;
  color: #435263;
  font-size: 0.77em !important;
  font-weight: 600;
  line-height: 1.2 !important;
}

.home-hero-aside {
  align-self: center;
  padding-left: 1.35rem;
  border-left: 2px solid #315b85;
}

.home-hero-aside span,
.home-hero-aside strong { display: block; }

.home-hero-aside span {
  color: #657488;
  font-size: 0.73em !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.home-hero-aside strong {
  margin-top: 0.22rem;
  color: #27384b;
  font-size: 1.05em !important;
  line-height: 1.25 !important;
}

.home-hero-aside hr {
  height: 1px;
  margin: 0.85rem 0;
  border: 0;
  background: #dfe4ea;
}

.home-section { margin: 2.75rem 0; }

.home-section > h2 {
  margin-bottom: 0.9rem;
  color: #26384a;
  font-size: 1.3em !important;
  letter-spacing: -0.02em;
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
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe4ea;
  border-radius: 6px;
  padding: 1.1rem 1.15rem;
  background: #fff;
}

.featured-project {
  min-height: 185px;
  color: #33475b;
  text-decoration: none;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.featured-project:hover {
  color: #26384a;
  text-decoration: none;
  border-color: #99aab9;
  box-shadow: 0 3px 10px rgba(38, 56, 74, 0.08);
}

.home-status {
  display: table;
  width: fit-content;
  margin: 0 0 0.75rem;
  padding: 0.12rem 0.42rem;
  border: 1px solid #cbd5df;
  border-radius: 3px;
  color: #455b70;
  font-size: 0.74em !important;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25 !important;
}

.featured-project h3,
.home-highlight h3 {
  margin: 0 0 0.45rem;
  color: #26384a;
  font-size: 1.04em !important;
}

.featured-project p,
.home-highlight p { margin: 0; }

.home-highlight {
  min-height: 96px;
  justify-content: center;
  background: #fafbfc;
}

.home-highlight p { color: #59697a; font-size: 0.91em !important; }

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
  padding: 0.75rem 0;
  border-top: 1px solid #e1e6eb;
}

.home-news li:last-child { border-bottom: 1px solid #e1e6eb; }

.home-news time {
  color: #637384;
  font-size: 0.87em !important;
  font-weight: 650;
}

.archive-link {
  display: inline-block;
  margin-top: 0.8rem;
  color: #315b85 !important;
  font-size: 0.87em !important;
  font-weight: 600;
}

.archive-link:hover { color: #1f466d !important; }

.news-slider {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0 0 0.75rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.news-slide {
  flex: 0 0 min(78%, 330px);
  min-height: 128px;
  scroll-snap-align: start;
  border: 1px solid #dfe4ea;
  border-radius: 6px;
  padding: 1rem 1.1rem;
  background: #fff;
}

.news-slide time {
  display: block;
  margin-bottom: 0.6rem;
  color: #637384;
  font-size: 0.82em !important;
  font-weight: 650;
}

.news-slide p { margin: 0; }

.slider-hint {
  margin: -0.15rem 0 0.7rem;
  color: #6a7785;
  font-size: 0.83em !important;
}

@media (max-width: 560px) {
  .home-hero {
    grid-template-columns: 1fr;
    gap: 1.3rem;
    padding-bottom: 1.5rem;
  }

  .home-news li { grid-template-columns: 1fr; gap: 0.15rem; }
  .news-slide { flex-basis: 88%; }
}
</style>

<section class="home-hero">
  <div>
    <p class="home-eyebrow">Duke ECE · CEI</p>
    <h1>Hi, I’m Zishan Shao.</h1>
    <p class="home-hero-copy">I am a <strong>Ph.D. student in Electrical and Computer Engineering at Duke University</strong>, advised by <strong>Prof. Yiran Chen</strong>. I develop efficient and interpretable techniques for multimodal generative models, low-rank methods, and AI algorithm–system co-design.</p>
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
    <p>Pairs a rank-aware CUDA/Triton kernel suite with a unified runtime for memory-efficient low-rank Transformer inference.</p>
  </a>
  <a class="featured-project" href="https://arxiv.org/abs/2604.01552" target="_blank" rel="noopener">
    <span class="home-status">ACM MM 2026 · Oral</span>
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
  <li><time datetime="2026">2026</time><span><strong>ZEUS</strong> was selected for an <strong>ACM Multimedia 2026 Oral presentation</strong>; I am a co-first author.</span></li>
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
