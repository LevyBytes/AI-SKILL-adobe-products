# CEP XML context menus

`CSInterface` exposes three APIs for setting and updating the customized context menu.

```javascript
CSInterface.prototype.setContextMenu = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
};

CSInterface.prototype.setContextMenuByJSON = function(menu, callback){
  window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
};

CSInterface.prototype.updateContextMenuItem = function(menuItemID, enabled, checked){
  var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
  var ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
};
```

For "setContextMenu", the "menu" parameter is an XML string.

- Id - Menu item ID; use plain text.
- Icon - Menu item icon path; resolve it relative to the extension root path. For best rendering, supply a 16 x 16px PNG icon because larger images enlarge the menu item.
- Label - Menu item label; localized languages are supported.
- Enabled - Controls whether the item is enabled or disabled. The default is true.
- Checkable - Controls whether the item can be checked/unchecked. The default is false.
- Checked - Indicates whether the item starts checked or unchecked. The default is false.
- Icon-bearing items and checkable items cannot appear together on the same menu level. Icon items take precedence.

Example:

Pass this XML menu string to the context-menu API described here.

```xml
<Menu>
   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false" Icon="./img/small_16X16.png"/>
   <MenuItem Id="menuItemId2" Label="TestExample2">
     <MenuItem Id="menuItemId2-1" Label="TestExample2-1" >
       <MenuItem Id="menuItemId2-1-1" Label="TestExample2-1-1" Enabled="false" Checkable="true" Checked="true"/>
     </MenuItem>
     <MenuItem Id="menuItemId2-2" Label="TestExample2-2" Enabled="true" Checkable="true" Checked="true"/>
   </MenuItem>
   <MenuItem Label="---" />
   <MenuItem Id="menuItemId3" Label="TestExample3" Enabled="false" Checked="false"/>
</Menu>
```

The "callback" parameter is the function invoked after a menu item click. Its single argument is the clicked menu item's ID.

Related references:

- [CEP JSON context menus](json-context-menus.md)
