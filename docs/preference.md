# Preference

## General

<p><img :src="$withBase('/img/general.png')" alt='' /></p>

### Collider

Change the color of the collider objects.

<p><img :src="$withBase('/img/collider_prefs.png')" alt='' /></p>

### V-HACD
> Requires version 2 of V-HACD executable

<p><img :src="$withBase('/img/vhacd.png')" alt='' /></p>

- If you are using windows then you can use V-HACD.
- Extract the V-HACD executable from the zip/Blender-to-Unity/resouce/V-HACD/VHACD_v2.exe
- Locate the executable path then the parameters will available.

<p><img :src="$withBase('/img/vhacd_prefs.png')" alt='' /></p>

| Parameter        | Description                                                                                                                                                                               | Range            | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| Voxel Resolution | Maximum number of voxels generated during the voxelization stage                                                                                                                          | 10000 - 64000000 | 100000  |
| Clipping Depth   | Maximum number of clipping stages. During each split stage, all the model parts (with a concavity higher than the user defined threshold) are clipped according the "best" clipping plane | 1 - 32           | 20      |
| Concavity        | Maximum allowed concavity                                                                                                                                                                 | 0.0 - 1.0        | 0.0025  |
| Plane Downsample | Controls the granularity for the "best" clipping plane                                                                                                                                    | 1 - 16           | 4       |
| Hull Downsample  | Precision of the convex-hull generation process during the clipping plane selection stage                                                                                                 | 1 - 16           | 4       |
| Alpha            | Bias toward clipping along symmetry planes                                                                                                                                                | 0.0 - 1.0        | 0.05    |
| Beta             | Bias toward clipping along revolution axes                                                                                                                                                | 0.0 - 1.0        | 0.05    |
| Gamma            | Maximum allowed concavity during the merge stage                                                                                                                                          | 0.0 - 1.0        | 0.00125 |
| Normalise        | Normalize the mesh before applying the convex decomposition                                                                                                                               | Bool             | False   |
| Shrinkwrap       | Shrinkwrap hull to source mesh.                                                                                                                                                           | Bool             | False   |
| Mode             | Approximate convex decomposition mode                                                                                                                                                     | Enum             | Voxel       |
| Hull Vertices    | Maximum number of vertices per convex-hull                                                                                                                                                | 4 - 1024         | 32      |
| Hull Volume      | Minimum volume to add vertices to convex-hulls                                                                                                                                            | 0.0 - 0.01       | 0.0001  |

---

## Path

<p><img :src="$withBase('/img/path_disk.png')" alt='' /></p>

<p><img :src="$withBase('/img/path_unity.png')" alt='' /></p>

<p><img :src="$withBase('/img/path_both.png')" alt='' /></p>

---

## Export

Change the FBX settings

<p><img :src="$withBase('/img/export_prefs.png')" alt='' /></p>