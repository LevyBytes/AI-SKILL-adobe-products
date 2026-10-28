# getNthSpeakerName

Hands back the n th speaker name held by the Text-To-Speech engine (see also the numSpeakers and speaker properties).

Parameters

| Parameter | Description |
| --- | --- |
| nIndex | Which speaker name you want, given by its index. |

Returns

The name belonging to the requested speaker.

Example: Walk through every speaker on offer.

```javascript
for (var i = 0; i < tts.numSpeakers; i++) {
    var cSpeaker = tts.getNthSpeakerName(i);
    console.println("Speaker[" + i + "] = " + cSpeaker);
    tts.speaker = cSpeaker;
    tts.qText ("Hello");
    tts.talk();
}
```
