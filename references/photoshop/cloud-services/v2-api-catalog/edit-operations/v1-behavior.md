# V1 behavior

V1 exposed Lightroom operations as separate operation-specific endpoints. Applying several adjustments required a sequence of API calls, and each call returned a job ID to poll. Inputs combined `inputs[].href` with the `storage` discriminant. Adjustment parameters lived in `options`.
