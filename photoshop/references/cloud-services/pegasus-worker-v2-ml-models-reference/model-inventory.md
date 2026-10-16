# Model inventory

| Capability | Hosting | Model / identifier | API or endpoint | Notes |
| --- | --- | --- | --- | --- |
| Generative Fill | Cloud | `me_md` | `https://firefly-clio-imaging.adobe.io/v2/images/fill` | Fill and expand each use the corresponding path. |
| Generative Expand | Cloud | `me_md` | `https://firefly-clio-imaging.adobe.io/v2/images/expand` | Fill and expand each use the corresponding path. |
| Select Subject | Cloud | Select Subject V5 | Generated dynamically | If cloud fails, falls back to **on-device** (uses **V3**). |
| Select Sky / sky replacement | On-device | `SKBS` / `SKRF` | — |  |
| Remove tool — MetaCAF (generative remove) | Cloud | multi-edit erase | `https://di-me.ff.adobe.io/v2/images/generate-erase` |  |
| People detection | On-device | `PeopleDistractorV1` | — | For **removal**, flow uses **generative remove (MetaCAF)** on **cloud**. |
| Wire removal | On-device | `WireGlobal`, `WireLocal`, `WireStuffSeg_V2`, `CMGAN_Tiny_V3` | — | All models used in the **same** pipeline. |
| Object selection | On-device | `object_selection`, `ultimate_universal_mask_refinement`, `select_subject_classifier` | — | All models used in the **same** pipeline. |
