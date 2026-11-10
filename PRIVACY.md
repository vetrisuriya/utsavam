# Privacy note

Utsavam is built so that there is almost nothing to collect.

## What happens to your card

The names, message, date, time, venue and other details you enter are encoded into the link you generate. They are not written to a database. When someone opens the link, the page decodes the payload in the browser and renders the card.

This means:

- We cannot read, sell or lose a card from a server database.
- Anyone who has the link can decode it. Treat a card link like a postcard.
- Links do not expire on their own, and deleting your copy does not revoke a link someone else saved.
- Do not put financial details, identity numbers or private information you would not share into a card.

## What we do not collect

- No accounts, email addresses or phone numbers.
- No advertising or cross-site tracking cookies.
- No stored card records.
- No sale or sharing of personal data with advertisers.

## Hosting logs

The hosted site runs on Vercel. Like most hosts, Vercel processes standard request metadata — IP address, user agent, timestamp and requested URL — to serve the site, prevent abuse and produce aggregate metrics. If a card link is requested, its encoded payload is part of that URL and may appear in hosting logs. Utsavam does not use those logs to build profiles.

## Your choices

Because cards are not stored on a server, there is no account or record for us to delete. To stop a link from spreading, stop sharing it; anyone who saved the URL can still open it. To report harmful content hosted at this domain, use the [issue tracker](https://github.com/vetrisuriya/utsavam/issues).

## Contact

Questions about privacy can be raised on the issue tracker. The project is maintained by [Vetri Suriya](https://vetrisuriya.in/).

The user-facing version of this note is at `/privacy` on the website.
