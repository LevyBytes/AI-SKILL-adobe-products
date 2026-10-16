# Added

- **[BREAKING CHANGE]** Mounting APIs
  InDesign DOM APIs are not exposed globally anymore. Before use, first [mount the APIs](../../host-api/dom-version.md). Multiple DOM API versions are now accessible.
- Events
  UXP scripts can now handle standard events emitted by InDesign. To receive those events, use the [eventListener](../../events.md) object.
- Arguments in UXP Scripts
  [Arguments](../../passing-arguments.md) may now be passed into a UXP script and consumed within that script.
- Setting script result
  UXP scripts now carry an associated "result" value. [Set a result](../../setting-script-result/setting-the-result.md) for debugging purposes and for handoff to another script.
- Menus
  UXP scripts now include APIs for adding new menu items, removing existing menu items, and related menu work. [Read more](../../menus.md).
