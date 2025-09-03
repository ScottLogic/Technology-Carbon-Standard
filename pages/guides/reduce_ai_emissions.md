---
layout: guidesNavigation
title: How to reduce AI related emissions
permalink: /guides/reduce-ai-emissions
published: true
---

# How to reduce AI related emissions

{% include linkedHeading.html heading="Data centre location and timing shifts" level=3 %} The location of the data centre used for training and hosting your AI model can have a huge impact on the amount of carbon it generates. Choosing a data centre in a country with a carbon-efficient energy grid and a cool climate can significantly reduce energy consumption[^1].
It is also important to consider the timing of your most energy intensive activities[^2]. Scheduling model training during periods when the energy grid is powered by renewable sources can further minimise environmental impact[^3].
Useful tools for carbon intensity tracking are provided by [Electricity Maps](https://www.electricitymaps.com/) including their original [interactive map](https://app.electricitymaps.com/map/72h/hourly).

However, it's important to note that shifting the location and timing of energy-intensive jobs is not as straightforward as it may seem. Relocating such tasks to a different time of day or geographical area can lead to unexpected spikes in energy demand, placing additional strain on the grid. This increased demand is likely to be met by fossil fuel sources, undermining the intended environmental benefits. An interesting discussion on this work can be found here: [The problems with carbon-aware software that everyone’s ignoring.](https://github.com/climateaction-tech/grid-aware-software/blob/main/README.md)

{% include linkedHeading.html heading="Hardware efficiency" level=3 %}
It has been shown that deployment infrastructure can have more of an effect on energy consumption than model size. For example, GPT-4o mini consumes approximately 20% more energy than GPT-4o during inference due to its use of older less efficient hardware[^4]. However, it's also important to consider the emissions associated with upgrading to newer hardware, including the embodied carbon and the e-waste generated from retiring older equipment[^5].

{% include linkedHeading.html heading="Education around AI usage and prompt engineering" level=3 %}
While the emissions generated from a single AI query (inference) may seem negligible, they become significant when scaled across millions of users and interactions. This makes it essential for end users to craft prompts that elicit the desired response in as few attempts as possible—a practice known as prompt engineering[^6]. 
Research shows that both the length of the prompt and, more critically, the length of the response can substantially impact the energy consumption of AI models. This is due to the number of tokens processed during inference. A helpful illustration of this can be found on page 17 of the UNESCO report [Smarter, smaller, stronger](https://unesdoc.unesco.org/ark:/48223/pf0000394521). 
Therefore users should endeavour to construct concise prompts and request concise answers. Simple techniques, such as asking the model to “only provide the minimal answer” have been shown to reduce response length by 60% and energy usage by 28%[^7]. 
At the platform level, another method to improve energy efficiency is batch inference, where multiple requests are grouped and processed simultaneously[^8]. Studies have shown that increasing the batch size reduces the overall energy requirements of inference, with each individual query consuming less energy compared to running them separately[^9].

{% include linkedHeading.html heading="Model size" level=3 %}
The size of an LLM (its number of parameters) can significantly affect its energy consumption across training, hosting, and inference[^10].  Smaller models require fewer computational resources for both training and inference and can be run on less specialised and more energy efficient hardware. When choosing a model, it is important to consider which size best suits your specific use case. Opting for a smaller more task specific model can deliver the same desired outcomes as a larger generalised model while reducing compute power and environmental impact[^11].
When creating a model there are several techniques that can be employed to reduce its size. Some of these are listed below.

{% include linkedHeading.html heading="Model Compression" level=2 %}
As the size of AI models continues to grow, so do their computational and storage demands, leading to increased energy consumption and environmental impact. Model compression encompasses a variety of techniques designed to reduce the size and computational requirements of AI systems while preserving their accuracy and performance. By shrinking model size, these methods enable more efficient use of hardware with smaller storage needs and faster inference times which in turn lowers energy usage and reduces emissions. However, compression must strike a careful balance between precision, performance, and efficiency to ensure that environmental gains do not come at the cost of model reliability.

Some useful resources to learn more about model compression include:  
[A comprehensive review of model compression techniques in machine learning: Applied Intelligence](https://link.springer.com/article/10.1007/s10489-024-05747-w)  
[Frontiers: A survey of model compression techniques: past, present, and future](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1518965/full)  
[What is Knowledge distillation?](https://www.ibm.com/think/topics/knowledge-distillation)  
[What is Transfer Learning? - Transfer Learning in Machine Learning Explained - AWS](https://aws.amazon.com/what-is/transfer-learning/)  


Common compression techniques used in Machine learning include:

**Knowledge Distillation:** a larger pre-trained model (the “teacher”) is used to train a smaller model (the “student”). This results in the production of a much smaller, generalised model but with a similar level of accuracy to the original larger model. In recent years this has become an important technique in the world of LLMs by using large (proprietary) models to generate smaller (often open source) models. 

**Quantisation:** involves reducing the precision of a models weights to a lower precision data type. Typically, 32-bit floating-point-numbers are used but quantisation would replace these with 8-bit or even 4-bit integers. It is one of the most used compression techniques offering improved computational efficiency and reduced storage requirements.

**Pruning:** involves removing less important parameters or weights leading to a smaller more efficient model with faster inference speeds. Often used in neural networks and deep learning models.

**Low-Rank Factorisation:** Decomposes weight matrices into two smaller ones to reduce computation.

**Transfer Learning:** where a model trained on one task is retrained to perform a related task. This has the advantage of reducing the amount of time needed to train a new model from scratch which can significantly reduce the emissions generated from this stage of the AI development process.


## References

[^1]: [Carbon Emissions and Large Neural Network Training](https://arxiv.org/pdf/2104.10350) 
[^2]: [Timeshifting strategies for carbon-efficient long-running large language model training: Innovations in Systems and Software Engineering](https://link.springer.com/article/10.1007/s11334-023-00546-x)
[^3]: [CAFE: Carbon-Aware Federated Learning in Geographically Distributed Data Centers](https://arxiv.org/pdf/2311.03615)
[^4]: [How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference](https://arxiv.org/pdf/2505.09598)
[^5]: [Life-Cycle Emissions of AI Hardware: A Cradle-To-Grave Approach and Generational Trends](https://arxiv.org/pdf/2502.01671)
[^6]: [Prompt Engineering Guide](https://www.promptingguide.ai/)
[^7]: [Brevity is the soul of sustainability: Characterizing LLM response lengths](https://arxiv.org/pdf/2506.08686)
[^8]: [Understanding LLM Batch Inference](https://www.adaline.ai/blog/llm-batch-inference)
[^9]: [Towards Sustainable NLP: Insights from Benchmarking Inference Energy in Large Language Models](https://arxiv.org/pdf/2502.05610v2)
[^10]: [Power Hungry Processing: ⚡ Watts ⚡ Driving the Cost of AI Deployment?](https://arxiv.org/pdf/2311.16863)
[^11]: [ Frontiers: Energy costs of communicating with AI](https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2025.1572947/full)