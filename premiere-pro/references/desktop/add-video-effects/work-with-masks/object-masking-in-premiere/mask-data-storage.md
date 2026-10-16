# Mask data storage

Object Mask data can become large, so Premiere avoids storing it directly inside the project file where it could slow performance and increase project size. Instead, the mask data is stored externally in a folder beside the project file. That folder uses the name &lt;Project Name&gt; Masks so it can be identified and managed easily.

The matching mask folder must remain available for the project to access those masks. When you move or share the project, move the mask folder with the project file.

If Premiere cannot find the project's mask folder, Object Masks are marked offline and cannot be used. Only Object Masks are affected; other mask types are not impacted.
