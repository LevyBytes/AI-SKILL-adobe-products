# Deployment instructions (DirectX):

Alongside the binary, the generated DirectXAssets folder needs copying as well, since the effect relies on it. At runtime the application pulls in those assets.

For DirectX rendering, PF_OutFlag2_SUPPORTS_DIRECTX_RENDERING must be among the Global Flags, with the matching value written into the PiPL resource file. Leave that flag out and the effect drops back to its CPU implementation.
