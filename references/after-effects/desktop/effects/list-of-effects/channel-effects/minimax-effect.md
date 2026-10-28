# Minimax effect

The Minimax effect gives each of a pixel's channels the smallest or largest value it finds for that channel inside a radius you set. GPU-Acceleration gives it faster performance.

You can lean on this effect to grow or shrink a matte. Take a white solid region ringed by black: with Minimum and a radius of 1, it pulls in by one pixel on every side.

The layer's quality setting has no bearing on Minimax.

This effect works with 8-bpc, 16-bpc color, and 32-bpc color.

Operation

Minimum gives each of a pixel's channels the smallest value for the chosen channel inside the chosen radius. Maximum gives each of a pixel's channels the largest value. Minimum Then Maximum runs the Minimum operation first, then the Maximum operation. Maximum Then Minimum runs the Maximum operation first, then the Minimum operation.

Direction

Which axis to scan along for values. Horizontal & Vertical scans every direction.
