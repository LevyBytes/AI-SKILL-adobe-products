# 2. When to Use Granular Labels

Set `useGranularLabels: true` when a workflow needs:

- **Independent per-limb compositing**: applying shadows, reflections, or lighting effects separately to the left and right sides of a subject.
- **Ground shadow generation**: placing realistic grounding shadows for individual feet or shoes in sports and retail images.
- **Leg and foot reflection effects**: building per-limb mirrored effects while keeping the opposite side from bleeding into the result.
- **High-volume automation**: running large batches of sports player or product imagery where manual mask splitting is impractical.
- **Precision apparel segmentation**: separating left/right sleeves, gloves, or shoes for e-commerce product presentation.

> If both sides of the body are handled the same way in your workflow, such as full-body background removal, granular labels are unnecessary. To keep the standard combined label set and reduce response payload size, omit the flag or set it to `false`.
