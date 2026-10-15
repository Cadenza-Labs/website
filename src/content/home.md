---
slug: "/"
title: ""
---

# Building Robust Lie Detectors

<p class="lead">We aim to reduce catastrophic risk from AI by publishing research and open tools to advance the field of AI honesty and dishonesty detection.</p>

Our primary goal is to mitigate AI dishonesty to help frontier labs and regulators better understand what models are doing and why. Contributing to detecting and understanding when models perform dishonest actions during all phases of AI training and deployment serves this goal, because:

<div class="card-grid three">
<article class="card"><span class="badge muted">01</span><h4>During training</h4><p>Understanding how dishonest dispositions arise during training can support frontier labs in training more honest models.</p></article>
<article class="card"><span class="badge muted">02</span><h4>Pre-deployment</h4><p>Detecting dishonest behaviour pre-deployment (e.g., through evaluations) can prevent the continued training, or worse, deployment of dangerous models.</p></article>
<article class="card"><span class="badge muted">03</span><h4>During deployment</h4><p>Detecting such actions during deployment can trigger safeguards like model interruptions or steering, as well as user and developer alerts which enable investigations into questionable model behavior and properties.</p></article>
</div>

Beyond improving understanding of model behavior, we aim to provide tools and evidence for determining when a safety intervention by regulators or individuals within frontier labs is necessary.

For example, if a lab maintains that black-box monitoring suffices for a particular use case while an evaluator argues that white-box access is needed, evidence on how well dishonesty detectors perform at each access level can help settle the question.

## Our Four Pillars

We see our work divided into four pillars in pursuit of these goals, in order of priority:

<div class="card-grid pillars-grid">
<article class="card"><div class="badges"><span class="badge">P1</span></div><h3>Evidence for effective dishonesty detection methods</h3><p>We provide strong evidence for effective dishonesty detection methods. This includes providing tools and benchmarks to evaluate the effectiveness of dishonesty detection methods in different use cases, creating and improving such methods, and advocacy for training schemes that make frontier models amenable to them (for example, models with legible CoTs may be more amenable to being monitored by CoT monitors; models trained against dishonesty detection probes might not be amenable to such methods in deployment). Such evidence can further be leveraged by regulators and evaluators to obtain the necessary access levels.</p></article>
<article class="card"><div class="badges"><span class="badge">P2</span></div><h3>Use cases for dishonesty detectors</h3><p>We demonstrate use cases for dishonesty detectors to drive the real-world application of dishonesty detectors in measures like evals and monitoring.</p></article>
<article class="card"><div class="badges"><span class="badge">P3</span></div><h3>How training affects honesty</h3><p>We investigate how training schemes affect model honesty to support frontier labs in developing more honest models.</p></article>
<article class="card"><div class="badges"><span class="badge">P4</span></div><h3>Validating lab claims</h3><p>We validate claims made by labs about the honesty of their models and the effectiveness of their related safeguards, to prevent safety washing and better identify unsafe models, so that their deployment can be prevented in the future.</p></article>
</div>

<div class="links"><a class="btn" href="/research">See our research →</a></div>
