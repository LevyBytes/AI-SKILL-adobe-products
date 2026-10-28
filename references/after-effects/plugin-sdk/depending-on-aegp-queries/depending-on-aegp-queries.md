# Cheating Effect Usage of AEGP Suites - Depending on AEGP Queries

Short answer: don't. Effects should not let AEGP query results determine rendered output unless those results are stored appropriately, usually in sequence data, the current render is cancelled, and a new render is forced with the queried information.

That path is complicated.

Skipping those steps leads to subtle caching bugs that are unpleasant and hard to diagnose.
