# Fly-out menu

HTML extensions can use a fly-out menu on the native panel.

CSInterface gains two interfaces for this feature.

```js
CSInterface.prototype.setPanelFlyoutMenu = function (menu) {
  window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
};

CSInterface.prototype.updatePanelMenuItem = function (menuItemLabel, enabled, checked) {
  var ret = false;
  if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
    var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
    ret = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
  }

  return ret;
};
```

The `menu` parameter for `setPanelFlyoutMenu` is an XML string. Example:

Pass this XML string to the described menu API.

```xml
<Menu>
  <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false"/>
  <MenuItem Label="TestExample2">
     <MenuItem Label="TestExample2-1" >
        <MenuItem Label="TestExample2-1-1" Enabled="false" Checked="true"/>
     </MenuItem>
     <MenuItem Label="TestExample2-2" Enabled="true" Checked="true"/>
  </MenuItem>
  <MenuItem Label="---" />
  <MenuItem Label="TestExample3" Enabled="false" Checked="false"/>
</Menu>
```

To receive notification when a menu item is clicked, register for `com.adobe.csxs.events.flyoutMenuClicked` by calling `AddEventListener`. When a click occurs, the callback receives an event whose `data` attribute is an object containing `menuId` and `menuName`.

To be notified when the fly-out menu opens and closes, register event listeners for these event types:

```js
"com.adobe.csxs.events.flyoutMenuOpened";
"com.adobe.csxs.events.flyoutMenuClosed";
```
