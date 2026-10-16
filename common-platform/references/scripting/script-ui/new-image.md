# ScriptUI.newImage()

ScriptUI.newImage( normal, disabled, pressed, rollover );

### Description

Creates an image object for controls that display images, loading the related image resources or image files.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| normal | String | Resource name or file path for the normal/default-state image. |
| disabled | String | Resource name or file path for the disabled-state image, shown when the image's control is disabled (enabled=false). |
| pressed | String | Resource name or file path for the pressed-state image, displayed while the user clicks the image. |
| rollover | String | Resource name or file path for the rollover-state image, displayed when the cursor moves over the image. |

### Returns

ScriptUIImage object
