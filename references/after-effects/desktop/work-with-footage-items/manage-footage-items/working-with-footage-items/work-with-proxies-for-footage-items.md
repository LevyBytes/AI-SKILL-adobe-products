# Work with proxies for footage items

Turn to a proxy and After Effects substitutes it for the real footage everywhere that footage item appears. Once you're done, you can flip back to the real footage item from the project list, at which point After Effects puts the actual footage item back in place of the proxy across every composition.

At render time, when your composition becomes a movie, the choice is yours whether to render with all the real high-resolution footage items or with their proxies. Proxies make sense for a rendered movie when, for instance, all you're after is a quick, rough movie to check motion.

For the best outcome, give a proxy the same frame aspect ratio as the real footage item. So if the actual footage item is a 640x480-pixel movie, build and use a 160x120-pixel proxy. As a proxy item comes in, After Effects scales it to match the real footage in both size and duration. Build a proxy whose frame aspect ratio differs from the actual footage item's, and the scaling will take longer.

In the Project panel, do any of the following:

To track down and apply a proxy, choose a footage item, select File > Set Proxy > File, find and select the file you want as a proxy, and select Open.

To flip between the original footage and its proxy, click the proxy indicator just left of the footage name.

To quit using a proxy, choose the original footage item and File > Set Proxy > None.
