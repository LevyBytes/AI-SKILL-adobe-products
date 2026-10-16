# JPEG quality and pixel fidelity

V1 and V2 rely on different JPEG encoders. Semantically matching quality settings can still yield sub-1% pixel variation between JPEG outputs from the two APIs, and that variation should not be treated as a migration failure. When pixel fidelity matters, use `"photoshop_max"` as the baseline quality setting. During comparisons between V1 reference outputs and V2 outputs across worker versions, consider sub-1% diffs normal.
