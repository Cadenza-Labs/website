---
slug: "/roadmap"
title: "Roadmap"
---

We aim to reduce catastrophic risk from AI by publishing research and open tools to advance the field of AI honesty and dishonesty detection.

Our primary goal is to mitigate AI dishonesty to help frontier labs and regulators better understand what models are doing and why. Contributing to detecting and understanding when models perform dishonest actions during all phases of AI training and deployment serves this goal, because:

- Understanding how dishonest dispositions arise *during training* can support frontier labs in training more honest models.
- Detecting dishonest behaviour *pre-deployment* (e.g., through evaluations) can prevent the continued training, or worse, deployment of dangerous models.
- Detecting such actions *during deployment* can trigger safeguards like model interruptions or steering, as well as user and developer alerts which enable investigations into questionable model behavior and properties.

Beyond improving understanding of model behavior, we aim to provide tools and evidence for determining when a safety intervention by regulators or individuals within frontier labs is necessary. For example, if a lab maintains that black-box monitoring suffices for a particular use case while an evaluator argues that white-box access is needed, evidence on how well dishonesty detectors perform at each access level can help settle the question.

## Our Four Pillars

We see our work divided into four pillars in pursuit of these goals, in order of priority:

**P1. Evidence for effective dishonesty detection methods.** We provide strong evidence for effective dishonesty detection methods. This includes providing tools and benchmarks to evaluate the effectiveness of dishonesty detection methods in different use cases, creating and improving such methods, and advocacy for training schemes that make frontier models amenable to them (for example, models with legible CoTs may be more amenable to being monitored by CoT monitors; models trained against dishonesty detection probes might not be amenable to such methods in deployment). Such evidence can further be leveraged by regulators and evaluators to obtain the necessary access levels.

**P2. Use cases for dishonesty detectors.** We demonstrate use cases for dishonesty detectors to drive the real-world application of dishonesty detectors in measures like evals and monitoring.

**P3. How training affects honesty.** We investigate how training schemes affect model honesty to support frontier labs in developing more honest models.

**P4. Validating lab claims.** We validate claims made by labs about the honesty of their models and the effectiveness of their related safeguards, to prevent safety washing and better identify unsafe models, so that their deployment can be prevented in the future.

More about our current and past work can be found on our [research page](/research).
