---
layout: page
title: News
subtitle: Academic updates, talks, and milestones
permalink: /news/
---

<div class="card">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% for item in all_news %}
    <div class="news-item">
      <div class="news-date">{{ item.date | date: "%b %-d, %Y" }}</div>
      <div class="news-body">{{ item.content | markdownify }}</div>
    </div>
  {% endfor %}
</div>
