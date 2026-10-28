# Migration from CEP 10 to CEP 11

1. Update the Node Modules: CEP 11 runs with NodeJS 15.9.0 and Node-WebKit 0.50.1. Extensions originally built with an older NodeJS release may not load in CEP 11 if their node modules no longer match the runtime. Update those modules by using NodeJS version 15.9.0 or newer.

2. Content-Security-Policy Changes: CEP 11.1 includes CEF #88, where content-security-policy validation is applied more rigorously. Extensions embedding third-party sites can stop working when the embedded site declares a content-security-policy directive that disallows framing by other sites. See [Known issues](../cep-12-known-issues-faq/reference-index.md) for several affected cases and temporary mitigation options.

3. Cookies: In #CEF v88, a cookie without an explicit SameSite attribute is treated as SameSite=Lax. That default blocks the cookie in cross-site contexts. When the application requires cross-site cookies, set SameSite=None. If the component omits the `SameSite` attribute, the cookie falls back to `SameSite=Lax`, preventing it from being set cross-site.

   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

   Note: CEF's legacy SameSite policy setting is documented at https://www.chromium.org/administrators/policy-list-3/cookie-legacy-samesite-policies. Include this manifest option: `--disable-features=SameSiteByDefaultCookies`. Example:

These are version-specific parameter excerpts under CEFCommandLine.

```xml
<Parameter>--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure,NetworkService</Parameter>
<Parameter>--disable-site-isolation-trials</Parameter>
```

   Note: include `NetworkService` when backward compatibility with CEP 10 is required.

4. CORS checks: CEP 11 security updates result in many more requests being stopped by CORS validation. An extension can run into this when it reaches an endpoint missing the Access-Control-Allow-Origin header. Confirm that every endpoint being accessed returns Access-Control-Allow-Origin headers with the correct values.

Also see [Known issues](../cep-12-known-issues-faq/reference-index.md) for CEP 11.
