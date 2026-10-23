# JavaScript APIs - collectionField

Each field (or category) belonging to a collection is exposed as a property on the collectionField object. What the user reads in the interface while browsing the list of files in a collection comes from the text property (described further down). Through the collectionField object you control how fields are ordered in that interface, in what order the file listing is sorted, and whether a particular field is locked against editing.

For embedded files within a collection, the per-field values can be retrieved or assigned by way of the data object's getFieldValue and setFieldValue methods.
