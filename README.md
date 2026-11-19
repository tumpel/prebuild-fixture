# prebuild-fixture

The fixture repository of step 16 of the Tumpel end-to-end proof (`doc/EDD/006-end-to-end-proof.md` in mvhenten/tumpel). A prebuild runs the `onCreateCommand` of `.devcontainer/devcontainer.json` through the caller workflow `.github/workflows/tumpel-prebuild.yml`, which calls `tumpel/workflows/.github/workflows/prebuild.yml@v1`.

Throwaway test for mvhenten/tumpel#213.
