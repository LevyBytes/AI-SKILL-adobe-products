# What the Merge Photoshop data node does

Merge Photoshop data uses the same broad pattern as Data merge in InDesign: the PSD template keeps the design fixed while each workflow run supplies different content. Workflow Builder Photoshop templates mark replaceable content with {{FieldName}} instead of InDesign's <&lt;FieldName&gt;> placeholders. After upload, the node detects those tags and exposes input ports so text, images, and other workflow outputs can be wired into the design.

Use this for localized social creatives, retail hero images with dynamic copy, product shots that need variable labels, and raster output whose layout is constant while text and imagery change.
