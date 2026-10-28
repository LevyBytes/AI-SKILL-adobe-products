# Crop request examples

**Delete pixels outside the bounds:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 0,
          "top": 0,
          "right": 1920,
          "bottom": 1080
        },
        "hide": false
      }
    }
  }
}
```

**Hide pixels without deleting them:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1820,
          "bottom": 980
        },
        "hide": true
      }
    }
  }
}
```

**Centered crop example:**

For 1920x1080 source art, use a centered 1200x800 crop:

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 360,
          "top": 140,
          "right": 1560,
          "bottom": 940
        },
        "hide": false
      }
    }
  }
}
```

(1920 - 1200) / 2

(1080 - 800) / 2

360 + 1200

140 + 800

**Square format example:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 420,
          "top": 0,
          "right": 1500,
          "bottom": 1080
        },
        "hide": false
      }
    }
  }
}
```

Center 1080x1080 in 1920 width

420 + 1080
