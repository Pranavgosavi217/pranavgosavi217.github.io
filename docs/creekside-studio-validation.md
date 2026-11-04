# Creekside Cottage & Watchtower — Studio validation (v0.3)

## Status

This is a **low-poly static environment study**, not a Roblox-tested gameplay asset. v0.3 fixes the **GLB coordinate convention**: the v0.2 geometry was authored Z-up, while glTF 2.0 expects Y-up. v0.3 rotates vertex positions to **Y-up**, without changing the shape, triangle count or materials. It does **not** imply a successful import into Roblox Studio.

## Files

- `Creekside_Roblox_YUp_v03.glb`: full scene, 28 meshes, 15,582 triangles, 14 materials.
- `Creekside_Studio_Terrain_Water_YUp_v03.glb`: terrain and water.
- `Creekside_Studio_Buildings_Bridge_YUp_v03.glb`: cottage, tower and bridge.
- `Creekside_Studio_Nature_YUp_v03.glb`: trees, plants and rocks.
- `Creekside_Studio_Props_Paths_YUp_v03.glb`: paths and props.
- `Roblox_Studio_Audit_Selection.lua`: **read-only** diagnostics in Studio Command Bar.
- `Roblox_Studio_Prepare_Static.lua`: **optional** visual-only setup; anchors selected parts and disables collisions.
- `export_qa_v03.json`: automated GLB checks.

## Manual Studio test

1. Create a **separate test place** in Roblox Studio. Save it before import.
2. Open the 3D Importer, select the **full Y-up GLB** and inspect the preview. If your Studio build rejects GLB, convert with Blender to FBX, preserving Y-up orientation and materials.
3. Confirm that the cottage, tower and trees are **upright**. The model's unscaled dimensions are about **30.16 wide × 11.98 tall × 24.82 deep** in model units; Roblox import may change the scale.
4. Place an R15 dummy near the cottage door and bridge to judge the **actual stud scale**. Adjust scale uniformly if needed; don't claim a 1:1 mapping without measuring.
5. Verify the **14 material colors**, roof closure, door/window openings, branch/canopy connection, riverbanks and the waterfall outlet.
6. Select the imported hierarchy and run `Roblox_Studio_Audit_Selection.lua` in the **Command Bar**. Record its output. The script does not modify anything.
7. For a static, non-walkable visual diorama only, optionally run `Roblox_Studio_Prepare_Static.lua`. It disables collisions; don't run it on an existing gameplay map.
8. For walkable gameplay, build **simple collision proxies** for ground, bridge deck and accessible steps. Avoid using high-detail visual meshes as terrain collision. Test walking, jumping and falls in Play mode.
9. On a target device, measure FPS, memory, draw calls and import instance counts with Roblox Studio performance tools. Check streaming and LOD requirements before reusing in a larger world.
10. If importing modular GLBs separately, **keep their common origin and scale**; do not recenter each module independently.

## Release gate (not yet met)

- [ ] Import succeeds and orientation is correct in Roblox Studio.
- [ ] Avatar scale is approved.
- [ ] Colors/materials match intended palette.
- [ ] Roof, windows, tree support, bridge and water inspected from all sides.
- [ ] Collision proxies configured and play-tested if walkable.
- [ ] FPS and memory recorded on target device.

Until these checks are completed, describe the project as **designed with Roblox Studio constraints in mind**, not **Roblox Studio certified**.