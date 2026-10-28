# lookAt(fromPoint, atPoint)

Return type: Array [3].

Argument type: fromPoint and atPoint are Arrays [3].

Here fromPoint is the world-space location of the layer you mean to orient, while atPoint is the world-space point you want that layer aimed toward. Feed the return value into the Orientation property to swing the layer's z-axis toward atPoint. The method shines with cameras and lights; if you apply it to a camera, switch off auto-orientation. For example, placed on the Orientation property of a spot light, this expression aims the light at the anchor point of layer number 1 in the same composition: lookAt(position, thisComp.layer(1).position)
