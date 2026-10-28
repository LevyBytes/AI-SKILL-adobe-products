# PF_GetLayerChannelTypedRefAndDesc

`PF_GetLayerChannelTypedRefAndDesc`

Retrieves an auxiliary channel by type.

Returned information is valid only if foundPB returns TRUE.

Suite argument declaration (not a standalone call):

```cpp
PF_GetLayerChannelTypedRefAndDesc(
  PF_ProgPtr      effect_ref,
  PF_ParamIndex   param_index,
  PF_ChannelType  channel_type,
  PF_Boolean      *foundPB,
  PF_ChannelRef   *channel_refP,
  PF_ChannelDesc  *channel_descP);
```

`PF_DataType` will be one of the following: - `PF_DataType_FLOAT` - 34 bytes - `PF_DataType_DOUBLE` - 38 bytes - `PF_DataType_LONG` - 34 bytes - `PF_DataType_SHORT` - 32 bytes - `PF_DataType_FIXED_16_16` - 34 bytes - `PF_DataType_CHAR` - 31 byte - `PF_DataType_U_BYTE` - 31 byte - `PF_DataType_U_SHORT` - 32 bytes - `PF_DataType_U_FIXED_16_16` - 34 bytes - `PF_DataType_RGB` - 3 bytes `PF_ChannelType` will be one of the following: - `PF_ChannelType_DEPTH` - `PF_ChannelType_NORMALS` - `PF_ChannelType_OBJECTID` - `PF_ChannelType_MOTIONVECTOR` - `PF_ChannelType_BK_COLOR` - `PF_ChannelType_TEXTURE` - `PF_ChannelType_COVERAGE` - `PF_ChannelType_NODE` - `PF_ChannelType_MATERIAL` - `PF_ChannelType_UNCLAMPED` - `PF_ChannelType_UNKNOWN`
