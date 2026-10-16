# GPU-Accelerated Effect Build Instructions — Mac Setup Instructions

Because the SDK_Invert_ProcAmp plugin leans on Boost to handle GPU kernel files, Boost has to be present on your machine. Either grab it through homebrew or pull a direct download from boost.org.

  - The most current install walkthrough comes straight from Boost here: Getting Started with Boost

  - A homebrew install lands somewhere along the lines of: /usr/local/Cellar/boost/1.67.0_1/include/boost
  - From the direct download, expect a path more like: /usr/local/include/boost

3. Bring up the SDK_Invert_ProcAmp project in Xcode and head to Settings -> Locations -> Custom Paths
  - Name: BOOST_BASE_PATH
  - Display Name: BOOST
  - Path: [Your Boost installation path]

5. Should python errors crop up during the build, confirm that python is installed for bash rather than zsh. If python3 is already in place for bash yet the "python command not found" error persists, open Project Settings -> Build Rules and try swapping the "python" keyword for "python3"
