# ProjectItem.getFootageInterpretation()

app.project.rootItem.children[index].getFootageInterpretation()

### Description

Provides a structure containing current interpretation settings for the projectItem.

### Parameters

None.

### Returns

A footage interpretation structure, or 0 when the call fails.

| Property | Type | Description |
| --- | --- | --- |
| alphaUsage | Integer | Alpha handling; one of: - 0 - `ALPHACHANNEL_NONE` - 1 - `ALPHACHANNEL_STRAIGHT` - 2 - `ALPHACHANNEL_PREMULTIPLIED` - 3 - `ALPHACHANNEL_IGNORE` |
| fieldType | Integer | Field type; one of: - -1 - `FIELDTYPE_DEFAULT` - 0 - `FIELDTYPE_PROGRESSIVE` - 1 - `FIELDTYPE_UPPERFIRST` - 2 - `FIELDTYPE_LOWERFIRST` |
| ignoreAlpha | Boolean | true or false. |
| invertAlpha | Boolean | true or false. |
| frameRate | Float | Frame rate as floating point value. |
| pixelAspectRatio | Float | Pixel aspect ratio as floating point value. |
| removePulldown | Boolean | true or false. |
| vrConformProjectionType | Integer | Projection type used for VR footage. One of - 0 - `VR_CONFORM_PROJECTION_NONE` - 1 - `VR_CONFORM_PROJECTION_EQUIRECTANGULAR` |
| vrLayoutType | Integer | Layout used for VR footage. One of - 0 - `VR_LAYOUT_MONOSCOPIC` - 1 - `VR_LAYOUT_STEREO_OVER_UNDER` - 2 - `VR_LAYOUT_STEREO_SIDE_BY_SIDE` |
| vrHorizontalView | String | Horizontal view used for VR footage. |
| vrVerticalView | String | Vertical view used for VR footage. |
