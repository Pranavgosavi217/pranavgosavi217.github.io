# Rural Railway Stop & Freight Wagon v1.1 — Roblox Studio validation

**Status:** Procedural low-poly 3D environment study. Exported and reimported through Python tooling. **Not yet tested inside Roblox Studio.**

## Included assets

- `Rural_Railway_Stop_Freight_Wagon_YUp.glb`: complete scene, glTF 2.0, Y-up.
- `Rural_Railway_terrain_YUp.glb`: terrain, ballast, track, sleepers and railway fittings.
- `Rural_Railway_station_YUp.glb`: station, platform, furniture and lighting.
- `Rural_Railway_wagon_YUp.glb`: freight wagon, wheels, chassis, doors, roof and buffers.
- `Rural_Railway_nature_YUp.glb`: trees, shrubs, rocks, grasses and fencing.

All modules share one origin. Do not automatically center each module independently.

## Import and QA sequence

1. Open a blank Roblox Studio place and import the complete GLB through 3D Importer.
2. Confirm Y-up orientation and choose a consistent model-units-to-studs scale.
3. Inspect all four wagon wheels against the rail heads, sleepers and ballast; compare wheel spacing to the track.
4. Inspect both wagon roof gables and both station gables from all directions. Check that there are no holes or inverted faces.
5. Inspect the station doors, windows and entrance threshold. Confirm platform-to-station access in Play mode.
6. Compare materials and normals against the included VTK renders; Studio may map flat-color PBR materials differently.
7. Anchor the static structures and add simplified collision proxies for the ground, platform and station. Do not use detailed collision for each decorative prop.
8. Test player movement and obstruction. The wagon is a static mesh, not a moving train or scripted vehicle.
9. Measure FPS, draw calls, memory and physics behavior on the intended target device. Create LODs or combine materials if necessary.
10. In a separate place, import all four modular GLBs with matching origin; compare against the full-scene import.

## Technical report

- 21,722 triangles, 64 optimized mesh groups, 37 flat-color materials.
- No degenerate faces or nonfinite vertices after GLB roundtrip.
- v1.1 nature revision: 8 conifers, 4 broadleaf trees, all 12 trunks within the island boundary; station and wagon geometry unchanged.
- The terrain access path was shortened to remain on the island; when replacing modular assets, update both **nature and terrain**.
- Station and wagon roof panels and end gables checked for closed surfaces.
- All four modular exports sum to the full-scene mesh and triangle totals.
- Offline viewer tested at 8 viewport widths with WebGL rendering and controls.

The portfolio site offers the full-scene GLB. The four separate module GLBs are supplied in the downloadable project package, not as individual links on the website.

## Known limits

- No Roblox Studio import or in-game performance test has been performed.
- No production UV atlas, authored collision proxies, LOD chain, animations or .rbxlx file.
- Terrain and railway track are static visuals; this is not a working train simulation.
- These are procedural models, not hand-modeled Blender assets.