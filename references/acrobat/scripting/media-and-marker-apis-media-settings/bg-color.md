# bgColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Color Array | R/W |

The background color of the media player window. Its array may take any of the color array formats that JavaScript for Acrobat supports.

Leave bgColor unset and the default tracks the window type:

Docked: White

Floating: whatever window background color the operating system control panel sets

Full Screen: whatever full-screen background color the user's Acrobat preferences hold

Example:

```javascript
// Red background
settings.bgColor = [ "RGB", 1, 0, 0 ];
```
