# Executing an actionJSON with multiple inputs

The `/actionJSON` endpoint supports compositing with multiple images.

To pass several images and reference them inside actionJSON, define a Placeholder Value in the actionJSON. The value must be `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_X`, where `X` is the index in the `additionalImages` array.

For an actionJSON that needs two additional images:

- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` == `options.additionalImages[0]`
- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_1` == `options.additionalImages[1]`

Complete example files:

- [place-image-action.json](../examples/additional-image-actions/place-image-action.json)
- [create-selection-mask-actions.json](../examples/additional-image-actions/create-selection-mask-actions.json)
- [align-and-deselect-actions.json](../examples/additional-image-actions/align-and-deselect-actions.json)
- [request-settings.json](../examples/additional-image-actions/request-settings.json)
- [build-request.cjs](../examples/additional-image-actions/build-request.cjs)
- [submit-request.sh](../examples/additional-image-actions/submit-request.sh)
- [request-setup.md](../examples/additional-image-actions/request-setup.md)
