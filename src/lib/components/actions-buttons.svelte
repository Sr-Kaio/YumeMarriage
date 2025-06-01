<script>
    export let onAdd;
    export let onRemove;
    export let onClear;
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

<div class="flex justify-between gap-2">
    <button class="w-full text-xl p-1" on:click={onAdd}>Add</button>
    <button class="w-full text-xl p-1" on:click={onRemove}>Remove</button>
    <button class="w-full text-xl p-1" on:click={onClear}>Clear</button>
</div>


<button
    id="marrybtn"
    class="!p-2 !px-4"
    disabled={isMarryDisabled}
    on:click={onDownload}
>
    ❤️ {marryBtnNames[Math.floor(Math.random() * marryBtnNames.length)]}
</button>