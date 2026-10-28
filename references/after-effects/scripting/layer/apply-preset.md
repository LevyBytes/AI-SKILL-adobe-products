# Layer.applyPreset()

app.project.item(index).layer(index).applyPreset(presetName);

### Description

Puts the named bundle of animation settings — an animation preset — onto every layer currently selected in the comp the layer belongs to. Where nothing is selected, the preset lands on a freshly made solid layer instead.

Animation preset files ship preinstalled in the Presets folder, and the user interface lets users build their own.

Warning

Rather than landing on the layer you invoke applyPreset on, the animation preset goes onto whichever layer(s) are selected in the comp. So the layer you call it on really only serves to pick which comp's layers get worked on.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetName | Extendscript File object | The file containing the animation preset. |

### Returns

Nothing.

app.project.item(index).layer(index).copyToComp(intoComp)

### Description

Drops a copy of the layer into the composition you name, leaving the original untouched.

It builds a new Layer object carrying the same values as this one and tucks that object at the front of the LayerCollection object in the destination CompItem. Grab the copy with into Comp.layer(1).

Bringing a layer in shifts the index positions of layers already present in the destination composition.

The result matches copying a layer and pasting it through the user interface.

Note

From After Effects 13.6 onward, calling this on a layer that has a parent will not crash the app anymore.

Warning

In After Effects 13.7 (13.6 remains untested), undoing the action after copying a layer that carries an effect makes After Effects Crash.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| intoComp | CompItem object | The target composition. |

### Returns

Nothing.
