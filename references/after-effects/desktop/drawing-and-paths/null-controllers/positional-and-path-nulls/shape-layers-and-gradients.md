# Shape Layers and Gradients

- Shape Groups: Drive the Position of Shape groups with Null controllers while keeping them inside the Shape layer.
- Gradients: Tie gradient points to other layers for dynamic control.

Note

Once points within a Shape layer are bound to Null controllers, changing the Skew value on the enclosing Shape group or making the Scale non-uniform (i.e. unlinked) will tend to push the point out of alignment with the Null. This holds for both Nulls on positional points and Nulls on Path points.
