# Action operations specific

- [ ] Use a `source` object for actions instead of `href`
- [ ] Store ActionJSON as a stringified value, not as an array or object
- [ ] Provide `contentType` for inline content
- [ ] Use `additionalContents`, not `additionalImages`, for extra content fields
- [ ] Use the placeholder format `__ADDITIONAL_CONTENTS_PATH_0__`, not `__ADDITIONAL_IMAGES_0__` or `__ADDITIONAL_CONTENT_0__`; keep the numeric index from the original V1 placeholder exactly and do not renumber
- [ ] Convert V1 placeholder `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` / `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` to `__ADDITIONAL_CONTENTS_PATH_0__`, adjusting the suffix to match the array position
- [ ] The `additionalContents` maximum is 25, not 10
- [ ] Use object syntax for UXP script `options.uxp`, not an array
- [ ] Write UXP script output paths as `plugin-temp:/filename.ext`, not `__UXP_OUTPUT_PATH__`
- [ ] Use `{"validityPeriod": 3600}` for the script output destination, not `{"hosted": true}` as `scriptOutputPattern`
