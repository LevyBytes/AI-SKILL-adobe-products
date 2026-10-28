# Reading Background Layer in Manifest

For V2 background-layer work, read the real layer ID from the manifest and reuse that value for later operations. If a document has only a background layer and no other layers, the returned ID is `0`.
The same manifest entry also includes background-specific metadata:
