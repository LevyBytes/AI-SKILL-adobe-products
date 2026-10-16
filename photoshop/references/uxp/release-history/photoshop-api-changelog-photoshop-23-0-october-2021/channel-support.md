# Channel support

- [Channels collections](../../host-api/channels/reference-index.md) follow the same collection behavior used elsewhere in the API. Channels also includes `channels.add()` and `channels.removeAll()`.
- [Channel class](../../host-api/channel/reference-index.md)
  - Supports four channel types listed in [Constants.ChannelType](../../enumerations/channel-type.md): `COMPONENT`, `MASKEDAREA`, `SELECTEDAREA`, `SPOTCOLOR`.
  - Adds the following Channel properties: `name`, `type`, `visible`, `histogram`, `color`, `opacity`.
  - Adds the following Channel methods: `remove()`, `merge()` (for ChannelType.SPOTCOLOR).
  - Adds to the Document class: `get compositeChannels`, `get activeChannels`, `set activeChannels`.
