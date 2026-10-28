# Precomposing, nesting, and pre-rendering - About precomposing and nesting

Got a handful of layers already living in a composition that you'd like to bundle? Precompose them. Doing so tucks those layers into a brand-new composition that takes their place back in the original. From there the new nested composition feeds a single layer inside the original composition. It also shows up in the Project panel, ready to render or to drop into any other composition. Nesting compositions is just a matter of adding one existing composition into another, no different from dropping in any other footage item. Precomposing one lone layer earns its keep when you want to hang transform properties on a layer and steer the order its composition elements render in.

Nesting means tucking one composition inside another. That nested composition turns up as a layer within the composition holding it.

People often call a nested composition a precomposition, which casual usage trims down to precomp or pre-comp. Once a precomposition stands in as a layer's source footage item, that layer earns the name precomposition layer.

As rendering happens, you can picture the image data and the rest of the information streaming out of each nested composition and into whatever composition holds it. That framing is why nested compositions get tagged as upstream of the compositions containing them, while those containing compositions count as downstream of the nested ones inside them. Tie a group of compositions together through nesting and you have a composition network. The Composition Navigator and Mini-Flowchart let you move around inside one. Learn more about opening and navigating nested compositions.

Tip

Precompositions in After Effects play much the same role that Smart Objects do in Adobe Photoshop.
