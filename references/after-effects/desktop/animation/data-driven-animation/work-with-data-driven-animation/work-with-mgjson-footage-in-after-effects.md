# Work with MGJSON footage in After Effects

Working with an MGJSON file goes like this:

Select File > Import > File.

For the import, pick an MGJSON file and click Open.

Once the file shows up in your project window, build a composition from that footage.

Bring an asset into the project, dropping it onto the composition.

Back in the Timeline panel, spin the footage's properties open.

Pick whip one of the asset's properties—Rotation, for instance—onto one of the data streams in the data layer. That asset property now draws from the data layer's data. Every mirrored data stream carries an expression that fetches its value out of the footage file.

Preview the footage and the asset animates off the data layer's data stream.

Another option is converting the data file's samples straight into keyframes. The conversion runs like this:

Bring an MGJSON file into the project, then drag it onto the Timeline panel.

On the data layer, right-click and pick Keyframes Assistant > Create Keyframes from Data off the menu.

Twirl the data layer open to see the keyframes.

Note

Once keyframes are converted, the data goes static—it's no longer live and no longer pulls from the data file.

The Graph Editor can likewise display live data as a graph. To bring it up, click that panel's Graph Editor icon within the Timeline.

Data-driven animation uses expression reference.
