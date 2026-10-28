# open

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Tries to open the media player along the lines laid out in MediaPlayer.settings. An exception is thrown when the player is already open. Once a player has been opened and then closed, calling open reopens it. The same JavaScript object carries over, yet a fresh instance of the real media player launches. As one consequence, the new player does not retain the old player's playback position.

When a docked player opens, a GetRect event (onGetRect) fires.

Should MediaPlayer.settings.autoPlay be true (its default), playback starts and a Play event (onPlay or afterPlay) fires.

Calling open can raise a security prompt dialog box, subject to the user's settings. It can likewise fire events in other objects, among them other media players and screen annotations. Where another media player holds keyboard focus, for instance, that player gets a Blur event (onBlur or afterBlur).

Set bAllowSecurityUI to false and open never shows a security prompt; it hands back a failure code instead.

A floating-window media player draws extra security checks against the user's settings. The user might insist, say, that every floating player window wear a title bar. When MediaPlayer.settings.floating holds options the user forbids, bAllowFloatOptionsFallback decides the result. Set to false, it blocks playback and returns an error code. Set to true, the options inside MediaPlayer.settings.floating are adjusted enough to satisfy the user's security settings, and open carries on using those adjusted settings.

What open returns is an object holding a single property today, code, a result code from the app.media.openCode enumeration. Open your PDF in some later Acrobat version and this object may gain extra properties, or that version may add a fresh code value. Handle any such values gracefully.

Parameters

| Parameter | Description |
| --- | --- |
| bAllowSecurityUI | Optional; defaults to true. Refer to the explanation of this parameter above. |
| bAllowFloatOptionsFallback | Optional, true by default. Its behavior is covered in the discussion above. |

Returns

An object with a code property

Example: createPlayer carries a worked illustration.
