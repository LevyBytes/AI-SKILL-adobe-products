# Submit Review Monetize (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## FAQs — How can I fix a server error encountered on the Exchange portal?

_Answer:_ Clear cache and cookies before signing in to the Exchange Developer Portal, including at least the adobe.com cookies. If the problem continues, follow this sequence:

1. Remove the browser cache and cookies.

2. Sign out of the Exchange Portal, then sign back in.

3. Use the process below to capture browser network logs and console logs while reproducing the publishing issue.
   ** Browser network and console log capture:**

Launch Chrome and reproduce the error.

     Use Cmd+Option+I on Mac or F12 on Windows to open Chrome Developer Tools.
      Leave Developer Tools open while you inspect the error.

     Open the Network tab, then use the Name column to choose the Name tied to the server error.

From Headers, send the displayed values (Request URL, Response Header, Request Headers etc.)

     Next, open the Console tab and send any logs that report errors.

        Use this article to generate a HAR file: https://support.zendesk.com/hc/en-us/articles/204410413-Generating-a-HAR-file-for-troubleshooting

     Send both the network logs and HAR file through Google Drive or Dropbox.

When possible, include a video too, either as a shared link or in that Google Drive or Dropbox folder.

5. Send the logs described above to ccintrev@adobe.com, including the HAR file and a screenshot of network/console logs. Logs, with optional video, help the Adobe Engineering team resolve the issue faster.

## FAQs — How can I troubleshoot the following errors on the Exchange portal?

_- Plugin manifest has an invalid host app min version_

_- Ensure that the Adobe product minimum version is in valid x.y format._

_- Ensure that the Adobe product maximum version is in valid x.y format._

### UXP Manifest Notes

Because of an Exchange portal issue, specify `host.minVersion` and `host.maxVersion` in your UXP plugin manifest using a.b format. Support for a.b.c format is planned, but the timing was unconfirmed for later in 2023. As an example, your `manifest.json` might contain:

```
"host": {
        "app": "PS",
        "minVersion": "22.5.7"
    },
```

Before Marketplace submission, change `manifest.json` so minVersion uses a.b. format:

```
"host": {
        "app": "PS",
        "minVersion": "22.5"
    },
```

### CEP Manifest Notes

As of December, 2022, the Exchange portal rejects "99.9" as a maximum version number in extension manifests. In the past, ZXP packages submitted to the exchange could use 99.9 as the maximum product version in the manifest. For example, an extension that supports Illustrator version 25 and later may have used this line in the manifest file:

```

```

To show that there is no maximum version, include only the minimum version in the manifest, for example:

```

```

More manifest details are in the [manifest documentation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_11`.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#extension-manifest). Also consult the [chart of product version numbers](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_11`.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).
