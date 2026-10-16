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

After `CSInterface.initResourceBundle()` runs, CEP selects localized assets by using the app UI locale reported by PP, not the app locale. When that UI locale has no matching localized resource, such as `fr_MA`, CEP falls back to `messages.properties` under the `locale` folder.

For the MENA feature, point products translate app UI locales from `en_AE/en_IL` to `en_US` and from `fr_MA` to `fr_FR`. As a result, `en_AE` and `en_IL` point-product builds use `en_US` resources when those resources exist, while `fr_MA` builds use `fr_FR` resources when available. Extension teams therefore need to ship an `en_US` resource set for `en_AE/en_IL`, plus a `fr_FR` resource set for `fr_MA`.
