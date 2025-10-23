---
layout: guidesNavigation
title: How to reduce software related emissions
permalink: /guides/reduce-software-emissions
published: true
---

# How to reduce software related emissions

Software, while intangible, has a very tangible carbon footprint. Every line of code eventually runs on hardware, draws power, and consumes resources across networks and data centres. The efficiency of the software you build directly affects how much energy it uses, and therefore how much carbon it emits.

This guide offers practical steps developers and teams can take to design, build, and maintain lower-emission software systems. It builds on the [Technology Carbon Standard (TCS)](https://www.techcarbonstandard.org) and draws on research from the [Green Software Foundation](https://greensoftware.foundation), [Electricity Maps](https://www.electricitymaps.com/), and other sustainability-focused initiatives.

{% include linkedHeading.html heading="Understand software’s role in emissions" level=3 %}

The carbon footprint of software arises from three main sources:

- **Embodied emissions** — emissions from producing the hardware and infrastructure required to run it.  
- **Operational emissions** — the energy consumed by the software during use, including computation, storage, and data transfer.  
- **Software waste** — emissions from abandoned, bloated, or inefficient software that provides little or no enduring value.

Unlike hardware, which is replaced every few years, software emissions accumulate invisibly through inefficient code, excessive compute, or unnecessary background processes. Reducing these emissions requires examining how software is written, deployed, and used over its lifetime.

{% include linkedHeading.html heading="Architect for efficiency" level=3 %}

Software architecture has one of the greatest influences on energy use. Choosing lighter, simpler architectures reduces the number of moving parts — and therefore the compute and storage each request requires.

- **Avoid unnecessary layers**: Excessive abstraction, middleware, or microservices can multiply overhead. Fewer, well-designed services often consume less energy.  
- **Right-size your components**: Match the framework and runtime to the workload. For example, a small service that covers a few areas of functionality will typically use less energy than an equivalent collection of microservices that perform the same functions.
- **Batch and cache**: Reduce repeated work by batching tasks and caching results. These are recognised [green design patterns](https://greensoftware.foundation/projects/green-software-patterns) that lower CPU cycles and network traffic.  
- **Adopt asynchronous and event-driven patterns**: Polling wastes energy. Use events or message queues to process changes as they occur.  
- **Move compute closer to data**: Reducing data movement between services and regions saves both energy and time.

{% include linkedHeading.html heading="Optimise code and algorithms" level=3 %}

Code efficiency matters. Algorithmic choices can make the difference between millisecond and minute-long execution times.

- **Select efficient algorithms**: Prefer algorithms with lower computational complexity (for example, O(n log n) instead of O(n²)).  
- **Reduce idle loops and background tasks**: Polling or busy-waiting wastes CPU cycles. Use interrupts or scheduled tasks instead.  
- **Profile and measure**: Use profilers to identify “hot paths” that consume the most CPU or memory.  
- **Limit precision where possible**: Lower numerical precision (such as 16-bit vs 64-bit floats) can dramatically reduce energy use in computation-heavy workloads.  
- **Reduce data volume**: Compress data, stream results, and avoid transferring unnecessary fields. Network operations can account for a large share of emissions, especially for cloud-based software.

{% include linkedHeading.html heading="Apply green design patterns" level=3 %}

Green design patterns are repeatable strategies that lower energy consumption without harming performance. Examples include:

- **Lazy loading** — load data or resources only when needed, reducing memory and bandwidth.  
- **Demand shaping** — smooth traffic peaks to prevent over-provisioning of servers.  
- **Autoscaling and right-sizing** — dynamically adjust compute to actual demand.  
- **Edge caching** — serve content closer to users to reduce transmission energy.  
- **Model and service reuse** — avoid retraining or redeploying duplicate logic across systems.  
- **Graceful degradation** — allow reduced functionality when resources are limited rather than scaling up infrastructure.

The [Green Software Patterns catalogue](https://greensoftware.foundation/projects/green-software-patterns) provides detailed examples and implementation guidance across web, cloud, and AI domains.

{% include linkedHeading.html heading="Reduce software bloat" level=3 %}

Software tends to accumulate code, dependencies, and features over time, each of which adds hidden carbon cost.

- **Minimise dependencies**: Every library introduces additional CPU and memory requirements, as well as maintenance and security overhead.  
- **Avoid feature creep**: Unused or rarely used features increase code size and data storage without providing proportional value.  
- **Simplify build pipelines**: Each unnecessary build, test, or deployment consumes resources. See [Sustainability in testing](/guides/reduce-testing-emissions) for more details on test automation.
- **Use efficient packaging**: Container images should include only what’s needed.  
- **Measure software waste**: Track unused endpoints, orphaned services, and unmaintained repositories.

{% include linkedHeading.html heading="Make software carbon-aware" level=3 %}

Carbon-aware software adapts its behaviour based on the carbon intensity of the grid or data centre region.

Tools such as [Electricity Maps](https://www.electricitymaps.com/) and [WattTime](https://www.watttime.org/) provide real-time carbon intensity data that applications can query to:

- Schedule non-urgent tasks when electricity is cleaner.  
- Shift compute to regions with lower grid intensity.  
- Inform users about the impact of their actions (for example, “This download is cleaner if scheduled overnight”).  

However, carbon-aware design must be implemented carefully. Relocating workloads can create rebound effects or unintended demand spikes, as discussed in [The problems with carbon-aware software that everyone’s ignoring](https://github.com/climateaction-tech/grid-aware-software/blob/main/README.md).

{% include linkedHeading.html heading="Optimise storage and data lifecycle" level=3 %}

Data storage is a hidden but significant source of emissions.

- **Clean up stale data**: Delete or archive unused logs, caches, and backups.  
- **Compress and deduplicate**: Reduce disk usage through compression and single-instance storage.  
- **Implement data lifecycle policies**: Automatically delete or archive data after defined retention periods.  
- **Use tiered storage**: Match data access frequency to storage class; cold data can reside on slower, lower-energy media.  
- **Reduce data replication**: Avoid excessive backups or redundant data across multiple regions unless required for resilience.

{% include linkedHeading.html heading="Deploy and run efficiently" level=3 %}

Deployment practices have a direct impact on runtime emissions.

- **Right-size containers and VMs**: Avoid over-allocating CPU and memory.  
- **Enable power management**: Use autoscaling, sleep modes, and lower-power states during idle periods.  
- **Use green cloud regions**: Choose data centres powered by renewables or with low [PUE](/resources/glossary#power-usage-effectiveness-pue).  
- **Monitor efficiency metrics**: Track energy per request, CPU utilisation, and resource idle time.  
- **Use carbon-efficient build and CI pipelines**: For example, batch builds, cancel redundant runs, and prioritise test runs during low-carbon periods.

{% include linkedHeading.html heading="Measure and report software impact" level=3 %}

#### Measurement frameworks and specifications

- **[Software Carbon Intensity (SCI)](https://sci-guide.greensoftware.foundation)**: Offers a framework for measuring the carbon impact of software, considering both energy consumption and the carbon intensity of the electricity used.
- **[Green Software Foundation Impact Framework](https://if.greensoftware.foundation/)**: An open-source framework for building carbon-aware applications with standardised measurement approaches.
- **[Energy Star Portfolio Manager](https://www.energystar.gov/buildings/benchmark)**: For data centre and facility-level energy tracking.

#### Tools for energy and carbon measurement

**Cloud-native tools:**
- **[Azure Sustainability Calculator](https://azure.microsoft.com/en-us/blog/microsoft-sustainability-calculator-helps-enterprises-analyze-the-carbon-emissions-of-their-it-infrastructure/)**: Estimates carbon emissions for Azure workloads.
- **[AWS Customer Carbon Footprint Tool](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/)**: Provides carbon footprint data for AWS services.
- **[Google Cloud Carbon Footprint](https://cloud.google.com/carbon-footprint)**: Tracks and reports emissions from Google Cloud Platform usage.
- **[Cloud Carbon Footprint (CCF)](https://www.cloudcarbonfootprint.org/)**: Open-source tool that estimates energy use and carbon emissions from major cloud providers.

**Application-level monitoring:**
- **[PowerAPI](https://powerapi.org/)**: Open-source library for real-time power consumption monitoring of software applications.
- **[Scaphandre](https://github.com/hubblo-org/scaphandre)**: Rust-based energy consumption monitoring agent that can track individual processes.
- **[Green Metrics Tool](https://www.green-coding.io/products/green-metrics-tool/)**: Measures energy consumption of applications, particularly useful for web applications and containers.
- **[Carbonifer](https://carbonifer.io/)**: Python library for calculating the carbon footprint of machine learning models.
- **[CodeCarbon](https://codecarbon.io/)**: Python package that tracks and estimates CO2 emissions from compute resources.

**Infrastructure monitoring:**
- **[Intel RAPL (Running Average Power Limit)](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/advisory-guidance/running-average-power-limit-energy-reporting.html)**: Hardware counters for measuring CPU and memory power consumption.
- **[NVIDIA-SMI](https://developer.nvidia.com/nvidia-system-management-interface)**: For GPU power monitoring and management.
- **[Prometheus](https://prometheus.io/) + [Node Exporter](https://github.com/prometheus/node_exporter)**: For collecting and monitoring system-level energy metrics.
- **[Graphite Carbon Metrics](https://grafana.com/grafana/dashboards/43-graphite-carbon-metrics/)**: Visualisation tools for carbon metrics dashboards.

**CI/CD integration tools:**
- **[Eco-CI](https://github.com/green-coding-solutions/eco-ci-energy-estimation)**: Energy estimation for CI/CD pipelines with support for GitHub Actions, GitLab CI, and others.
- **[Green Software Foundation IF](https://if.greensoftware.foundation/)**: Impact Framework for integrating sustainability metrics into development workflows.

See the [Green Software Directory on GitHub](https://github.com/github/GreenSoftwareDirectory) for more tools.

#### Implementation approaches

You can integrate measurement tools into your monitoring and reporting workflows to:

- **Track energy per transaction or request** using application performance monitoring (APM) tools integrated with energy measurement libraries.
- **Identify high-emission components or workloads** through detailed profiling and energy attribution across services.
- **Inform architectural and refactoring decisions** with energy consumption data to guide optimisation priorities.
- **Provide transparent reporting for clients and stakeholders** through automated dashboards and regular sustainability reports.
- **Set and monitor emission reduction targets** with baseline measurements and progress tracking.
- **Implement carbon budgets** for development teams, similar to performance budgets.

#### Getting started with measurement

1. **Start simple**: Begin with cloud provider carbon footprint tools if using public cloud services.
2. **Add application-level monitoring**: Integrate tools like CodeCarbon or PowerAPI for deeper insights.
3. **Establish baselines**: Measure current emissions before implementing optimisations.
4. **Automate reporting**: Build dashboards and alerts to track progress over time.
5. **Validate measurements**: Cross-reference multiple tools to ensure accuracy and consistency.

{% include linkedHeading.html heading="Quick wins" level=2 %}

- Profile and optimise your most energy-intensive functions.  
- Cache repeated computations and network calls.  
- Power down idle environments.  
- Remove unused dependencies and features.  
- Compress and delete old data.  
- Schedule non-urgent jobs during low-carbon periods.  
- Use smaller, more efficient frameworks where possible.

{% include linkedHeading.html heading="Longer-term investments" level=2 %}

- Adopt carbon-aware infrastructure and build pipelines.  
- Incorporate SCI or equivalent metrics into CI/CD.  
- Create internal libraries of green design patterns.  
- Embed sustainability criteria in code review templates.  
- Establish a software decommissioning and archival policy to prevent digital waste.

## Further reading

- [Green Software Foundation — Patterns Catalogue](https://greensoftware.foundation/projects/green-software-patterns)  
- [Microsoft Sustainable Software Engineering Principles](https://learn.microsoft.com/en-us/training/modules/sustainable-software-engineering-overview/)  
- [Energy-Aware Software Engineering (IEEE Spectrum)](https://spectrum.ieee.org/green-software)  
- [Green Algorithms: Quantifying the Carbon Footprint of Computation](https://arxiv.org/abs/2007.07610)  
- [A Synthesis of Green Architectural Tactics for ML-Enabled Systems](https://arxiv.org/abs/2312.09610)  
- [Electricity Maps — Real-time carbon intensity data](https://app.electricitymaps.com/map)

*This guide is part of the Tech Carbon Standard’s growing library on emission reduction. Contributions and field data are welcome to improve accuracy and applicability.*

