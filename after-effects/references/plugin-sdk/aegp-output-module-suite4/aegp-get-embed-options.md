# AEGP_GetEmbedOptions

`AEGP_GetEmbedOptions`

Reads the embedding setting assigned to outmodH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEmbedOptions(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_EmbeddingType     *embed_optionsP);
```

`AEGP_EmbeddingType` will be one of the following: - `AEGP_Embedding_NOTHING` - `AEGP_Embedding_LINK` - `AEGP_Embedding_LINK_AND_COPY`
