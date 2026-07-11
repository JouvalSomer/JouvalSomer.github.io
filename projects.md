---
layout: page
title: Projects
subtitle: Selected research and software projects
permalink: /projects/
---

<div class="project-grid">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
    <div class="card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      {% if project.stack %}
      <div class="stack">
        {% for tech in project.stack %}<span>{{ tech }}</span>{% endfor %}
      </div>
      {% endif %}
      {% if project.link %}
      <p class="project-links" style="margin-top: 12px;">
        <a href="{{ project.link }}" target="_blank" rel="noopener">{{ project.link_label | default: "Learn more" }} →</a>
      </p>
      {% endif %}
    </div>
  {% endfor %}
</div>
