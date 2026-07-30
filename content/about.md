---
title: "About"
date: 2026-07-30
draft: false
---

<style>
.post p,
.post li,
.post div {
    font-size: 18px !important;
    line-height: 1.6 !important;
}

.post .post-content {
    font-size: 18px !important;
    line-height: 1.6 !important;
}

.post h1,
.post h3,
.post h4,
.post h5,
.post h6 {
    font-size: 1.1em !important;
}

.post h2 {
    font-size: 1.38em !important;
}

.post .post-title {
    display: none;
}

.about-hero {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(170px, 0.65fr);
    gap: 1.8rem;
    overflow: hidden;
    margin: 0.4rem 0 3.1rem;
    padding: 2.45rem 2.3rem;
    border-radius: 20px;
    color: #f9fbff;
    background:
        radial-gradient(circle at 90% 12%, rgba(126, 224, 255, 0.4), transparent 22%),
        radial-gradient(circle at 72% 108%, rgba(163, 112, 255, 0.45), transparent 36%),
        linear-gradient(128deg, #071d45 0%, #123875 48%, #352a78 100%);
    box-shadow: 0 18px 38px rgba(20, 42, 99, 0.22);
}

.about-hero::after {
    position: absolute;
    right: -80px;
    bottom: -120px;
    width: 285px;
    height: 285px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    content: "";
}

.about-hero h1 {
    position: relative;
    z-index: 1;
    margin: 0 0 0.8rem;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem) !important;
    letter-spacing: -0.045em;
    line-height: 1.08 !important;
}

.about-hero-copy {
    position: relative;
    z-index: 1;
    max-width: 650px;
    margin: 0;
    color: rgba(245, 249, 255, 0.91);
}

.about-research-map {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.35rem 0 0.35rem 1.25rem;
    border-left: 1px solid rgba(255, 255, 255, 0.26);
}

.research-map-title {
    margin: 0 0 0.8rem;
    color: #9ce9ff;
    font-size: 0.76em !important;
    font-weight: 750;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.research-map-item {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 0.65rem;
    padding: 0.7rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.research-map-item:first-of-type {
    border-top: 0;
}

.research-map-number {
    color: #9ce9ff;
    font-size: 0.78em !important;
    font-weight: 750;
    letter-spacing: 0.1em;
}

.research-map-item p {
    margin: 0;
    color: #fff;
    font-size: 0.88em !important;
    font-weight: 650;
    line-height: 1.35 !important;
}

.post .post-content > h2 {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 3.15rem;
    color: #132f5e;
    font-size: 1.38em !important;
    letter-spacing: -0.02em;
}

.post .post-content > h2::before {
    display: inline-block;
    width: 0.32rem;
    height: 1.3em;
    border-radius: 999px;
    background: linear-gradient(180deg, #34bdd8, #6554dd);
    content: "";
}

.post .post-content > h3 {
    margin-top: 2.1rem;
    color: #263d67;
}

.about-summary {
    border: 1px solid #d8e3f4;
    border-left: 5px solid #537cb6;
    border-radius: 0 12px 12px 0;
    margin: 1.4rem 0 2.6rem;
    padding: 1.25rem 1.4rem;
    background: linear-gradient(135deg, #f8fbff, #f1f5ff);
}

.about-summary p {
    margin: 0;
}

.research-summary {
    border-left: 4px solid #6554dd;
    margin: 1.5rem 0 2.5rem;
    padding: 0.25rem 1.25rem;
}

.project-card {
    border: 1px solid #d8dde3;
    border-radius: 12px;
    margin: 2.5rem 0;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 8px 22px rgba(31, 63, 120, 0.06);
    transition: transform 190ms ease, box-shadow 190ms ease;
}

.project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(20, 46, 101, 0.13);
}

.project-card__header {
    position: relative;
    border-bottom: 1px solid #d8dde3;
    padding: 1.4rem 1.6rem 1.2rem;
    background: linear-gradient(135deg, #f7fcff, #edf5ff);
}

.project-card__header::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #18b8d5, #386bd9);
    content: "";
}

.project-card__header h3 {
    margin: 0.25rem 0 0.6rem;
    font-size: 1.08em !important;
}

.project-card__body {
    padding: 1.4rem 1.6rem 1.6rem;
}

.project-card__body p:first-child {
    margin-top: 0;
}

.project-status {
    display: table;
    margin-bottom: 0.8rem;
    padding: 0.2rem 0.75rem;
    border-radius: 999px;
    color: #0c6c8e;
    background: #dff5fb;
    font-size: 0.82em;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.project-card--violet .project-card__header { background: linear-gradient(135deg, #fcfbff, #f0edff); }
.project-card--violet .project-card__header::before { background: linear-gradient(90deg, #7760df, #ac63d5); }
.project-card--violet .project-status { color: #5b42a5; background: #e9e3ff; }

.project-card--orange .project-card__header { background: linear-gradient(135deg, #fffdf8, #fff1dc); }
.project-card--orange .project-card__header::before { background: linear-gradient(90deg, #f09a39, #e66754); }
.project-card--orange .project-status { color: #a65516; background: #ffebcf; }

.project-card--teal .project-card__header { background: linear-gradient(135deg, #f4fffc, #e5f8f2); }
.project-card--teal .project-card__header::before { background: linear-gradient(90deg, #20a991, #35c1a2); }
.project-card--teal .project-status { color: #167768; background: #dcf4ed; }

.project-card--rose .project-card__header { background: linear-gradient(135deg, #fffafb, #ffedf3); }
.project-card--rose .project-card__header::before { background: linear-gradient(90deg, #de617b, #a664c8); }
.project-card--rose .project-status { color: #a1435a; background: #ffe3eb; }

.project-figure {
    display: block;
    height: auto;
    margin: 0.5rem auto 1.5rem;
    max-width: 100%;
}

.project-figure-caption {
    max-width: 853px;
    margin: -1rem auto 1.6rem;
    color: #6b7280;
    font-size: 0.88em !important;
    line-height: 1.45;
    text-align: center;
}

.project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.4rem;
}

.project-links a {
    padding: 0.35rem 0.85rem;
    border: 1px solid #6086b4;
    border-radius: 999px;
    color: #214d93 !important;
    background: #f7faff;
    font-size: 0.87em !important;
    font-weight: 650;
}

.project-links a:hover {
    color: #fff !important;
    background: #6086b4;
}

@media (max-width: 620px) {
    .about-hero {
        grid-template-columns: 1fr;
        gap: 1.3rem;
        padding: 2rem 1.45rem;
        border-radius: 16px;
    }

    .project-card__header,
    .project-card__body {
        padding: 1.2rem;
    }

    .about-research-map {
        padding: 0.2rem 0 0 1rem;
    }
}
</style>

<section class="about-hero">
  <div>
    <h1>Designing systems that make large models practical.</h1>
    <p class="about-hero-copy">My work connects model behavior, numerical methods, and systems design to make modern generative models faster, more memory-efficient, and easier to use at scale.</p>
  </div>
  <aside class="about-research-map" aria-label="Research map">
    <p class="research-map-title">Research map</p>
    <div class="research-map-item">
      <span class="research-map-number">01</span>
      <p>MultiModal Generative Models</p>
    </div>
    <div class="research-map-item">
      <span class="research-map-number">02</span>
      <p>Low Rank Method</p>
    </div>
    <div class="research-map-item">
      <span class="research-map-number">03</span>
      <p>Efficient AI Algorithm-System Co-Design</p>
    </div>
  </aside>
</section>

## About Me

<div class="about-summary">
  <p>I am a <strong>Ph.D. student in Electrical and Computer Engineering at Duke University</strong>, advised by <strong>Prof. Yiran Chen</strong> in the Center for Computational Evolutionary Intelligence (CEI). My research spans MLSys, efficient AI, and multimodal AI, with a focus on making LLMs, MLLMs, diffusion models, and world models faster and more practical.</p>
</div>

## Research

<div class="research-summary">

I develop efficient systems and algorithms for large models, spanning low-rank LLM inference, mechanistic interpretability, diffusion acceleration, and scalable optimization.

</div>

### Selected Projects

<div class="project-card project-card--blue">
  <div class="project-card__header">
    <span class="project-status">ICML 2026 Spotlight</span>
    <h3>DecodeShare: Tracing the Shared Subspace of LLM Decode-Time Decisions</h3>
    <em>Duke CEI · Mechanistic interpretability and activation steering</em>
  </div>
  <div class="project-card__body">
    <img class="project-figure" src="/project-img/decodeshare-pipeline.jpg" alt="DecodeShare pipeline from task prompts and decode-time activation collection to shared-subspace estimation">
    <p>DecodeShare identifies compact, task-general subspaces in <strong>KV-cached decode-time</strong> states and validates their causal influence on LLM decisions through matched decode-only interventions.</p>
    <div class="project-links">
      <a href="https://zishan-shao.github.io/decodeshare/" target="_blank" rel="noopener">Project Page</a>
      <a href="https://github.com/Zishan-Shao/decodeshare/blob/main/docs/assets/DecodeShareICML2026.pdf" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Zishan-Shao/decodeshare" target="_blank" rel="noopener">Code</a>
      <a href="https://huggingface.co/spaces/Zishan-Shao/decodeshare-demo" target="_blank" rel="noopener">Interactive Demo</a>
    </div>
  </div>
</div>

<div class="project-card project-card--violet">
  <div class="project-card__header">
    <span class="project-status">AAAI 2026 Poster</span>
    <h3>FlashSVD: Unified Runtime for Low-Rank Transformer Inference</h3>
    <em>Duke CEI · LLM systems and GPU kernels</em>
  </div>
  <div class="project-card__body">
    <img class="project-figure" src="/project-img/pipeline.png" alt="FlashSVD pipeline for low-rank transformer inference">
    <p>FlashSVD is a unified runtime for SVD-compressed language models that uses rank-aware CUDA/Triton kernels and optimized decoding to reduce peak activation memory by 70.2% and transient memory by 75%.</p>
    <div class="project-links">
      <a href="https://arxiv.org/abs/2508.01506" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Zishan-Shao/FlashSVD" target="_blank" rel="noopener">Code &amp; Demo</a>
    </div>
  </div>
</div>

<div class="project-card project-card--orange">
  <div class="project-card__header">
    <span class="project-status">ACM MM 2026 Poster</span>
    <h3>ZEUS: Accelerating Diffusion Models with Only Second-Order Predictor</h3>
    <em>Duke CEI · Diffusion and generative systems</em>
  </div>
  <div class="project-card__body">
    <p><strong>Yixiao Wang*, Ting Jiang*, Zishan Shao*</strong> <em>(* equal contribution)</em></p>
    <img class="project-figure" src="/project-img/zeus-pipeline.png" alt="ZEUS overview showing performance across image and video generation and its second-order prediction pipeline">
    <p>ZEUS is a training-free second-order framework for ODE-based generative models that uses an interleaved schedule to avoid unstable back-to-back extrapolations while delivering up to 3.2× end-to-end speedup with minimal overhead and fewer than 20 lines of integration code.</p>
    <div class="project-links">
      <a href="https://arxiv.org/abs/2604.01552" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Ting-Justin-Jiang/ZEUS" target="_blank" rel="noopener">Code</a>
    </div>
  </div>
</div>

### Earlier Projects

<div class="project-card project-card--teal">
  <div class="project-card__header">
    <span class="project-status">ICML 2025 Poster</span>
    <h3>SADA: Stability-guided Adaptive Diffusion Acceleration</h3>
    <em>Duke CEI · Diffusion and flow-model acceleration</em>
  </div>
  <div class="project-card__body">
    <img class="project-figure" src="/project-img/sada.png" alt="SADA stability-guided diffusion acceleration overview">
    <p>SADA is a training-free framework that adapts step-wise and token-wise sparsity to each denoising trajectory, achieving at least 1.8× acceleration with minimal fidelity degradation.</p>
    <div class="project-links">
      <a href="https://yixiao-wang-stats.github.io/SADA/" target="_blank" rel="noopener">Project Page</a>
      <a href="https://arxiv.org/abs/2507.17135" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Ting-Justin-Jiang/sada-icml" target="_blank" rel="noopener">Code</a>
    </div>
  </div>
</div>

<div class="project-card project-card--rose">
  <div class="project-card__header">
    <span class="project-status">NeurIPS 2025 Poster</span>
    <h3>ECCD: Enhanced Cyclic Coordinate Descent for Elastic-Net GLMs</h3>
    <em>Sparstitute, Wake Forest University · Scalable optimization</em>
  </div>
  <div class="project-card__body">
    <img class="project-figure" src="/project-img/eccd.png" alt="ECCD coordinate-descent project overview">
    <p>ECCD uses second-order, Hessian-approximate updates and recurrence unrolling to accelerate elastic-net generalized linear models by up to 13× with negligible error increase.</p>
    <div class="project-links">
      <a href="https://arxiv.org/abs/2510.19999" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Yixiao-Wang-Stats/ECCD" target="_blank" rel="noopener">Code</a>
    </div>
  </div>
</div>

<div class="project-card project-card--violet">
  <div class="project-card__header">
    <span class="project-status">HPCAsia 2025 · Outstanding Paper Award</span>
    <h3>Scalable Dual Coordinate Descent for Kernel Methods</h3>
    <em>Sparstitute, Wake Forest University · High-performance computing</em>
  </div>
  <div class="project-card__body">
    <img class="project-figure" src="/project-img/scalable-dcd-scaling.png" alt="Strong-scaling results for DCD and s-step DCD across kernel SVM benchmarks">
    <p>Scalable Dual Coordinate Descent develops MPI-based s-step methods for kernel SVMs and ridge regression that reduce synchronization and achieve up to 9.8× strong-scaling speedups.</p>
    <div class="project-links">
      <a href="https://dl.acm.org/doi/10.1145/3712031.3712034" target="_blank" rel="noopener">Paper</a>
      <a href="https://github.com/Zishan-Shao/s-step-method-comm-avoiding" target="_blank" rel="noopener">Code</a>
    </div>
  </div>
</div>

## Research Experience

### Duke University, Center for Computational Evolutionary Intelligence (CEI) · Durham, NC

**Ph.D. Student and Researcher · Fall 2024 – Present**  
Advised by Prof. Yiran Chen. I develop efficient systems and algorithms for large language models and generative models, with an emphasis on model serving, low-rank inference, and training-free acceleration.

### REASON Lab, Wake Forest University · Winston-Salem, NC

**Research Assistant · Spring 2022 – Present**  
Worked on scalable kernel machine-learning algorithms and communication-avoiding optimization with Dr. Aditya Devarakonda.

### Wake Forest IRSC Laboratory · Winston-Salem, NC

**Research Assistant · Spring 2022 – Spring 2024**  
Conducted computer-vision research for rainforest image analysis under Prof. Victor Pauca.

## Service & Recognition

- **Conference Reviewer** — AAAI (2026, 2027), ICLR (2026), and NeurIPS (2026; Main Track and Datasets & Benchmarks Track).
- **Workshop Reviewer** — AdaptFM @ ICML 2026.
- **Research Mentorship** — Mentored seven Duke students (one Ph.D., two M.S., and four B.S. students), contributing to an ICML Spotlight paper and a workshop submission. See the [Mentorship page](/mentoring/).
- **Cloudexe GPU Catalyst Fellowship** — Lab award (proposal co-author), 2026.
- **Outstanding Paper Award** — HPCAsia 2025.
