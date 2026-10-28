# Click/Pop Eliminator repair controls

FFT Size

Chooses the FFT size for repairing clicks, pops, and crackle. Usually, select Auto and let Adobe Audition choose the FFT size. For some audio, you may instead enter a specific FFT size from 8 to 512. Start around 32; if clicks are still obvious, try 48, then 64, and continue upward as needed. Higher values slow correction but can improve results. Excessive values may produce rumbly low-frequency distortion.

Fill Single Click

Repairs one click inside the selected audio range. When Auto is selected beside FFT Size, the restoration uses an FFT size suited to the size of the area being fixed. Otherwise, values from 128 to 256 work well for filling single clicks. After filling one click, press F3 to repeat the action. A quick key can also be created in the Favorites menu for filling single clicks.

Pop Oversamples Width

Adds neighboring samples to detected clicks. When a possible click is located, its start and end points are marked as tightly as possible. Pop Oversamples, which ranges from 0 to 300, expands the region so extra samples on both sides are treated as part of the click.

If repaired clicks get quieter but remain audible, raise Pop oversamples. Start at 8, then increase gradually up to 30 or 40. Audio outside a click should change very little during correction, so this buffer should stay mostly unaffected by the replacement algorithm.

Raising Pop Oversamples also forces larger FFT sizes when Auto is selected. A larger value can remove clicks more cleanly, but an excessive value makes audio distort at the repair points.

Run Size

Sets the sample distance used to separate individual clicks. Values range from 0 to 1000. For independent repair of extremely close clicks, use a low value; clicks inside the Run Size span are repaired together.


A practical starting value is about 25, or half of FFT Size when Auto beside FFT Size is not selected. If Run Size is too large, roughly over 100, repairs can become more audible because large data blocks are fixed at once. If Run Size is too small, neighboring clicks may not be fully repaired on the first pass.

Pulse Train Verification

Keeps normal waveform peaks from being classified as clicks. It can also miss legitimate clicks, making stronger threshold settings necessary. Select it only after other cleanup attempts leave persistent clicks behind.

Link Channels

Applies the same processing to every channel so stereo or surround balance is maintained. For example, if one channel contains a click, the other channel will probably be detected as clicked too.

Detect Big Pops

Removes large unwanted events, including ones more than a few hundred samples wide, that may not register as clicks. Values range from 30 to 200.

Because a sharp transient such as a loud snare drum hit can resemble a very large pop, use this option only when the audio truly contains very large pops, such as a vinyl record with a major scratch. If drum hits become softer, increase the threshold slightly so only loud, obvious pops are repaired.

When loud, obvious pops are not repaired, enable Detect Big Pops and use values from about 30 for quiet pops to 70 for loud pops.

Ignore Light Crackle

Smooths detected one-sample errors and often reduces extra background crackle. Disable it if the processed audio sounds thinner, flatter, or more tinny.

Passes

Runs as many as 32 automatic passes to catch clicks that are too close together for effective single-pass repair. The effect stops earlier if no additional clicks are found and all detections have been repaired. Typically, each later pass repairs about half as many clicks as the previous one. Raising the detection threshold can mean fewer repairs and better quality while all clicks are still removed.

The video demonstrates using Click/Pop Eliminator and DeClicker to remove microphone pops, clicks, light hiss, and crackles.

Related: [Click/Pop Eliminator detection](click-pop-eliminator-effect.md).
