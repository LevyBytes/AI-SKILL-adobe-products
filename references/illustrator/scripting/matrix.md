# Matrix

matrix

### Description

Specification for a transformation matrix, used when object geometry needs to be transformed. It lets scripts set and read matrix information from an Illustrator document or from page items within one.

Matrices work with the transform method and also appear as properties on several object types. A matrix defines the geometric transformation applied to an object. To create a new matrix, call Application object methods such as Application.getTranslationMatrix(), Application.getScaleMatrix(), or Application.getRotationMatrix().

A Matrix stores matrix values as a record rather than as a reference to a matrix object. Matrix commands act on the values in that record. When a command changes a matrix, the command returns a changed matrix record as its result. The matrix record originally supplied to the command remains unchanged.
