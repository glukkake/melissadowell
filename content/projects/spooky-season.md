---
repo: "https://github.com/glukkake/spooky-season-event-aggregator"
links:
  - label: "Make your own copy"
    url: "https://docs.google.com/spreadsheets/d/12RIoAboIik_IPqx2G_PwnpzshwXVzqeGuJcN_Z97ZuA/copy"
---

![The public page: Halloween events grouped by day, with fliers, times, prices and color-coded type tags](/projects/spooky-season/page-desktop.png)

## Context

Every October I keep a spreadsheet of Halloween-season events (dance parties, burlesque, workshops, horror movie nights) and share it with friends. It always picks up traction. But building it meant saving dozens of Instagram posts, then retyping every flier into a sheet by hand.

## The problem

Almost all of these events are announced on Instagram, as a flier image with the details baked into the picture. Instagram has no way to export a saved folder. My account is private, so nothing can read it from outside. And once the list is shared, people want to add their own finds, which usually means someone accidentally deleting rows in an open spreadsheet.

## What I built

A small app that runs entirely inside Google Sheets and Apps Script, with no server and no hosting bill:

- **Share a post, get a listing.** From my phone, I share any Instagram or Facebook post, web page or flier screenshot to an iPhone Shortcut. Claude reads the flier and fills in the name, date, time, venue, price, a one-line description and the type of event.
- **A page people actually use.** The sheet feeds a public page: fliers grouped by day, color-coded type tags you can click to filter, search, a date picker, and a 🎃 Spooky only / This Season / All events toggle.
- **Anyone can add events** through a form on the page, without a Google account and without being able to edit or delete anything. Duplicates are caught automatically.
- **Invite-only mode** for when a list spreads further than intended. One menu click locks the page behind a private invite link, which can be replaced any time.

<figure>
  <img src="/projects/spooky-season/page-phone.png" alt="The page on a phone, with full-width flier cards showing time, venue, price and the account that posted it" style="max-width: 320px">
  <figcaption>Designed phone-first, since that's where people check what's on tonight.</figcaption>
</figure>

## Design decisions

- **Ordered by "get there by."** Within a day, events that end soonest come first, so people can see what to hit first and what they can still catch later.
- **Late nights count.** A 10pm–2am party stays listed until 2am, in case someone's checking the address at 1am.
- **Price up front.** Every card shows the ticket price or Free, and calls out when no one is turned away for lack of funds.
- **Credit where it's due.** Each card links back to the venue or promoter who posted it, with a small Instagram, Facebook or web icon. People adding events can opt out of credit.
- **Accessible by default.** Real buttons and labels, keyboard and screen reader support, readable contrast on a dark theme, and respect for reduced motion.
- **Built for strangers on the internet.** Uploads must be real images, text can't become spreadsheet formulas, owner-only actions are locked down, and the public form is rate limited so spam can't run up the AI bill.

## How I built it

I paired with Claude Code over a day: pulling my saved Instagram folder into the sheet, designing the page in the browser, and iterating on the details as friends' needs came up. Claude also does the flier reading in production, returning structured event data for each post.

## Make your own

It's open source and works for any city and season. [Make a copy of the template](https://docs.google.com/spreadsheets/d/12RIoAboIik_IPqx2G_PwnpzshwXVzqeGuJcN_Z97ZuA/copy), follow the Start here tab, and you'll have your own list in about ten minutes. Ideas and improvements are welcome on [GitHub](https://github.com/glukkake/spooky-season-event-aggregator).
