---
layout: page
title: News
permalink: /news/
---

{% assign all_news = site.news | sort: 'date' | reverse %}
{% for item in all_news %}
  <div class="news-item">
    <div class="news-date">{{ item.date | date: "%-d %b %Y" }}</div>
    <div class="news-body">{{ item.content | markdownify }}</div>
  </div>
{% endfor %}
