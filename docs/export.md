# Export

Export object(s) to Disk or Unity or Both.

<p><img :src="$withBase('/img/ui_export.png')" alt='' /></p>

<!-- If [Path](/preference.html#path) is not defined then the `Export` button will disable.

<p><img :src="$withBase('/img/export_disable_1.png')" alt='' /></p> -->

<!-- ::: tip CHECK : Selected Objects
- Exports only the selected objects.
- Objects can be in any collection.
::: -->

<!-- <p><img :src="$withBase('/img/any_collection.png')" alt='' /></p>

::: tip UNCHECK : Selected Objects
- Objects should be in `Export` collection.
:::

<p><img :src="$withBase('/img/export_collection.png')" alt='' /></p>

::: tip DON'T
- Make `Empty` as parent.
- Select any children object(s).
- Select any collisions, sockets, lods.
::: -->

- Add a folder path.
- Select the objects or collections.
- Hit export.

<p><img :src="$withBase('/img/export.gif')" alt='' /></p>

If you want to have colliders in Unity automatically, import the `BUImporter_v2` script while the Unity project is open(drag-n-drop), it will compile the script.