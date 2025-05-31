<script>
    export let onAdd;
    export let onRemove;
    export let onDownload;
    export let isMarryDisabled = false;
    let marryBtnNames = [
        "MARRY THEM",
        "MAKE THEM KISS",
        "MAKE IT REALITY",
        "PRINT OUT YOUR MARRIGE CERTIFICATE",
        "GET YOUR CERTIFICATE RN!!!",
    ];
</script>

<div class="flex justify-between">
    <button class="w-full text-xl p-1" on:click={onAdd}>Add</button>
    <button class="w-full text-xl p-1" on:click={onRemove}>Remove</button>
</div>

<button
    id="marrybtn"
    class="md:!p-2 md:!px-4 p-[2px]"
    disabled={isMarryDisabled}
    on:click={onDownload}
>
    ❤️ {marryBtnNames[Math.floor(Math.random() * marryBtnNames.length)]}
</button>