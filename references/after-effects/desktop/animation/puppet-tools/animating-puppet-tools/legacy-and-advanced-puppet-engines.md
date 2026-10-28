# Difference between Legacy puppet engine and Advanced puppet engine

Legacy Puppet Tool vs Advanced Puppet Tool

Refer to the table below, which sets out where the two puppet engines, Legacy and Advanced, differ most:

| Legacy puppet engine | Advanced puppet engine |
| --- | --- |
| Triangle control: Specifies the highest number of triangles allowed for a mesh. Legacy Puppet Tool uses smart triangle placement in the mesh with a higher density of triangles to achieve better results. | Density control replaces Triangle control. Density controls the layout, size, and amount of triangles automatically calculated within a mesh. With higher density, the maximum and minimum triangle sizes reduce, you can add more triangles between pins, and the maximum number of triangles allowed has increased. Lower the density, the triangle size increases and creates a sparse mesh. |
| Starch pins are under the Stiffness group. | Starch pin are under the Deform group and the Stiffness group is discontinued. |
| Starch pins have Extent control to manipulate the extent to which the pin impacts the puppet. | Starch pins do not have Extent control but can impact the stiffness in the region between Starch pins and other pins. The Advanced puppet engine interprets the Starch pins as Position pins. |
| You cannot convert Starch pins into any other form of pins. | You can convert Starch pins into Position pins with the Pin Type property. |
| No option of Mesh Rotation Refinement. | Mesh Rotation Refinement, specifies the maximum amount any position or starch pin rotates to minimize deformation. Higher the value, higher is the amount of rotation (flexible deformation), and lower the value, lower is the amount of rotation (stiff deformation). |
