# afterBlur

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

A Blur event fires once a MediaPlayer or screen annotation gives up the keyboard focus it previously had. See also onBlur (EventListener spells out how on and after event methods differ).

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object handed to this EventListener automatically. |

Example: The script below runs as a Rendition action. The user clicks the screen annotation to open the movie clip without playing it. A click outside the screen annotation (a Blur event) starts the movie. A click on the screen annotation (a Focus event) while the movie runs pauses it. The user clicks outside the screen annotation once more to resume.

```javascript
var playerEvents = new app.media.Events
({
    afterBlur: function () { player.play(); },
    afterFocus: function () { player.pause(); }
});
var settings = { autoPlay: false };
var args = { settings: settings, events: playerEvents};
var player = app.media.openPlayer(args);
```

See also afterFocus.
