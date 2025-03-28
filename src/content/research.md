---
slug: "/research"
title: "Research"
---

The goal of our group is to do research which contributes to solving AI alignment. Broadly, we aim to work on whatever technical alignment projects have the highest expected value. Our current best ideas for research directions to pursue seem to be in interpretability. Interpretability is broad; our research direction is less broad. **Our specific goal is to research, benchmark and develop robust lie detectors for LLMs.** 

## Latest Work

### [Cluster-Norm for Unsupervised Probing of Knowledge](https://arxiv.org/abs/2407.18712)
This method addresses challenges in identifying relevant knowledge features amidst distracting features in model activations. By clustering and normalizing activation patterns before applying probing techniques, the approach enhances the accuracy of unsupervised probes in extracting intended knowledge. While not addressing all limitations of current methods, cluster normalization shows promise in making unsupervised probing more robust and reliable for understanding the knowledge encoded in language models.

This paper was accepted at the MechInterp workshop at ICML 2024 and the EMNLP 2024 conference. 

### [AI-AI Bias](https://arxiv.org/abs/2407.18712)
This work was done in collaboration with [ACS](https://acsresearch.org/about). We conducted experiments to test whether large language models (LLMs) like GPT-3.5 and GPT-4 show bias when selecting between items described by AI-generated content versus human-authored content. Using product descriptions and academic paper abstracts, we found LLMs consistently preferred to select items where the descriptions or abstracts were generated by other LLMs, rather than those written by humans. This suggests a potential "anti-human" bias in AI systems that could disadvantage human workers if LLMs are increasingly used for decision-making in economic contexts. Our study raises concerns about fairness and discrimination as AI becomes more integrated into various aspects of society and the economy.

## Past work:
- [Finding the estimate of the value of a state in RL agents](https://www.lesswrong.com/posts/Jfmmfoeskims5jc5f/finding-the-estimate-of-the-value-of-a-state-in-rl-agents): We explored methods to identify value estimates in RL agents, focusing on CNN-based PPO agents playing Pong. We adapted CCS loss for unsupervised probing and used supervised probing as a baseline. While we had some success, we found that salient features often overshadowed value information.
- [GitHub - EleutherAI/ccs](https://github.com/EleutherAI/ccs): Keeping language models honest by directly eliciting knowledge encoded in their activations. Building on "Discovering latent knowledge in language models without supervision" (Burns et al. 2022). We are main contributors of the elk library. This is an open-source reimplementation of the codebase with added features (parallelization, HuggingFace integration etc.), which we used to replicate the original paper’s results and to run experiments.
- [Possible ways to expand on "Discovering Latent Knowledge in Language Models Without Supervision"](https://www.lesswrong.com/posts/bFwigCDMC5ishLz7X/rfc-possible-ways-to-expand-on-discovering-latent-knowledge): Our initial post, with ideas of how to expand the paper
- [Searching for a model's concepts by their shape – a theoretical framework](https://www.lesswrong.com/posts/Go5ELsHAyw7QrArQ6/searching-for-a-model-s-concepts-by-their-shape-a): Our suggested theoretical framework expanding the method to concepts beyond truth
- [Toward A Mathematical Framework for Computation in Superposition](https://www.lesswrong.com/posts/2roZtSr5TGmLjXMnT/toward-a-mathematical-framework-for-computation-in)
- [Decomposing Activations into features](https://drive.google.com/file/d/1jD0VpCF1fLXyNwMMM3skbYAgoR2qQOu5/).
- [Research YouTube channel](https://www.youtube.com/watch?v=IGdk0JsvIkY) 