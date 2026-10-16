# Migrating from PSDC conversion engine (Sensei service)

Enterprise customers cannot use the following service.

**Important:** The sensei `/v2/predict` endpoint still operates. Retirement applies only to the PSDC Conversion Engine (ID: `Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094`). Engines other than that one continue unchanged on `/v2/predict`.

**Format Naming:** PSDC, Cloud PSD, and CPSD name the same format. The v2 documentation consistently uses "Cloud PSD".

**Format Support:** In the v2 API, Cloud PSD accepts `document/vnd.adobe.cpsd+dcx` and `document/vnd.adobe.cpsd+dcxucf` as media types. ACP Storage (Adobe Cloud Platform) and External Storage both accept those values. Either storage option accepts either format.

### Overview

The PSDC Conversion Engine handled PSD and Cloud PSD (PSDC/CPSD) format interchange. That engine is being retired, and V2 now provides the same capability through `/v2/create-composite`.

**PSDC Engine:**

```shell
POST /services/v2/predict
Engine ID: Feature:sensei-demo:Service-66484d87ede04702af063315a7de4094
```

**V2 API:**

```shell
POST /v2/create-composite
```
