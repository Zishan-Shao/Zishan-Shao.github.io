---
title: "Research"
date: 2026-07-30
draft: true
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

.research-summary {
    border-left: 4px solid #6086b4;
    margin: 1.5rem 0 2.5rem;
    padding: 0.25rem 1.25rem;
}

.project-card {
    border: 1px solid #d8dde3;
    border-radius: 10px;
    margin: 2.5rem 0;
    overflow: hidden;
}

.project-card__header {
    border-bottom: 1px solid #d8dde3;
    padding: 1.4rem 1.6rem 1.2rem;
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
    background: #e8f0f7;
    border-radius: 999px;
    color: #35516c;
    display: table;
    font-size: 0.82em;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 0.8rem;
    padding: 0.2rem 0.75rem;
}

.project-figure {
    display: block;
    height: auto;
    margin: 0.5rem auto 1.5rem;
    max-width: 100%;
}

.project-figure-caption {
    color: #6b7280;
    font-size: 0.88em !important;
    line-height: 1.45;
    margin: -1rem auto 1.6rem;
    max-width: 853px;
    text-align: center;
}

.project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.4rem;
}

.project-links a {
    border: 1px solid #6086b4;
    border-radius: 999px;
    padding: 0.35rem 0.85rem;
}

.project-links a:hover {
    background: #6086b4;
    color: #fff !important;
}

</style>

## Research Overview

<div class="research-summary">

I am a Ph.D. student in Electrical and Computer Engineering at Duke University, advised by Prof. Yiran Chen in the Center for Computational Evolutionary Intelligence (CEI). My work spans efficient LLM inference, mechanistic interpretability, diffusion acceleration, and scalable optimization.

</div>

## Selected Projects

<div class="project-card">
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

<div class="project-card">
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

<div class="project-card">
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

## Earlier Projects

<div class="project-card">
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

<div class="project-card">
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

<div class="project-card">
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
Advised by Prof. Yiran Chen. My research spans multimodal generative models, low-rank methods, and AI algorithm–system co-design, with a focus on efficient and interpretable techniques for large-scale deployment.

### REASON Lab, Wake Forest University · Winston-Salem, NC

**Research Assistant · Spring 2022 – Present**  
Worked on scalable kernel machine-learning algorithms and communication-avoiding optimization with Dr. Aditya Devarakonda.

### Wake Forest IRSC Laboratory · Winston-Salem, NC

**Research Assistant · Spring 2022 – Spring 2024**  
Conducted computer-vision research for rainforest image analysis under Prof. Victor Pauca.

## Service and Recognition

- **Conference Reviewer** — AAAI (2026, 2027), ICLR (2026), and NeurIPS (2026; Main Track and Datasets & Benchmarks Track).
- **Workshop Reviewer** — AdaptFM @ ICML 2026.
- **Research Mentorship** — Mentored seven Duke students (one Ph.D., two M.S., and four B.S. students), contributing to an ICML Spotlight paper and a workshop submission. See the [Mentorship page](/mentoring/).
- **Cloudexe GPU Catalyst Fellowship** — Lab award (proposal co-author), 2026.
- **Outstanding Paper Award** — HPCAsia 2025.
