# add

> Submenu **add**( String **title**, LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
>
> Adds a submenu.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | title | User-interface display name for the Submenu. Ampersand characters (&) in the title instruct the Windows OS to underline the next character for Alt key menu navigation. To show an actual ampersand in the name, use double ampersands. Mac OS discards the extra ampersand characters. |
| LocationOptions | at | Placement of the submenu relative to the reference or inside its containing object. (Optional) |
| MenuElement | reference | Reference object; required when at is before or after. (Optional) |
| Object | withProperties | Starting property values for the new Submenu. (Optional) |
