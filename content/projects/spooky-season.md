---
repo: "https://github.com/glukkake/spooky-season-event-aggregator"
links:
  - label: "Make your own copy"
    url: "https://docs.google.com/spreadsheets/d/12RIoAboIik_IPqx2G_PwnpzshwXVzqeGuJcN_Z97ZuA/copy"
---

![The public page: Halloween events grouped by day, with fliers, times, prices and color-coded type tags](/projects/spooky-season/page-desktop.png)

## Context

Last October I made a Google spreadsheet of Halloween-season happenings in my city and shared it with friends for better party planning together. Also, Halloween is just my favourite season and the one where I really push myself to leave the house and attend any spooky happenings.

This year I've been learning to utilize Claude Code better in making silly little applications for my personal use, and figured I'd give the Halloween Spreadsheet a makeover. Spreadsheets are a little tedious to read, difficult to filter for casual users and a menace to parse through on mobile devices.

## How it works

I share an Instagram post, Facebook event or flier screenshot from my phone or computer, and Claude reads the flier: name, date, time, venue, price and what kind of event it is. It all lands in a private Google Sheet, and a page shows the list to everyone else:

- Flier images and event info load in a card view with color-coded tags you can click to filter (dance party, workshop, burlesque, film…) and listed as a Spooky event (specifically Halloween-themed) vs Seasonal as just an event that's occurring in October.
- Sorted by day, ordered so whatever event ends soonest will come first, so you can plan a night of event-hopping.
- Late-night parties stay listed until they actually end, for anyone searching for an address at 1am.
- Every card shows the price, notes NTAFLOF events, and links back to the venue or promoter who posted it.
- Friends can add events from the page, and if the list gets out of hand I can lock it to an invite link within the friend group only.

<figure>
  <img src="/projects/spooky-season/page-phone.png" alt="The page on a phone, with full-width flier cards, filters, a refresh line and a round add button" style="max-width: 320px">
  <figcaption>Built phone-first, since that is where everyone checks what is on tonight.</figcaption>
</figure>

## Under the hood

- **Accessible by default.** Real buttons and labels, keyboard and screen reader support, readable contrast on a dark theme, and respect for reduced motion.
- **Built for strangers on the internet.** Uploads must be real images, text can't become spreadsheet formulas, owner-only actions are locked down, and the public form is rate limited so spam can't run up the AI bill. No tracking, and no third-party scripts or fonts.
- **Honest about the AI.** The page footer notes that event details are read from fliers by AI, so people double-check the original post.

## Make your own

It runs entirely in your own Google account (no server, no hosting), and works for any city or season. It's currently built to run with your own AI agent, so it may incur costs with that.

If you want to [make a copy of the template](https://docs.google.com/spreadsheets/d/12RIoAboIik_IPqx2G_PwnpzshwXVzqeGuJcN_Z97ZuA/copy), follow the Start here tab, and you will have your own list in about ten minutes.

I love collaboration, so I made it open source and you can add ideas and improvements on [GitHub](https://github.com/glukkake/spooky-season-event-aggregator).
