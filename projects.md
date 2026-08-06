---
layout: page
title: Projects
permalink: /projects/
---

{% assign sorted_projects = site.projects | sort: 'order' %}
{% for project in sorted_projects %}
  <div class="project-item">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    {% if project.stack %}
    <p class="stack">{{ project.stack | join: ", " }}</p>
    {% endif %}
    {% if project.link %}
    <p class="project-links">
      <a href="{{ project.link }}" target="_blank" rel="noopener">{{ project.link_label | default: "Project page" }}</a>
    </p>
    {% endif %}
  </div>
{% endfor %}
