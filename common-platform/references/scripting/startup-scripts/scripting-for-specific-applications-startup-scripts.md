# Scripting for specific applications — Startup scripts

A startup-directory script may run when more than one application starts. If you put a script in such a directory, include code that checks whether the intended application is executing it. The appName static property of the BridgeTalk class can be used for that check. For example:

```javascript
if ( BridgeTalk.appName == "bridge" ) {
    //continue executing script
}
```

Before a script running in one application communicates with another application or adds functionality dependent on another application, check whether that required application/version is installed. This check can call the `BridgeTalk.getSpecifier()` static function, as shown here:

```javascript
if ( BridgeTalk.appName == "bridge-2.0" ) {
    // Check to see that Photoshop is installed.
    if ( BridgeTalk.getSpecifier( "photoshop", 10 ) ){
        // Add the Photoshop automate menu to the Adobe Bridge UI.
    }
}
```

See Interapplication Communication with Scripts for details of interapplication communication.
