# MENA locale resources

Assume the extension is arranged like this:

```text
Extension/
         |-csxs/
         |-locale/                                <-- Directory for localized resources
                 |-- messages.properties          <-- The one to fallback to if no localized resources is provided for a locale
                 |-- fr_FR/
                 |        |- messages.properties
                 |-- en_GB/
                          |- messages.properties
```

When `CSInterface.initResourceBundle()` runs, CEP reads the app UI locale reported by PP, rather than the app locale, to find localized resources. If resources for an app UI locale such as `fr_MA` are missing, CEP falls back to the `messages.properties` file under the `locale` folder.

For app UI locale handling, point products using the MENA feature map `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. As a result, an `en_AE` or `en_IL` point-product build uses `en_US` resources when they are present, and a `fr_MA` build uses `fr_FR` resources when they are available. Extension teams should supply `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.
