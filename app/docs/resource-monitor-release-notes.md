---
title: Resource Monitor
description: Release notes for the most recent releases of SMA Resource Monitor.
---

# Resource Monitor Release Notes

This page lists changes for each SMA Resource Monitor release, organized by version.

## Release 21.1.0

July 2026

### Fixes

**Log-archive retention now respects the INI file**: The `ArchiveDaysToKeep` setting configured in the INI file is now applied correctly at service startup. In prior releases this value was ignored and the default retention was used instead.

## Release 21.0.0

July 2026

### New Features

**FIPS compliance and .NET Framework 4.8.1**: Resource Monitor has been updated to be FIPS-compliant and now runs on .NET Framework 4.8.1. Both the service and the UI have been rebuilt against the latest FIPS-compliant SMA libraries, and the installer automatically deploys the .NET Framework 4.8.1 runtime as a prerequisite where it is not already present.

### Other Improvements

- Service startup and logging-initialization errors are now written to the Windows Event Log, making installation and configuration issues easier to diagnose.
- Improved service responsiveness and a cleaner, faster service shutdown.
