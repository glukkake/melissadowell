![A ONE Tech data-visualization dashboard on the C2M platform](/projects/onetech/dashboard.png)

## Context

ONE Tech (now MicroAI) was founded as a Plasma / Systena joint venture. Plasma originally created the C2M platform as an enterprise-grade, code-free workflow automation platform. I started at ONE Tech to build their IoT platform proof of concept, which took the data connectivity, visualization and automations into a single mobile app.

## What we were solving for

The mobile app was envisioned as a way to pull a user's scattered IoT feeds into a single timeline; one place to see everything, instead of a constellation of apps in your phone. We focused on consumer products first to create a user-friendly application, rather than something built by engineers for engineers, and allowed us to study a variety of devices trying to send different data types.

## Where we started

**The interesting problems were all in the noise and the setup:**

- **Alert collapsing.** A chatty sensor can fire dozens of times an hour. Past a threshold, I collapsed repeat alerts into one summarized event so the timeline stayed readable instead of burying the one alert that mattered.
- **Telling device types apart.** A door sensor, a thermostat, and a camera don't mean the same thing at a glance; the timeline had to make type legible instantly.
- **Onboarding mismatched hardware.** Every device class had different setup requirements — MAC addresses, pairing steps, credentials. The hard part was one onboarding flow that could absorb that variety without becoming a decision tree the user got lost in.

## Where I ended up

**The MicroAI pivot**

While we built the aggregator, the company developed MicroAI, an edge AI that runs directly on a device's microcontroller. That changed the product, and the design problem with it.

**Before:** integrate with many pieces of hardware, each different.

**After:** the customer puts our edge AI on their microcontroller and sends us the data feed to monitor — fewer integrations, but a much wider range of who and what.

So when designing onboarding and monitoring again, this time it spanned everything from a bare dev board in a hobbyist's hands to an entire fleet of machinery. The interface had to make sense whether you were monitoring one component or a thousand.

Both came down to **absorbing hardware variety without pushing that complexity onto the user.** Our most successful client project involved creating an overview of a manufacturing plant workfloor, monitoring mechanical and human workers to transform factory floor performance and reduce unplanned downtime.
