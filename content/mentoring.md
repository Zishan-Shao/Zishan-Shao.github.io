---
title: "Mentorship"
date: 2026-07-30
draft: false
---

<style>
.post .post-content,
.post p,
.post li,
.post div {
  font-size: 18px !important;
  line-height: 1.6 !important;
}

.post .post-title {
  display: none;
}

.mentoring-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(190px, 0.72fr);
  gap: 2rem;
  overflow: hidden;
  margin: 0.4rem 0 3.15rem;
  padding: 2.5rem 2.35rem;
  border-radius: 20px;
  color: #faffff;
  background:
    radial-gradient(circle at 85% 12%, rgba(98, 236, 199, 0.32), transparent 22%),
    radial-gradient(circle at 75% 108%, rgba(116, 96, 223, 0.5), transparent 38%),
    linear-gradient(128deg, #062e42 0%, #0d5a6b 50%, #332c78 100%);
  box-shadow: 0 18px 38px rgba(13, 67, 86, 0.2);
}

.mentoring-hero::after {
  position: absolute;
  right: -84px;
  bottom: -112px;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 50%;
  content: "";
}

.mentoring-kicker {
  position: relative;
  z-index: 1;
  margin: 0 0 0.65rem;
  color: #9ff3d8;
  font-size: 0.78em !important;
  font-weight: 750;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.mentoring-hero h1 {
  position: relative;
  z-index: 1;
  max-width: 650px;
  margin: 0 0 0.8rem;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem) !important;
  letter-spacing: -0.045em;
  line-height: 1.08 !important;
}

.mentoring-hero-copy {
  position: relative;
  z-index: 1;
  max-width: 670px;
  margin: 0;
  color: rgba(244, 255, 253, 0.91);
}

.mentoring-stats {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  gap: 0.7rem;
}

.mentoring-stat {
  padding: 1rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  backdrop-filter: blur(8px);
}

.mentoring-stat strong,
.mentoring-stat span {
  display: block;
}

.mentoring-stat strong {
  color: #fff;
  font-size: 1.7em !important;
  line-height: 1.1 !important;
}

.mentoring-stat span {
  margin-top: 0.28rem;
  color: #c5f5e7;
  font-size: 0.73em !important;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.25 !important;
  text-transform: uppercase;
}

.post .post-content > h2 {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 3.15rem;
  color: #173c63;
  font-size: 1.38em !important;
  letter-spacing: -0.02em;
}

.post .post-content > h2::before {
  display: inline-block;
  width: 0.32rem;
  height: 1.3em;
  border-radius: 999px;
  background: linear-gradient(180deg, #32c4a0, #6959de);
  content: "";
}

.mentoring-intro {
  margin: 1rem 0 1.8rem;
  padding: 1.15rem 1.3rem;
  border: 1px solid #d7ece9;
  border-left: 5px solid #36b99a;
  border-radius: 0 12px 12px 0;
  background: linear-gradient(135deg, #f4fffc, #f0f5ff);
}

.mentoring-intro p { margin: 0; }

.prospective-note {
  margin: 1rem 0 2.1rem;
  padding: 1.2rem 1.35rem;
  border: 1px solid #d7e4f6;
  border-left: 5px solid #6a73d6;
  border-radius: 0 12px 12px 0;
  background: linear-gradient(135deg, #f8faff, #f3f1ff);
}

.prospective-note p { margin: 0; }

.prospective-note a {
  color: #3c4f9a !important;
  font-weight: 700;
}

.mentee-list {
  overflow: hidden;
  border: 1px solid #d9e4ec;
  border-radius: 14px;
  background: #fbfdfd;
}

.mentee-row {
  display: grid;
  grid-template-columns: minmax(130px, 0.78fr) minmax(200px, 1.35fr) minmax(150px, 1.15fr);
  gap: 1.1rem;
  align-items: start;
  padding: 1rem 1.2rem;
  border-top: 1px solid rgba(32, 88, 117, 0.12);
}

.mentee-row:first-child {
  border-top: 0;
}

.mentee-row h3 {
  margin: 0;
  color: #16395e;
  font-size: 1.1em !important;
}

.mentee-affiliation {
  margin: 0;
  color: #506884;
  font-size: 0.88em !important;
}

.mentee-education {
  display: inline-block;
  margin-top: 0.24rem;
}

.mentee-project {
  margin: 0;
  color: #2d5268;
  font-size: 0.88em !important;
  line-height: 1.45 !important;
}

.alumni-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(180px, 0.75fr) 1.45fr;
  gap: 1.4rem;
  overflow: hidden;
  margin-top: 1rem;
  padding: 1.35rem 1.45rem;
  border: 1px solid #eadde7;
  border-radius: 14px;
  background: linear-gradient(135deg, #fffafd, #f7f3ff);
}

.alumni-card::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, #df627c, #775fdd);
  content: "";
}

.alumni-card h3 {
  margin: 0;
  color: #50376d;
  font-size: 1.12em !important;
}

.alumni-card p {
  margin: 0;
}

.alumni-label {
  display: block;
  margin-bottom: 0.28rem;
  color: #a24e72;
  font-size: 0.76em !important;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.mentoring-timeline {
  display: grid;
  gap: 1rem;
}

.timeline-item {
  padding: 1rem 1.2rem;
  border-left: 3px solid #7993c4;
  background: #f8faff;
}

.timeline-item h3 {
  margin: 0 0 0.22rem;
  color: #29486d;
  font-size: 1.03em !important;
}

.timeline-item p {
  margin: 0;
}

@media (max-width: 680px) {
  .mentoring-hero,
  .alumni-card {
    grid-template-columns: 1fr;
  }

  .mentoring-hero {
    gap: 1.35rem;
    padding: 2rem 1.45rem;
    border-radius: 16px;
  }

  .mentee-row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
}
</style>

<section class="mentoring-hero">
  <div>
    <p class="mentoring-kicker">Research mentorship</p>
    <h1>Building researchers, one project at a time.</h1>
    <p class="mentoring-hero-copy">I mentor students across different stages and institutions on research in efficient AI systems and generative models.</p>
  </div>
  <div class="mentoring-stats" aria-label="Mentorship at a glance">
    <div class="mentoring-stat"><strong>6</strong><span>Current mentees</span></div>
    <div class="mentoring-stat"><strong>1</strong><span>Alumnus</span></div>
  </div>
</section>

## Prospective Mentees

<div class="prospective-note">
  <p>I care far more about your potential to grow as a researcher than the number of papers on your CV. If you are interested in working together, please feel free to <a href="mailto:zishan.shao@duke.edu">get in touch</a>. I am particularly excited to hear from students with prior research experience, a strong academic record, intellectual curiosity, and the initiative to take ownership of challenging problems.</p>
</div>

## Current Research Mentees

<div class="mentoring-intro">
  <p>Current students and interns work on projects spanning multimodal generative models, low-rank methods, and efficient AI algorithm–system co-design.</p>
</div>

<div class="mentee-list">
  <div class="mentee-row">
    <h3>Lixun Zhang</h3>
    <p class="mentee-affiliation">Duke University · M.S. in Computer Science</p>
    <p class="mentee-project"><strong>Research:</strong> DecodeShare · ICML 2026 Spotlight</p>
  </div>
  <div class="mentee-row">
    <h3>Wenhao Wu</h3>
    <p class="mentee-affiliation">Duke University · M.S. in Electrical and Computer Engineering</p>
    <p class="mentee-project"><strong>Research:</strong> FlashSVD v1.5</p>
  </div>
  <div class="mentee-row">
    <h3>Mingrun Jiang</h3>
    <p class="mentee-affiliation">Duke University · ECE Ph.D. student<br><span class="mentee-education">B.S. in Tsinghua University, Yao Class</span></p>
  </div>
  <div class="mentee-row">
    <h3>Liang Tian</h3>
    <p class="mentee-affiliation">Duke Kunshan University · Undergraduate student</p>
  </div>
  <div class="mentee-row">
    <h3>Ke Li</h3>
    <p class="mentee-affiliation">Peking University · Turing Class</p>
  </div>
  <div class="mentee-row">
    <h3>Georgiy Zemlevskiy</h3>
    <p class="mentee-affiliation">Duke University · Undergraduate student</p>
  </div>
</div>

## Alumni

<article class="alumni-card">
  <div>
    <span class="alumni-label">Research alumnus</span>
    <h3>Ting Jiang</h3>
  </div>
  <p><strong>Duke University undergraduate</strong><br>Outcome: Ph.D. student in the <strong>Language Technologies Institute at Carnegie Mellon University</strong>.</p>
</article>

## Earlier Mentoring & Teaching

<div class="mentoring-timeline">
  <article class="timeline-item">
    <h3>Data+ Project Manager, Duke Rhodes iiD</h3>
    <p><em>Summer 2025 · Advisor: Dr. Gregory Herschlag</em><br>Mentored a three-person team on textual analysis for agricultural research.</p>
  </article>
  <article class="timeline-item">
    <h3>Peer Tutor, Center for Learning, Access, and Student Success (CLASS), Wake Forest University</h3>
    <p><em>October 2021 – December 2023</em><br>Provided in-person computer science tutoring and study support for undergraduate students.</p>
  </article>
</div>
