---
layout: default
title: Glossary
permalink: /resources/glossary
published: true
redirect_from:
    - /glossary
---

# Glossary

{% assign items = site.glossary %}

{% for item in items %}
  {% include linkedHeading.html heading=item.title level=2 %}
  {{ item.content | remove: '<p>' | remove: '</p>' }}
  {% if item.link and item.linktext%}<small>[{{ item.linktext }}<svg aria-hidden="true" class="inline size-4 fill-black ml-1"><use href="./assets/images/icons.svg#open-in-new"></use></svg>]({{ item.link }}){:target="_blank"}</small>{% endif %}
{% endfor %}