# Additional images/contents rename

|  | V1 | V2 |
| --- | --- | --- |
| Field name | `options.additionalImages[]` | `options.additionalContents[]` |
| Item structure | `{href, storage}` | `{source: {url}}` |
| Placeholder | `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` | `__ADDITIONAL_CONTENT_0__` |

Use `__ADDITIONAL_CONTENT_N__`, taking N from the original V1 placeholder index, and do not renumber. V2 still accepts `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_N` for backward compatibility, but the V2 API schema makes `__ADDITIONAL_CONTENT_N__` canonical.
