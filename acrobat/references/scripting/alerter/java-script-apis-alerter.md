# JavaScript APIs — Alerter

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Under assorted circumstances — a media file that cannot be found, for instance — the Acrobat multimedia plug-in shows error alerts. Through JavaScript, those alerts can be customized for a whole document or for one media player on its own.

Whenever an alert arises, the internal app.media.alert function runs with parameters describing it. To deal with the alert, app.media.alert hunts for alerter objects and invokes their dispatch methods in the sequence below:

```javascript
args.alerter
doc.media.alerter
doc.media.stockAlerter
```

For alerts tied to one specific player, pass an alerter object in args.alerter when calling app.media.createPlayer or app.media.openPlayer.

For alerts spanning a whole document, assign an alerter object to doc.media.alerter.

Setting args.alerter or doc.media.alerter to null switches off every alert for that player or document.

The fallback alerts that kick in when no custom alerter is given come from doc.media.stockAlerter. app.media.alert sets this property up on its own. As a rule, developer code has no reason to touch doc.media.stockAlerter.
