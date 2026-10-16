# Layer processing order

In v1 payload arrays, processing ran from the last layer toward the first, which effectively meant bottom-up handling.

V2 handles the `layers` array in the same sequence it is sent. The first item in the request is evaluated before the second item, and that ordering continues through the array. Because request order now controls the final composition, arrange the payload in the order the dependencies require.

When a newly created layer must refer to another layer from the same payload, such as placements using `above`, `below`, or `into` with `referenceLayer`, place the referenced layer earlier in the array. That differs from v1, where reverse-order processing allowed the dependent layer to appear first.

### Example

Use the case where Layer B must sit over Layer A:

**V1 payload:** (reverse-order processing)

```json
{
  "layers": [
    {
      "name": "Layer B",
      "add": { "insertAbove": { "name": "Layer A" } }
    },
    {
      "name": "Layer A",
      "add": { "insertTop": true }
    }
  ]
}
```

Layer A gets created before Layer B can point to it.

**V2 payload:** (forward-order processing)

```json
{
  "edits": {
    "layers": [
      {
        "name": "Layer A",
        "type": "layer",
        "operation": {
          "type": "add",
          "placement": { "type": "top" }
        }
      },
      {
        "name": "Layer B",
        "type": "layer",
        "operation": {
          "type": "add",
          "placement": {
            "type": "above",
            "referenceLayer": { "name": "Layer A" }
          }
        }
      }
    ]
  }
}
```

Because v2 evaluates Layer A first, Layer B can safely use Layer A as its reference.
