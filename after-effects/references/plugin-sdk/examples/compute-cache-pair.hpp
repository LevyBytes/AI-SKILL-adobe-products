#pragma once
#include "AE_Effect.h"
#include "AE_GeneralPlug.h"

using ConsumeCachePair = A_Err (*)(
    AEGP_CCComputeValueRefconP, AEGP_CCComputeValueRefconP);

inline A_Err RenderCachedPair(
    const AEGP_ComputeCacheSuite1* suite,
    AEGP_CCComputeClassIdP class_id,
    AEGP_CCComputeOptionsRefconP first_options,
    AEGP_CCComputeOptionsRefconP second_options,
    ConsumeCachePair consume)
{
    if (!suite || !class_id || !consume) return A_Err_PARAMETER;
    AEGP_CCCheckoutReceiptP receipts[2] = {};
    AEGP_CCComputeOptionsRefconP options[] = {first_options, second_options};
    AEGP_CCComputeValueRefconP values[2] = {};
    A_Err statuses[2] = {};
    A_Err err = A_Err_NONE;
    try {
        for (int i = 0; i < 2; ++i) {
            statuses[i] = suite->AEGP_ComputeIfNeededAndCheckout(
                class_id, options[i], false, &receipts[i]);
        }
        for (int i = 0; i < 2 && !err; ++i) {
            if (statuses[i] == A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING) {
                statuses[i] = suite->AEGP_ComputeIfNeededAndCheckout(
                    class_id, options[i], true, &receipts[i]);
            }
            err = statuses[i];
            if (!err) {
                err = suite->AEGP_GetReceiptComputeValue(receipts[i], &values[i]);
            }
        }
        if (!err) err = consume(values[0], values[1]);
    } catch (...) {
        err = A_Err_GENERIC;
    }
    for (int i = 0; i < 2; ++i) {
        if (receipts[i]) {
            A_Err checkin_error = suite->AEGP_CheckinComputeReceipt(receipts[i]);
            if (!err) err = checkin_error;
        }
    }
    return err;
}
