# 1. Overview

The Generate Human Item Masks endpoint (`/v1/mask-body-parts`) finds and segments human body parts plus clothing items in images, returning separate mask images for each identified region. By default, bilateral body parts, meaning parts that occur on both sides of the body, are returned as one combined mask.

With granular labels enabled, that capability returns side-specific masks for bilateral parts. The response then contains separate, independent masks for the left and right instances of every applicable body part. The request body controls this behavior through the `useGranularLabels` boolean field.
