# Fly-out menu

HTML extension native panels support fly-out menus.

CSInterface adds two interfaces.

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

For `setPanelFlyoutMenu`, the "menu" parameter is an XML string. Example:

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

To receive notification when a menu item is clicked, register the `com.adobe.csxs.events.flyoutMenuClicked` event with `AddEventListener`. When the click occurs, CEP calls the event callback; the event object's `data` attribute contains `menuId` and `menuName`.

To be notified when the fly-out menu opens or closes, register listeners for these event types:

```javascript
"com.adobe.csxs.events.flyoutMenuOpened"
"com.adobe.csxs.events.flyoutMenuClosed"
```
