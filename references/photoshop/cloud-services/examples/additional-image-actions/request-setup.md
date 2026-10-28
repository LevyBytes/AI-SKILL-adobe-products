# Additional-image Action JSON request

Open when submitting an Action JSON sequence that places an additional image, creates its selection mask, aligns it and clears the selection.

Keep these files together. Set the signed input/output URLs and corresponding storage types in `request-settings.json`; the additional image placeholder is a separate input. Supply valid `token` and `apiKey` shell variables, then run `submit-request.sh` from this directory with Node.js and curl available.

The builder preserves all seven actions in their original order. The action placeholder `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` addresses the first additional image. JSON files are complete records; the builder produces the complete request instead of requiring pasted fragments.
