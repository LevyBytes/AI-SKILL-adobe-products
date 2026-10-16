# Fly-out menu

HTML extensions can use fly-out menus on their native panels.

CSInterface adds two interfaces for this feature.

```javascript
CSInterface.prototype.setPanelFlyoutMenu = function(menu){
  window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
};

CSInterface.prototype.updatePanelMenuItem = function(menuItemLabel, enabled, checked){
  var ret = false;
  if (this.getHostCapabilities().EXTENDED_PANEL_MENU){
	var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
	ret = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
  }

  return ret;
};
```

For `setPanelFlyoutMenu`, the "menu" argument is an XML string. An example follows:

Pass this XML menu string to the panel flyout-menu API described here.

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

To receive clicks on a menu item, register the `com.adobe.csxs.events.flyoutMenuClicked` event by calling `AddEventListener`. When the click occurs, the callback receives an event whose `data` object contains `menuId` and `menuName`.

For notifications when the fly-out menu opens or closes, register listeners for these event types:

```javascript
"com.adobe.csxs.events.flyoutMenuOpened"
"com.adobe.csxs.events.flyoutMenuClosed"
```
