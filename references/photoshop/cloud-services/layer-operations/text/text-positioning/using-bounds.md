# Using bounds

**V1:** Layer-level `bounds` with `left`, `top`, `width`, `height`. Area frame only; point frames are unavailable.

```json
{
  "type": "textLayer",
  "name": "Positioned Text",
  "bounds": {
    "left": 100,
    "top": 50,
    "width": 800,
    "height": 200
  },
  "text": { "content": "..." }
}
```

**V2:** Define text size and placement through `text.frame`, using `type: "area"` and `bounds` fields `top`, `left`, `right`, `bottom`; `width` and `height` are not used. Convert V1 bounds with `right = left + width` and `bottom = top + height`.

```json
{
  "type": "text_layer",
  "name": "Positioned Text",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "text": {
    "content": "...",
    "frame": {
      "type": "area",
      "bounds": {
        "top": 50,
        "left": 100,
        "right": 900,
        "bottom": 250
      }
    }
  }
}
```
