# iPhone HDR clips unsupported

Generative Extend does not support HDR content, so iPhone HDR clips cannot be extended.

Workaround: Use a Rec.709 sequence and convert to SDR with Render and Replace. Choose Sequence Menu > Sequence Settings > Color Management > Color Setup, set the sequence color space to Rec.709, and then choose Direct Rec. 709 (SDR). Premiere built-in tone mapping converts HDR timeline content to SDR automatically. Then reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.
