# CEP 10 to CEP 11 migration

1. Update the Node Modules: CEP 11 uses NodeJS 15.9.0 and Node-WebKit 0.50.1. Extensions built with older NodeJS versions may fail to load in CEP 11 because their node modules are incompatible. In those cases, update the node modules with NodeJS version 15.9.0 or higher.

2. Content-Security-Policy Changes: CEP 11.1 includes CEF #88, and content-security-policy validation is now applied more strictly. Extensions that frame third-party sites can stop working when the embedded site sets a content-security-policy directive that forbids other sites from framing it. See [Known issues](../cep-11-known-issues-faq/reference-index.md) for affected cases and possible short-term workarounds.

3. Cookies: In #CEF v88, a cookie with no SameSite attribute is treated as SameSite=Lax. That default blocks the cookie in cross-site contexts. If the application must use cookies cross-site, set SameSite=None. If a component omits the `SameSite` attribute, the cookie falls back to `SameSite=Lax`, which prevents setting it in a cross-site context.

   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

   Note: CEF workaround notes are at https://www.chromium.org/administrators/policy-list-3/cookie-legacy-samesite-policies; add the following option in the manifest, `--disable-features=SameSiteByDefaultCookies`. Example:

These are version-specific parameter excerpts under CEFCommandLine.

```xml
<Parameter>--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure,NetworkService</Parameter>
<Parameter>--disable-site-isolation-trials</Parameter>
```

   Note: include `NetworkService` when backward compatibility with CEP 10 is required.

4. CORS checks: Security changes in CEP 11 mean CORS blocks more requests than before. An extension can hit this issue when it reaches an endpoint that does not send the Access-Control-Allow-Origin header. Configure the accessed endpoints with suitable Access-Control-Allow-Origin headers.

CEP 11 issue notes: [Known issues](../cep-11-known-issues-faq/reference-index.md).
