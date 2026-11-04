# Coastal Fishing Hut & Pier — Roblox Studio validation checklist

**Status:** Procedural low-poly environment study. GLB exported and re-imported successfully using Python tooling. **Not yet tested in Roblox Studio.**

## Included assets

- `Coastal_Fishing_Hut_Pier_Roblox_YUp.glb` — complete model, glTF 2.0 Y-up.
- `Coastal_terrain_sea_YUp.glb` — land, cliffs, shore path and water.
- `Coastal_buildings_pier_YUp.glb` — hut, roof, windows, porch, steps, pier, pilings.
- `Coastal_boat_props_YUp.glb` — rowboat, oars, fishing gear, crates and buoys.
- `Coastal_nature_YUp.glb` — pines, branches, rocks and ground vegetation.

All modular files share the same origin; do not center them independently during assembly.

## Studio validation sequence

1. Create a blank Roblox Studio place. Import the complete Y-up GLB using the 3D Importer.
2. Confirm orientation, model bounds and relative scale. Decide on a studs-per-model-unit conversion before placing characters.
3. Inspect the hut roof and gables from below and above; verify no missing backfaces, gaps or flipped normals.
4. Inspect all door and window openings and the porch-to-path-to-pier connection.
5. Inspect the pier pilings from below the water plane. Verify the boat is partially in the water, not suspended above it.
6. Check material appearance. These are flat-color PBR materials and may not match VTK previews exactly.
7. Disable detailed automatic collision on decorative meshes where appropriate. Add simple anchored collision proxies for the island, porch, pier and steps.
8. Test walkability and obstruction in Play mode. The boat and water are visual elements, not scripted vehicles or buoyancy systems.
9. Record FPS, draw calls and memory on your target device. Reduce materials/meshparts or create LODs if needed.
10. Import the four modular GLBs in a separate place, preserving the origin; compare against the full model.

## Technical report

- 13,718 triangles; 49 optimized mesh groups; 27 materials.
- 0 degenerate triangles and 0 nonfinite vertices detected after GLB roundtrip.
- Closed hut roof panels and closed wall geometry checked with trimesh.
- Modular triangle totals match the full scene.
- No UV texture atlas, tested collision, Roblox place file, runtime performance benchmark or production certification is claimed.

## Known limitations

- Roblox Studio importer behavior, material mapping, stud scale, collision, LOD and gameplay performance have not been verified.
- The rowboat hull is intentionally open at the top. It is not a watertight rigid-body simulation mesh.
- Water is a static surface, not Roblox Terrain water or an interactive ocean system.
- The included offline WebGL viewer has a static image fallback for browsers without WebGL. Interactive WebGL was not available in the automated browser environment.
