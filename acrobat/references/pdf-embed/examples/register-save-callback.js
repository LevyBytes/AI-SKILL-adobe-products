function registerSave(view, saveFile, overrides = {}) {
    const enums = AdobeDC.View.Enum;
    const saveOptions = {
        autoSaveFrequency: 0,
        enableFocusPolling: false,
        showSaveButton: true,
        ...overrides
    };
    view.registerCallback(enums.CallbackType.SAVE_API, async (metaData, content, options) => {
        try {
            const result = await saveFile(metaData, content, options);
            if (result.modifiedBy) {
                return {
                    code: enums.ApiResponseCode.FILE_MODIFIED,
                    data: { modifiedBy: result.modifiedBy }
                };
            }
            return {
                code: enums.ApiResponseCode.SUCCESS,
                data: { metaData: result.metaData }
            };
        } catch (error) {
            throw { code: enums.ApiResponseCode.FAIL, data: {} };
        }
    }, saveOptions);
}
