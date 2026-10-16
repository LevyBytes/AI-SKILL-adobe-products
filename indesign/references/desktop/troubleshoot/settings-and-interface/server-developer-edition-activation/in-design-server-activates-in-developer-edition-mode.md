# InDesign Server activates in developer edition mode

Shut down Adobe InDesign Server wherever it is running.

Rename SLCache under System Library/Application Support/Adobe (macOS) or C:\Program Files (x86)\Common Files\Adobe (Windows).

Reactivate InDesign Server using the APTEE tool. The command takes the format: adobe_prtk --tool=Serialize --leid=V7{}InDesignServer-&lt;version number&gt;-&lt;OS&gt;-GM --serial=&lt;serialNumber&gt; --adobeid=&lt;email&gt;

For example: adobe_prtk --tool=Serialize --leid=V7{}InDesignServer-13-Win-GM --serial=&lt;serialNumber&gt; --adobeid=&lt;email&gt;

Restart the server, then confirm that output files no longer include the Developer Edition watermark.

If the issue still occurs, verify that the installer matches your license type. Before installing the new package, organizations moving from serial-number-based deployment to Adobe Admin Console deployment must fully uninstall the older version.

For deployments through Admin Console, create packages using Admin Consoles.
