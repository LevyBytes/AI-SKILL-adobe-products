# To allow byte-streaming and range support - Language support

A whole range of languages is available in the PDF Embed API. English (en-US) is what it falls back to, though you can pick a different one by handing in the locale-code variable as you construct the `AdobeDC.View object`.

```javascript
function createJapaneseView(clientId, divId) {
    return new AdobeDC.View({ clientId, divId, locale: "ja-JP" });
}
```

Load the PDF Embed SDK and call this function after adobe_dc_view_sdk.ready. The supplied divId must identify an existing container; clientId is your registered Embed API client ID.

Supported languages

| Language | Locale Code |
| --- | --- |
| Danish | da-DK |
| Dutch | nl-NL |
| English (United Kingdom) | en-GB |
| English (United States) | en-US |
| Finnish | fi-FI |
| French | fr-FR |
| German | de-DE |
| Italian | it-IT |
| Japanese | ja-JP |
| Norwegian | nb-NO |
| Portuguese | pt-BR |
| Spanish | es-ES |
| Swedish | sv-SE |
| Czech | cs-CZ |
| Korean | ko-KR |
| Polish | pl-PL |
| Russian | ru-RU |
| Turkish | tr-TR |
| Chinese | zh-CN |
| Chinese | zh-TW |
