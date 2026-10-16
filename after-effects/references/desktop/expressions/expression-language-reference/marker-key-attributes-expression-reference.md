# MarkerKey attributes (expression reference)

The same methods serve to read values off both composition markers and layer markers. Layer markers are reached via the thisLayer.marker object, while composition markers come through the thisComp.marker object.

As far as expressions are concerned, a marker counts as a special variety of Key object, so methods like nearestKey(time) reach markers too, and markers carry time and index attributes as well. Note that the index attribute isn't the marker's number (its name) — it's the keyframe index, which captures where the marker falls in order along the time ruler.

Every value you're able to set in the Composition Marker or Layer Marker dialog box is reachable from expressions. Attach this expression to a text layer's Source Text property and it reports, for whichever layer marker lies closest to the current time, these values — time, duration, index, comment (name), chapter, URL, frame target, cue point name — and on top of that, whether the marker stands for an event cue point:

```javascript
  m = thisLayer.marker.nearestKey(time);
  s = "time:" + timeToCurrentFormat(m.time) + "\r" +
      "duration: " + m.duration + "\r" +
      "key index: " + m.index + "\r" +
      "comment:" + m.comment + "\r" +
      "chapter:" + m.chapter + "\r" +
      "URL:" + m.url + "\r" +
      "frame target: " + m.frameTarget + "\r" +
      "cue point name: " + m.cuePointName + "\r" +
      "Event cue point? " + m.eventCuePoint + "\r";
  for (param in m.parameters){
       s += "parameter: " + param + " value: " + m.parameters[param] + "\r";
  }
  s
```

Since a footage item's XMP metadata can be turned into layer markers for any layer built on that item, expressions are able to work with XMP metadata. See XMP metadata in After Effects for details.
