---
title: ""
date: 2025-08-05
draft: false
---

<style>
body, p, li, div {
    font-size: 18px !important;
    line-height: 1.6 !important;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 1.4em !important;
}

.abstract {
    display: none;
    background-color: #f8f9fa;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #007bff;
    border-radius: 5px;
    font-size: 18px !important;
}

.abstract-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px 0;
}

.abstract-button:hover {
    background-color: #0056b3;
}

/* Override any existing font sizes */
* {
    font-size: inherit;
}
</style>

<script>
function toggleAbstract(projectId) {
    const abstract = document.getElementById(projectId);
    const button = document.querySelector(`[onclick="toggleAbstract('${projectId}')"]`);
    
    if (abstract.style.display === 'none' || abstract.style.display === '') {
        abstract.style.display = 'block';
        button.textContent = 'Hide Abstract';
    } else {
        abstract.style.display = 'none';
        button.textContent = 'Show Abstract';
    }
}
</script>


<!--
<figure>
    <img src="../version1_pressed.jpg" alt="Image Description" style="display: block; margin: auto;">
    <figcaption>What's up!</figcaption> 
</figure>
-->



#


### Bio

I'm a Master of Science student in Statistical Science at Duke University, with a strong background in Computer Science and Statistics from Wake Forest University. My research focuses on High Performance Computing (HPC), Efficient and Scalable Machine Learning, Numerical Methods, and other key subjects. As a Research Assistant at Duke's CEI Lab, I work on interdisciplinary projects combining statistics, computer science, and applied mathematics.



<br>

## Selected Publications

### SADA Project
<div style="text-align: center;">
    <img src="../project-img/sada.png" alt="SADA Project" width="700" height="350">
</div>

**SADA: Stability-guided Adaptive Diffusion Acceleration**  
Ting Jiang*, Hancheng Ye*, Yixiao Wang*, **Zishan Shao**, Jingwei Sun, Jingyang Zhang, Jianyi Zhang, Zekai Chen, Yiran Chen, Hai Li  
*ICML 2025 (Poster)*

<button class="abstract-button" onclick="toggleAbstract('sada-abstract')">Show Abstract</button>
<div id="sada-abstract" class="abstract">
    <strong>Abstract:</strong> Diffusion models have shown remarkable success in generating high-quality samples, but their inference process is often slow due to the need for many denoising steps. We propose SADA (Stability-guided Adaptive Diffusion Acceleration), a novel approach that adaptively reduces the number of denoising steps while maintaining sample quality. Our method uses a stability-guided criterion to determine when to skip steps, achieving significant speedup without compromising generation quality.
</div>

[Paper](https://openreview.net/pdf?id=ThMQfsBnje) | [Code](https://github.com/your-repo/sada) | [Slides](https://your-slides-link.com)

### ECCD Project
<div style="text-align: center; display: flex; justify-content: center; gap: 20px;">
    <img src="../project-img/eccd1.png" alt="ECCD Project 1" width="350" height="300">
    <img src="../project-img/eccd2.png" alt="ECCD Project 2" width="350" height="300">
</div>

**Enhanced Cyclic Coordinate Descent for Elastic Net Penalized Linear Models**  
**Zishan Shao\***, Yixiao Wang*, Ting Jiang, Aditya Devarakonda  
*NeurIPS 2025 (Poster)*

<button class="abstract-button" onclick="toggleAbstract('eccd-abstract')">Show Abstract</button>
<div id="eccd-abstract" class="abstract">
    <strong>Abstract:</strong> Coordinate descent methods are widely used for solving large-scale optimization problems, particularly in machine learning applications. We propose Enhanced Cyclic Coordinate Descent (ECCD), an improved variant that addresses the limitations of traditional cyclic coordinate descent for Elastic Net penalized linear models. Our method introduces adaptive step sizes and efficient communication-avoiding strategies, achieving faster convergence and better scalability for high-dimensional problems.
</div>

[Paper](https://arxiv.org/abs/2406.18001) | [Code](https://github.com/your-repo/eccd) | [Slides](https://your-slides-link.com)

### FlashSVD Project
<div style="text-align: center;">
    <img src="../project-img/pipeline.png" alt="ECCD Project" width="700" height="350">
</div>

**FlashSVD: Memory Efficient Approach for SVD-Based Low Rank Model Inference**  
***Zishan Shao***, Yixiao Wang, Qinsi Wang, Ting Jiang, Zhixu Du, Hancheng Ye, Danyang Zhuo, Yiran Chen, Hai Li  
*AAAI 2026 (Submitted)*

<button class="abstract-button" onclick="toggleAbstract('flashsvd-abstract')">Show Abstract</button>
<div id="flashsvd-abstract" class="abstract">
    <strong>Abstract:</strong> Singular Value Decomposition (SVD) is a fundamental technique in machine learning and data analysis, but its memory requirements can be prohibitive for large-scale applications. We present FlashSVD, a memory-efficient approach for SVD-based low-rank model inference that significantly reduces memory footprint while maintaining accuracy. Our method employs innovative caching strategies and adaptive memory management, enabling efficient processing of large matrices on memory-constrained systems.
</div>

[Paper](https://arxiv.org/abs/2508.01506) | [Code](https://github.com/your-repo/flashsvd) | [Slides](https://your-slides-link.com)

 
<br>


### Education

- **Duke University**, Durham, NC
  - Master of Science in Statistical Science, Expected 2025
  - Advisor: Dr. Yiran Chen
  - Research Lab: CEI Lab (Computational Engineering and Intelligence)
  - Relevant Coursework: Real Analysis, Advanced Numerical Linear Algebra, Numerical Methods, Bayesian Statistics, Advanced Statistical Inference, Predictive Modeling & Statistical Learning, Electrical Computing in Neural Networks, Advanced Stochastic Process, Advanced Hierarchical Modeling.

- **Wake Forest University**, Winston-Salem, NC
  - Bachelor of Science in Computer Science, May 2024
  - Second Major (B.S.) in Statistics
  - Dean's List: All semesters, Summa Cum Laude
  - Dissertation: "Communication Avoiding Coordinate Descent Methods On Kernel And Regularized Linear Models" [PDF](../WFU_CS_Thesis.pdf)
  - Advisor: Dr. Aditya Devarakonda
  - Relevant Coursework: Python, C, R, Java, Statistical & Machine Learning, Statistical Inferences, Linear Models, Multivariate Analysis, Probability, Network Theory & Analysis, Advanced Data Structures and Algorithms,  Assembly Languages, Computer System, Multivariate Calculus, Linear Algebra, Discrete Mathematics, Time Series Forecasting, Special Topics – Computer Vision, High-Performance Computing, Parallel Computing


- **Shanghai Weiyu High School**, Shanghai, China

### Academic Profiles

- **[Google Scholar](https://scholar.google.com/citations?user=EUMawmQAAAAJ&hl=en)** - View my publications and citations


<!-- Rest of the content follows -->


