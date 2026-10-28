# 3. Linked vs Embedded

**V1:** linked state is declared with `smartObject.linked`

```json
{
  "type": "smartObject",
  "smartObject": {
    "linked": false
  }
}
```

**V2:** set `smartObject.isLinked`; `true` means linked, and `false` means embedded

```json
{
  "type": "smart_object_layer",
  "smartObject": {
    "isLinked": true,
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  }
}
```

For V2, set `smartObject.isLinked` directly so linked-versus-embedded behavior is unambiguous.
