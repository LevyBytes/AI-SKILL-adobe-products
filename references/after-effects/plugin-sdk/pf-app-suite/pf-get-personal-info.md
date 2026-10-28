# PF_GetPersonalInfo

`PF_GetPersonalInfo`

Retrieves the user's registration information.

Suite argument declaration (not a standalone call):

```cpp
PF_GetPersonalInfo(
  PF_AppPersonalTextInfo  *ptiP);

typedef struct PF_AppPersonalTextInfo {
  A_char  name[PF_APP_MAX_PERS_LEN + 1];
  A_char  org[PF_APP_MAX_PERS_LEN + 1];
  A_char  serial_str[PF_APP_MAX_PERS_LEN+1];
} PF_AppPersonalTextInfo;
```
