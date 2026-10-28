# MENA locale resources

Assume this directory layout for the extension:

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

When `CSInterface.initResourceBundle()` is called, CEP uses the app UI locale reported by PP, not the app locale, to load localized resources. If localized resources are missing for an app UI locale such as `fr_MA`, CEP falls back to `messages.properties` under the `locale` folder.

For app UI locale handling under the MENA feature, point products convert `en_AE/en_IL` to `en_US` and `fr_MA` to `fr_FR`. Therefore, `en_AE` and `en_IL` point-product builds use `en_US` resources when available, and a `fr_MA` build uses `fr_FR` resources when available. Extension teams should provide `en_US` resources for `en_AE/en_IL` and `fr_FR` resources for `fr_MA`.
