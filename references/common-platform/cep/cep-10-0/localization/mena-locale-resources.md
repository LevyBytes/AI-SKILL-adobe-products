# MENA locale resources

Sample directory tree:

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

When `CSInterface.initResourceBundle()` runs, CEP loads localized resources using the app UI locale reported by PP, not the app locale. If an app UI locale such as `fr_MA` has no localized resources, CEP falls back to `messages.properties` under the `locale` folder.

For app UI locale handling under the MENA feature, point products route `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. As a result, available `en_US` resources serve `en_AE` and `en_IL` builds, while available `fr_FR` resources serve a `fr_MA` build. Extension teams should supply `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.
