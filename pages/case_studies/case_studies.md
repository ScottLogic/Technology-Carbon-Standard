---
layout: default
title: Case Studies
permalink: /case-studies
---

{% assign caseStudies = site.data.caseStudies %}

# Case Studies

{% for caseStudy in caseStudies %}
  <h2><a href="{{ caseStudy.link }}">{{ caseStudy.name }}</a></h2>
  {{ caseStudy.description }}

  [Go to Case Study]({{ caseStudy.link }})

  ---
{% endfor %}