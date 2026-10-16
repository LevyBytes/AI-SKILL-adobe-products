# InDesign Server deactivates after a virtual machine is moved

InDesign Server can reach startup, initialize, and then quit silently in this failure mode.

Set the virtual machine to reactivate InDesign Server automatically during guest operating system startup so repeated manual activation is not required.

Download the Adobe Provisioning Toolkit Enterprise Edition.

Use a machine that has internet access, then open a command prompt or terminal.

Go to the directory where the adobe_prtk tool is located.

Create the provisioning file by running the command that matches your platform.

Windows: adobe_prtk --tool=VolumeSerialize --generate --serial=`YOUR_SERIAL_NUMBER` --leid=V7{}InDesignServer-12-Win-GM --provfilepath=C:\path\to\output

macOS: adobe_prtk --tool=VolumeSerialize --generate --serial=`YOUR_SERIAL_NUMBER` --leid=V7{}InDesignServer-12-Mac-GM --provfilepath=/path/to/output

Move both adobe_prtk and the generated prov.xml file onto the VM.

Set up a startup task with Task Scheduler (Windows) or launchd (macOS).

Have that startup task execute this command at OS startup: adobe_prtk --tool=VolumeSerialize --provfile=/absolute/path/to/prov.xml

Restart the VM, then check that InDesign Server opens correctly and still has its license.

Note

Use your real InDesign Server serial number in place of `YOUR_SERIAL_NUMBER`. Adjust the paths so they fit your own environment.

You create the provisioning file one time; after that, it can be used again whenever the VM boots.
