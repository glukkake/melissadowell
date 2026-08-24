---
repo: "https://github.com/melisdowell"
---

## Context

Turngate was a seed-stage cybersecurity startup. I was the founding designer, starting from zero working on pre-product with the owners and CTO, following through the initial launch, a number of pivots, and to the wind down in 2026. I was the only designer on an 8-12 person team, for three years. My scope spanned the visual language, design system and component library, user and industry research, and front-end contributions.

## The problem

When something goes wrong across a company's cloud and SaaS tools, finding out what actually happened means digging through audit logs for a dozen different services, each logging in its own format, with none written to be read by a person. It's slow, specialized, and difficult for anyone who hasn't spent years doing it.

Turngate's bet was that investigation shouldn't require that expertise. The whole product came down to one design problem: take a dozen inconsistent sources of audit data and make them legible as a single, followable story of what happened.

## What I did

Three years of work has a wide scope. Here's some highlights:

- **Built the design language from scratch.** After picking fonts and colors, we started using Material UI as a base to get started. This gave the devs a library to begin with, while I could focus on custom components.

- **The Heat Map as our focal point.** When discussing the best initial visualization for the ingestion and display of individual logs by actors, data sources, and locations, we decided to create a heat map across a variable time series. We utilized dots of variable sizes and colors to give a multimodal feel that kept accessibility in mind; limited colors to avoid falling into ranges that users with visual disabilities might have difficulties seeing; limited sizes to make it easier to differentiate that one dot is larger or smaller than the next. The color range eventually expanded to allow users to understand if the small dot was on the lower range of its encompassed data points, or on the higher end and about to jump sizes. This change was important as we started importing logs and saw the scope of fitting 1000s of events into a single time period that fit on the screen.

- **Designed the whole dang thing.** Workflows included an integration wizard for a wide scope of integrations for identity, productivity and AI cloud applications, alerting and alert details, user and role management for each tenant, data visualizations into the health of each data source, and eventually AI monitoring. As we began to include AI into our tech stack itself, I researched and piloted with the dev team MCP connections between Figma, our repository and our AI agent to shorten design-to-code handoffs, and was even able to personally ship a handful of merged pull requests into the React codebase.

<figure>
  <video src="/projects/turngate/how-it-works-1.mp4" poster="/projects/turngate/how-it-works-1-poster.jpg" autoplay muted loop playsinline controls></video>
  <figcaption>The heat map in action — narrowing an investigation to a single actor and data source.</figcaption>
</figure>

## The final touches

In the last year, the product expanded into AI-agent observability. The goal was to allow our users to monitor what autonomous agents were actually doing: session duration, token use, cost, and the full prompt and tool-call history with protections to hide sensitive data from roles that did not require that level of permissions. It's the same problem as the audit log work - making opaque activity legible and understandable - but with a focus on robot actors tied alongside the human actors.

<figure>
  <video src="/projects/turngate/how-it-works-2.mp4" poster="/projects/turngate/how-it-works-2-poster.jpg" autoplay muted loop playsinline controls></video>
  <figcaption>Reading activity across identities, data sources, and a time range at a glance.</figcaption>
</figure>
