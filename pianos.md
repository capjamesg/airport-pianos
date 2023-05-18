---
layout: main.njk
title: Find an Airport Piano
---

# {{title}} 🎹

This page lists pianos that have been confirmed to be in airports around the world.

The `confirmed` date refers to the last time the piano was seen by a community member.

For more airport pianos, check out [pianos.pub](https://pianos.pub) and search for your local airport.

Don't see your piano here? Submit a request for a piano; we'll tally these up to guage interest.

## Pianos

<ul>
    {% for piano in collections.airports %}
    <li>{{ piano.name }}</li>
    {% endfor %}
</ul>