# Default value

The apiVersion field does not have to appear in the manifest. Photoshop selects a default from the minimum Photoshop version declared by the plugin:
- A plugin whose minimum version is less than 23.0.0 receives apiVersion 1 unless its manifest sets a different value.
- A plugin whose minimum version is 23.0.0 or greater receives apiVersion 2 unless its manifest sets a different value.
