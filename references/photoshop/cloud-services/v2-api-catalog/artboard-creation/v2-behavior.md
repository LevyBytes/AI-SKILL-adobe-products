# V2 behavior

For V2, `/v2/create-artboard` separates image data into an `images[]` array. Each array item supplies a `source` object and an `id` used for ordering. `artboardSpacing` controls spacing between generated artboards. The enclosing request shape follows V2 conventions and still uses `outputs[]`.
