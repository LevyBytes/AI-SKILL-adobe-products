# newPlayer

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Builds a MediaPlayer object and returns it. Inside the args parameter a settings property is mandatory, while an events property is optional. Extra user-defined properties may ride along as well. Whatever properties args holds get copied across into the freshly made MediaPlayer object. The copy is shallow, so any copied property that is itself an object ends up shared between args and the new player.

A player produced by newPlayer is stripped down — it carries none of the standard EventListeners that ordinary Acrobat media player behavior depends on. Bring in app.media.addStockEvents to wire up the EventListeners that are needed.

Generally you are better off reaching for app.media.createPlayer rather than doc.media.newPlayer when making a media player. createPlayer wires up the standard EventListeners and the rest of the player properties for you on its own.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object. |

Returns

MediaPlayer object.

Example: See Events. dispatch for an example.
