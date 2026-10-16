# 2. Request envelope

**V2 does not keep the top-level request wrapper used by V1.** V1 placed input images inside `options.artboard[]`; V2 instead uses a root-level `images[]` array. The `options` container is removed entirely.

**V1:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "options": {
    "artboard": [
      {"href": "<IMAGE_1_URL>", "storage": "external"},
      {"href": "<IMAGE_2_URL>", "storage": "external"}
    ]
  },
  "outputs": [/* additional content omitted */]
}
```

**V2:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "images": [
    {"source": {"url": "<IMAGE_1_URL>"}},
    {"source": {"url": "<IMAGE_2_URL>"}}
  ],
  "artboardSpacing": 50,
  "outputs": [/* additional content omitted */]
}
```

| V1 field | V2 field | Notes |
| --- | --- | --- |
| `options.artboard[]` | `images[]` | Breaking: `options` wrapper is removed |
| `outputs[]` | `outputs[]` | Still at the top level |
| _(not in V1)_ | `artboardSpacing` | New: integer, pixels, optional (default 50) |
