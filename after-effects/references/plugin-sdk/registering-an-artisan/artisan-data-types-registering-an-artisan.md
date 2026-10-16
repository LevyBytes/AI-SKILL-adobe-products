# Artisan Data Types — Registering An Artisan

An Artisan is an AEGP with one entry point. Artisans also need to register their own function entry points and use a special callback for that purpose. See `AEGP_RegisterArtisan`() from `AEGP_RegisterSuite5`.

The table shows the functions Artisans may support as `PR_ArtisanEntryPoints` defines them; only render_func is mandatory.
