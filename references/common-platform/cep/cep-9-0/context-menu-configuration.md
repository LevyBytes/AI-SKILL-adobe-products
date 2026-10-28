# CEP XML context menus

Developers use three `CSInterface` APIs when setting or updating a custom context menu.

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

- Id - Menu item ID. Use plain text.
- Icon - Menu item icon path. This path is relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger images increase the menu item size.
- Label - Menu item label. Localized languages are supported.
- Enabled - Controls whether the item starts enabled or disabled. Default value is true.
- Checkable - Controls whether the item can be checked/unchecked. Default value is false.
- Checked - Sets whether the item starts checked or unchecked. Default value is false.
- Menu items with icons and checkable menu items cannot be on the same menu level. Icon items take precedence.

Here is an example.

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

The "callback" parameter is the function called when a user clicks a menu item. Its only parameter is the ID of the clicked menu item.

Related references:

- [CEP JSON context menus](json-context-menus.md)
