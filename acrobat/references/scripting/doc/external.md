# external

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | No | No | All | Boolean | R |

Reports whether the active document is open inside Acrobat itself or hosted in some outside frame, for instance a web browser.

Example: Test if this document happens to be sitting in a browser.

```javascript
if ( this.external )
{
    // Viewing from a browser
}
else
{
    // Viewing in the Acrobat application.
}
```
