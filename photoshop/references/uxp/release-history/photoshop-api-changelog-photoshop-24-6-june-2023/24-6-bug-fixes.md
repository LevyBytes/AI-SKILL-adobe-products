# 24.6 Bug Fixes

- Non-English localizations now handle component channels correctly. Affected items:
  - `document.componentChannels`
  - `document.compositeChannels` (deprecated)
  - `document.activeChannels`
  - `channels.getByName()`
  - other methods inherited from an Array in Channels Class
- Channels are now returned correctly in Bitmap and Indexed Color modes.
- If a component channel no longer exists in a document, its name now throws an error.
- Component channel names are no longer converted to lowercase and now match the UI.
- TypeScript: `channels.parent` now has the correct `Document` type.
- Deprecated `document.compositeChannels` because these channels are component rather than composite.
  Use `componentChannels` instead.
