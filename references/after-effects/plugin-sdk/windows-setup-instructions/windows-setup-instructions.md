# GPU-Accelerated Effect Build Instructions - Windows Setup Instructions

- Extract the boost package and execute the bundled bootstrap.bat
  - Next, run .\b2 to compile Boost
  - Then run .\b2 install --prefix=C:\Boost

  - Stick to whichever CUDA version your AE build relies on.
  - AE 25.4 uses CUDA 12.8.

3. Install the latest DirectX Compiler from https://github.com/microsoft/DirectXShaderCompiler/releases
    - (example: C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8)

    - (example: C:\Boost\include\boost-1_88)

    - (example: C:\dxc_2023_08_14)
