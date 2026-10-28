# Added

Firefly Image Model 3 (preview) APIs:

- References now cover two APIs introduced with this release: [Generate Similar Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) and [Generate Object Composite](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
- V3 references now cover [Generate Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md), [Expand Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) and [Fill Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md), supporting Firefly Image Model 3 (preview).

Updated guides:

The Create your first Firefly APIs implementation guide now uses V3 for the [Generate Images API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

New guides:

- Firefly Image Model 3 (preview) - Overview
- Using Content Class and Style Presets
- Using Style and Structure Image References
- Using the Expand Image API
- Using the Fill Image API
- Getting Started with the Firefly Services SDK
- Firefly API Terminology

### Added

Firefly Generate Images API now accepts `url` as a source for `referenceImage`. Request input through `url` is accepted only when the domain is on the allow list.

The allow-listed domains are:

- `amazonaws.com`
- `windows.net`
- `dropboxusercontent.com`

### Added

- Generate Images API with generative match
- Generative Expand API
- Generative Fill API
- Upload API

### Added

- Set the `x-api-variant` header to `v2` to use the latest image model. By default, `v2` is used.
- The API references now include styles, and a new styles guide documents them as well.
