---
title: "Design Pattern에 관련된 포스팅"
layout: archive
permalink: categories/design_pattern
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories['Design Pattern']%}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}