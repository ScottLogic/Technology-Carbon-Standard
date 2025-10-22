---
layout: guidesNavigation
permalink: /guides/reduce-testing-emissions
published: true
---

# Sustainability in testing or how to test more sustainably

Software development is a power intensive process. From the operation of data centres to the production and disposal of hardware, every stage of the software development lifecycle (SDLC) consumes energy and contributes to carbon emissions. While much of the conversation around sustainable software focuses on development and hosting, software testing remains an often-overlooked area.

However, testing can be a significant contributor to emissions within the SDLC. It relies on multiple test environments, often mirroring production in scale and resource intensity, the repeated execution of large test suites for regression and performance testing, and validation across a wide range of devices and platforms, frequently using the latest hardware.

Finding ways to make testing more sustainable not only helps reduce the environmental impact of software development but can also lead to cost savings and more efficient use of resources. This guide aims to provide practical suggestions for integrating sustainable testing practices into your overall testing strategy.

{% include linkedHeading.html heading="Testing resource optimisation" level=3 %}
A testing resource refers to the hardware, software, storage, and infrastructure used to carry out testing activities. Optimising these resources means selecting the right tools for the appropriate duration, which not only reduces costs but also minimises environmental impact. To support this, it is useful to perform a test resource audit to identify any unused test environments or tools and decommission them accordingly. Additionally, powering off test environments when they are not in use, such as overnight or during weekends, can further contribute to energy savings and sustainability.

{% include linkedHeading.html heading="Create sustainable test environments" level=3 %}
Building sustainable test environments is a key step toward reducing the environmental impact of software testing. One effective approach is to use virtual test environments wherever possible. By allowing multiple virtual machines to share resources, you can avoid the need for multiple physical devices, each consuming its own energy and contributing to embodied carbon emissions. For example, platforms like BrowserStack enable the emulation of various operating systems, browsers, and mobile device specifications without relying on physical hardware. This also reduces the need to frequently upgrade to the latest device, generating less e-waste.

Another option is to host your test environments in the cloud. Due to its scalability and on-demand nature cloud infrastructure allows you to consume resources only when needed, which can reduce energy waste and improve cost efficiency. However, it's important to note that cloud hosting isn't automatically more sustainable.

The environmental impact of cloud infrastructure varies significantly depending on the provider’s sustainability practices, such as their use of renewable energy, data centre efficiency, and carbon offset initiatives. As a result, migrating from a well-optimised on-premise setup to a less efficient cloud provider could actually increase energy usage. Similarly, poor cloud resource management, such as leaving environments running unnecessarily or over-provisioning, can quickly undermine any potential sustainability gains.

Therefore, to determine whether moving your test environments to the cloud is the more sustainable option, it's essential to assess your current infrastructure and carefully evaluate the sustainability credentials of the provider you’re considering.

It’s also important to consider the [carbon intensity](/resources/glossary#carbon-intensity) of the energy grid powering your test environments. Carbon intensity varies depending on the energy sources used to generate electricity. Hosting your environments in regions that rely heavily on renewable energy, or scheduling test execution during times when the grid is powered by greener sources, can significantly reduce emissions. However, the concept of carbon-aware computing is complex and not without controversy. There is ongoing debate about whether it consistently delivers environmental benefits or introduces unintended consequences. An interesting discussion on this topic can be found here: [The problems with carbon-aware software that everyone’s ignoring.](https://github.com/climateaction-tech/grid-aware-software/blob/main/README.md)

{% include linkedHeading.html heading="Test case optimisation" level=3 %}
As software becomes increasingly complex, so too does the testing required to ensure its quality. Regularly reviewing your test cases and testing approach has always been important, but it can also contribute to a more sustainable testing process. One effective strategy is to periodically review your test cases to identify and remove any that are outdated or overlapping. This reduces the length of test runs, improves efficiency, and frees up valuable resources.

If you are running a suite of automated tests, it’s also worth addressing flaky tests - those that frequently fail without a clear cause. Tests that consistently return false negatives and are ultimately ignored waste both time and energy, so should be removed.

Being selective about which test cases are run and how often is another key consideration. As your test suite grows, it may no longer be practical to run every test after each commit or before every release. Techniques such as risk-based testing (RBT) can help prioritise test cases based on the likelihood and impact of potential failures. This ensures that resources are focused on detecting critical defects early, while also reducing the number of tests run and, consequently, energy consumption.

Further sustainability gains can be achieved by considering the energy usage of individual tests. In the research paper [Energy-Aware Software Testing](https://robertoverdecchia.github.io/papers/ICSE_2025.pdf), the authors propose prioritising tests not only by their defect-detection value but also by their energy consumption, creating a more sustainable test suite. 

Another useful approach is batch testing—running tests after a group of commits rather than after every single one. This can accelerate CI pipelines and reduce overall energy usage.

{% include linkedHeading.html heading="Choose sustainable testing tools" level=3 %}
When evaluating a new testing tool, it’s important to consider not only the standard criteria such as features, cost, and community support, but also the tool’s sustainability. One factor to assess is whether the supplier or development team publishes sustainability reports or highlights environmentally responsible development practices. If this information isn’t readily available, don’t hesitate to ask for it.

You should also look at the tool’s user community and the level of vendor support. A tool that is actively maintained and compatible with evolving technology stacks is less likely to be abandoned, which helps reduce software waste and the need for frequent replacements.

Another key consideration is whether the tool is hosted in the cloud or run locally. If it requires local installation, assess whether your current infrastructure can support it without upgrades, as new hardware can lead to increased energy consumption and contribute to e-waste.

Finally, consider whether the tool includes artificial intelligence (AI) features. While AI is becoming increasingly common in testing tools, it’s important to be aware of its environmental cost. The energy required to train and run AI models is significant and continues to grow rapidly, so it’s worth weighing the benefits of AI against its sustainability impact.

{% include linkedHeading.html heading="Test data generation and maintenance" level=3 %}
The execution of large numbers of tests often requires the generation and handling of large volumes of test data. Without proper management, this data can grow exponentially, leading to wasted storage and increased energy consumption. This includes both the data created to run tests, such as user logins or files to be uploaded, and the data generated during test execution, like log files, database entries, and downloaded content.

To make test data practices more sustainable, it’s important to perform regular data cleanup after test runs. For example, ensuring that test databases don’t accumulate unnecessary data can help prevent storage bloat. Implementing data lifecycle policies, such as archiving or deleting stale test data, also helps manage storage more efficiently.

Generating only the data you need, when you need it, is another effective strategy. Avoid creating large datasets in advance if they’re not required for immediate testing. Additionally, using synthetic data instead of full copies of production databases can significantly reduce storage demands. If synthetic data isn’t feasible, consider using a trimmed-down version of the production database to minimise resource usage while still maintaining test coverage.

{% include linkedHeading.html heading="Test Automation" level=3 %}
Test automation is often seen as a key enabler of efficient and scalable software delivery, but it also has the potential to support more sustainable testing practices. When used thoughtfully, automation can reduce resource consumption, improve quality, and streamline infrastructure usage. However, it’s important to balance these benefits with an awareness of the environmental trade-offs that automation can introduce.

Automated testing supports more efficient resource management. Tools like Docker and Kubernetes allow teams to spin up lightweight, isolated environments on demand, reducing the need for persistent infrastructure and helping optimise resource usage. These containerised environments can be scaled up or down as needed, further contributing to energy efficiency.

Automation also enables earlier bug detection, allowing teams to identify and resolve issues before they escalate. The earlier a defect is found in the development lifecycle, the lower the cost to fix it, not just in terms of time and effort, but also in energy and resource usage. By catching issues sooner, teams can avoid repeated cycles of debugging, retesting, and redeployment, which can be resource-intensive and contribute to unnecessary emissions. 

Additionally, automation reduces the reliance on resource-intensive manual testing. Manual testing often requires repeated setup and teardown of environments, and longer execution times. By automating repetitive and time-consuming testing activities, teams can significantly cut down on the energy and effort required to validate software quality.

However, while test automation offers many sustainability benefits, it’s important to recognise that it can also introduce new challenges. For example, instead of running 10 API calls or creating 10 new users, an automated suite might execute hundreds or even thousands of scenarios, often repeatedly and on every commit. This ease of repeatability can lead to excessive resource consumption and test data build up if not carefully managed.

To mitigate this, it’s essential to implement complementary sustainability strategies. For instance, avoid running every test on every commit by using test selection techniques such as risk-based testing. Schedule resource-intensive tests during periods of lower carbon intensity, when the energy grid is powered by more renewable sources. Additionally, implement cleanup activities to remove unnecessary test artifacts and stale data after test runs. These practices help ensure that the efficiency gained through automation doesn’t come at the cost of increased environmental impact.

{% include linkedHeading.html heading="Reduce software waste" level=3 %}
Developing software is a resource-intensive process that consumes significant energy and generates considerable carbon emissions. Just as it is important to prolong the life of hardware to reduce e-waste, we should adopt similar principles to reduce software waste from failed projects, rapid obsolescence, and unnecessary rework.

When a software project is cancelled before release or quickly abandoned after launch due to misalignment with user needs, shifting priorities, or technical shortcomings, all the emissions generated during its development are effectively wasted. This includes the energy used to power development environments, run tests, and maintain infrastructure over months or even years. While testing can’t guarantee success, it plays a vital role in identifying risks early and improving product quality, helping reduce the likelihood of such failures.

Software that becomes incompatible with new operating systems, browsers, or hardware shortly after release also contributes to waste. If a product requires a complete rewrite or forces customers to upgrade simply to maintain compatibility, the original development effort and its associated emissions are largely wasted. To avoid this, software should be designed with adaptability in mind, allowing it to evolve alongside changing technologies. 

Software that is released with a high number of bugs or performance issues often requires frequent patches and updates. Each of these cycles consumes additional energy - from developer time and test execution to deployment and infrastructure usage. By investing in thorough testing and quality assurance upfront, teams can reduce the need for constant rework, lowering both emissions and long-term maintenance costs.

{% include linkedHeading.html heading="Summary of strategies to improve Testing Sustainability" level=2 %}

-	Audit your testing ecosystem, including hardware, software, and infrastructure and decommission any environments or tools no longer in use.
-	Power off test environments when not in use.
-	Use virtual machines and emulators to reduce reliance on physical devices and lower embodied carbon emissions.
-	Assess whether moving your test environments to the cloud is more sustainable then hosting them on premises.
-	Regularly review your test cases to remove any that are outdated or overlapping.
-	Use risk-based testing techniques to prioritise critical test cases and avoid running the full suite unnecessarily.
-	Consider the carbon intensity of your test environments. Aim to host them in regions or schedule tests during times when renewable energy usage is highest.
-	Include sustainability as a criterion when evaluating a testing tool.
-	Evaluate whether AI features in a testing tool are truly necessary, as they can significantly increase energy consumption.
-	Perform regular data cleanup to prevent the build-up of test execution artifacts and reduce storage waste.
-	Generate only the test data you need and use synthetic or trimmed-down datasets to reduce storage and energy use.
-	Use automated testing to catch defects early and reduce the duration of resource intensive manual activities.

## Further Reading

[Green Testing: Building Sustainable Software Through Eco-Conscious Practices](https://genqe.ai/ai-blogs/2025/03/08/green-testing-building-sustainable-software-through-eco-conscious-practices/)  
[Understanding sustainable software testing](https://www.bcs.org/articles-opinion-and-research/understanding-sustainable-software-testing/)  
[Sustainability in Software Testing: Embracing Greener Practices for a Better Future](https://www.experimentus.com/blog/sustainability-in-software-testing-embracing-green-practices-for-a-better-future/)  
[An Inconvenient Truth in Software Engineering? The Environmental Impact of Testing Open Source Java Projects](https://dl.acm.org/doi/pdf/10.1145/3644032.3644461)  
[Uncovering the Environmental Impact of Software Life Cycle](https://inria.hal.science/hal-04082263/file/ict4s-23.pdf)  
[Implementing Automated Testing Frameworks in CI/CD Pipelines: Improving Code Quality and Reducing Time to Market](https://www.researchgate.net/profile/Nikhil-Yogesh-Joshi/publication/385475585_Implementing_Automated_Testing_Frameworks_in_CICD_Pipelines_Improving_Code_Quality_and_Reducing_Time_to_Market/links/6725a2b8ecbbde716b525504/Implementing-Automated-Testing-Frameworks-in-CI-CD-Pipelines-Improving-Code-Quality-and-Reducing-Time-to-Market.pdf)