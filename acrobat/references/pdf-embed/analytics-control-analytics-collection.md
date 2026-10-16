# Analytics — Control analytics collection

Where your site is already hooked into an analytics tool — Adobe Analytics or Google Analytics — a few extra setup steps let you gather PDF analytics. For the full procedure, check the [Adobe Analytics](configure-adobe-analytics.md) and [Google Analytics](analytics-google-analytics/reference-index.md) sections.

Whether PDF analytics get collected in those tools comes down to the `sendAutoPDFAnalytics` configuration. It defaults to _true_. Flip it to _false_ whenever you want PDF analytics collection switched off.

```javascript
function createViewWithoutAutomaticAnalytics(clientId, divId) {
    return new AdobeDC.View({ clientId, divId, sendAutoPDFAnalytics: false });
}
```

Load the PDF Embed SDK and call this function after adobe_dc_view_sdk.ready. The supplied divId must identify an existing container; clientId is your registered Embed API client ID.
