---
layout: caseStudies
title: Green Web Foundation
permalink: /case-studies/green-web-foundation/appendix
caseStudy: gwf
---

# Appendix

Here's a few things we worked on in this project that we wanted to write about, but that didn't necessarily feel like the right fit in the other sections. We've included them here.

- What's contributed to misconception that digital technologies are green by default?
- [Setting up the Green Metrics Tools](#setting-up-the-Green-Metrics-Tools)

{: #green-by-default}
## What's contributed to misconception that digital technologies are green by default?

There's still a prevalent misconception that the digital technologies sector is green by default, and there's no carbon impact associated with using digital tools. This has probably stemmed from two places.

Firstly, the estimated emissions from a single digital transaction end up being very small. Digital transactions are things like sending an email, performing an API call, loading a web page, saving a file to the cloud etc. Let's use emails as an example. Mike Berners-Lee estimated that a single email could range between 0.03g and 26g in his book ‘How Bad are Bananas?: The Carbon Footprint of Everything’ (2020). Whereas an average beef steak (200g pre-cooked weight) is estimated to be 20kg. Your email seems tiny by comparison. But when we factor in how many of these transactions happen every day, the impact scales up quickly. According to Statista, more than 306 billion emails were sent in 2021. The problem is that for most of us, we don't have a sense of that scale. So we're likely to dismiss it as a concern. 

Secondly, the digital technologies sector is estimated to be significantly smaller than other sectors. [Agriculture is around 12%](https://www.statista.com/topics/10348/agriculture-emissions-worldwide/) of global greenhouse gas emissions and [transport around 33%](https://www.iea.org/energy-system/transport). Whereas the digital sector is estimated to be responsible for between [2.1 and 3.9%](https://www.sciencedaily.com/releases/2021/09/210910121715.htm). It is however estimated to grow rapidly as society adopts more AI. Even so, if you're looking for a starting point when channelling your emissions reduction efforts, it's likely most organisations have bigger fish to fry.

So, the myth that using digital gives you a free pass has been somewhat understandable. 

{: #setting-up-the-Green-Metrics-Tools}
## Setting up the Green Metrics Tools

While the API is currently well optimised through a variety of techniques to reduce its carbon emissions, it is important to apply green software principals such as making sure  the code is energy efficient. To do this, we first need a way to measure the codebase and monitor that future changes don't negatively impact the carbon emissions.

To do this, we set up the [Green Metrics Tool](https://www.green-coding.io/projects/green-metrics-tool/) from [Green Code Berlin](https://www.green-coding.io/).

Following the high level estimates, one of the areas of focus chosen was for the Greencheck API calls. This single endpoint is responsible for the vast majority of all traffic to Green Web Foundation's software platform.

The Green Metrics Tool (GMT) measures a variety of operational data for a platform. As it uses a lab environment, it can't tell you a platform's usage in your production environment - it is not a monitor as such. It has more in common with a load testing tool and is best used in a similar fashion. The measurement process follows this pattern:

1. Run the Green Metrics Tool to get a baseline for your application's current carbon performance.
2. Make changes to your system under test.
3. Run the Green Metrics Tool again.
4. Compare the output to your baseline to see the carbon impact your changes have had.

When examining the output of the GMT, bear in mind that some of the statistics produced are based on measurements and others are estimates derived from models. Both are valuable, but your mileage may vary.

## Using the Green Metrics Tool

The GMT works by running the different servers in your platform in Docker containers. You then generate traffic within the docker environment for the tool to measure and it generates reports for you to analyse.

1. _Dockerise your environment_: If it is not already, you will need to get your environment running in Docker, using docker compose.
2. _Create a usage scenario_: Green Code Berlin uses a fork of the docker compose YML format. It uses the same format, and supports many commands that are present in docker compose. It also extends it with some custom sections to drive the test automation required to run the time.
3. _Write or adapt automated tests_: There are two types of tests. Validation tests that confirm the system you are testing is working as intended. These tests may call an endpoint or drive a website with a headless browser. They should then validate that the returned output is what is expected. Unit tests and automated UI tests are great for this. The second kind of test is a load or stress test. You want to generate a similar, or at least representative, load of traffic to your production site to see how it behaves under stress, from a carbon usage perspective. It should give you enough raw data to get a realistic picture of your platform's performance. JMeter and k6 are good examples.
4. _Add test containers_: Create docker containers for your test instances. These could be load test containers (such as k6) or headless browsers such as puppeteer. The usage scenario file will drive these test containers to generate traffic to the rest of the platform in the dockerised test environment.
5. _Test the implementation_: Run the Green Metrics Tool locally to test if your environment works correctly and examine the output it generates.
6. _Submission_: Submit your GitHub repo to the Green Metrics platform to see your stats in a more realistic environment.

With this set up done, you can start the iterative cycle described above, using this first run as a baseline.

In the case of the GreenCheck API, Docker was already in use, and while there were Docker Files, there was no docker-compose.yml file. We created a docker-compose.yml and then, once that was working, set up a usage-scenario.yml file which included our test containers. The extension that Green Code Berlin have added is a block to instruct the Green Metrics Tool on how to drive the test containers so that they call the rest of the platform to generate the usage data.

## Challenges

The requirement to use Docker can make this a high bar for entry if you are running even a moderately complex platform and are not using Docker already. Dockerising an existing platform can be a long and involved project in and of itself. There is also some complexity around interacting with the containers to get your files copied onto them and the applications building and running.

A further issue that we occasionally had was the subset of commands that are supported by both the usage-scenario file and the docker-compose file. Occasionally we would use a command, that was fine in docker compose, but unsupported by the Green Metrics Tool.

Personally, I found the Green Metrics tool hard to run on Windows, but this is partly because I can't use Docker Desktop due to licensing reasons and I wasn't able to get Rancher (an open source alternative) working properly in its place. I've also heard that using WSL, it can be hard to capture RAPL data properly for CPU statistics. However, if you can get it up and running this shouldn't be a problem as you only want to debug locally. You really want a proper server environment (set up yourself using or using the platform provided by Green code Berlin) for measurement.

The learning curve for the tool can be a little steep, depending on your starting point. A good familiarity with Docker and interacting with Docker containers would lessen this considerably.

## Positives

The [documentation](https://docs.green-coding.io/) for the Green Metrics Tool is excellent and the team at Green Code Berlin are very helpful and responsive.

The dashboard the tool provides is also excellent and provides very rich data that you can drill down into.

Development of the tool and the methodologies it uses to calculate the measurements and estimations is well researched and open. This gives users a very high sense of confidence when using the tool.

---

[Next - Back to Introduction](/case-studies/green-web-foundation/overview)

---


