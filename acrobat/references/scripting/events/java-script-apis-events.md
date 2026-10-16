# JavaScript APIs — Events

What a multimedia Events object gathers together is a set of EventListener objects. On a MediaPlayer object or a ScreenAnnot object, the events property is one of these Events objects.

app.media.Events serves as the constructor that builds an Events object.

Example: The snippet below runs as a rendition action.

```javascript
console.println('Ready to play "' + event.action.rendition.uiName
    +'" from screen annot "' + event.targetName + '".');
// Create a simple app.media.Events object
var events = new app.media.Events({
    // The Event object is passed as a parameter to all event

     // listeners, this is a the parameter "e" below/
    // Called immediately during a Play event:
    onPlay: function( e ) { console.println( "onPlay: media.id = "
        + e.media.id  ); },
    // Called during idle time after the Play event:
    afterPlay: function() { console.println( "afterPlay" ); },
});
var player = app.media.openPlayer({ events: events });
```
