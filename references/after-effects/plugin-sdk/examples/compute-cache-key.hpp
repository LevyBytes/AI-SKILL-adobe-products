#pragma once
#include "AE_Effect.h"
#include "AE_GeneralPlug.h"

struct Levels2Histo_options {
    const AEGP_HashSuite1* hash_suite;
    A_long depthL;
    A_Boolean bB;
};

inline A_Err Levels2Histo_generate_key_cb(
    AEGP_CCComputeOptionsRefconP opaque_optionsP,
    AEGP_CCComputeKeyP out_keyP)
{
    if (!opaque_optionsP || !out_keyP) return A_Err_PARAMETER;
    try {
        const auto& options =
            *reinterpret_cast<const Levels2Histo_options*>(opaque_optionsP);
        if (!options.hash_suite) return A_Err_PARAMETER;
        const char hash_buffer[] = "Level2Histo";
        A_Err err = options.hash_suite->AEGP_CreateHashFromPtr(
            sizeof(hash_buffer) - 1, hash_buffer, out_keyP);
        if (!err) {
            err = options.hash_suite->AEGP_HashMixInPtr(
                sizeof(options.depthL), &options.depthL, out_keyP);
        }
        if (!err) {
            err = options.hash_suite->AEGP_HashMixInPtr(
                sizeof(options.bB), &options.bB, out_keyP);
        }
        return err;
    } catch (...) {
        return A_Err_GENERIC;
    }
}
