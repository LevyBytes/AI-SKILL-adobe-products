# Photoshop clipping groups, layer groups, and Smart Objects

When the layered Photoshop file holds clipping groups, After Effects brings each clipping group in as a precomposition nested inside the main composition. To hold the transparency settings, After Effects applies the Preserve Underlying Transparency option on its own to every layer in that clipping-group composition. Those nested precompositions share the main composition's dimensions.

Photoshop layer groups come in as separate compositions.

Grouping layers into Smart Objects in Photoshop often pays off, since it lets you import sensible bundles of Photoshop layers as single layers in After Effects. Say you spent 20 layers building your foreground object and 30 on your background object in Photoshop—if all you mean to do is animate the foreground flying ahead of the background, you likely don't need every one of those individual layers in After Effects; think about bundling them into one foreground Smart Object and one background Smart Object before importing the PSD file into After Effects.
