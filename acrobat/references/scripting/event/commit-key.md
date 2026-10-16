# commitKey

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | No | No | All | Number | R |

Reports the manner in which a form field gives up focus. Values are:

0: No commit happened (the escape key being pressed, say).

1: A mouse click landing outside the field drove the commit.

2: Pressing the Enter key drove the commit.

3: Tabbing onward to a fresh field drove the commit.

Example: To pop an alert dialog box automatically once a field has committed, drop the following into the field's format script:

```javascript
if (event.commitKey != 0)
    app.alert("Thank you for your new field value.");
```
