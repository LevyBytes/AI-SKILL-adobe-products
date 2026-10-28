# V2 behavior

V2 brings these operations together under `/v2/create-composite`. Requests use `image.source` for the input, `edits` for the operation list, and `outputs` for the results. Layer type names are snake_case. Processing follows the `edits.layers` array from top to bottom, and array index alone does not set layer position.
