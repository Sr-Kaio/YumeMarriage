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

    const d = new Date();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
</script>

<div class="flex justify-between gap-2">
    <button class="w-full text-xl p-1" on:click={onAdd}>Add</button>
    <button class="w-full text-xl p-1" on:click={onRemove}>Remove</button>
    <button class="w-full text-xl p-1" on:click={onClear}>Clear</button>
</div>

<div class="flex justify-between w-full md:flex-row flex-col gap-2">
    <div class="field-row">
        <label for="text1">Day</label>
        <input id="day" type="text" class="w-full" value="{d.getDate()}th"/>
    </div>
    <div class="field-row">
        <label for="text2">Month</label>
        <input id="month" type="text" class="w-full" value={monthNames[d.getMonth()]}/>
    </div>
    <div class="field-row">
        <label for="text3">Year</label>
        <input id="year" type="text" class="w-full" value={d.getFullYear()}/>
    </div>
</div>

<button
    id="marrybtn"
    class="!p-2 !px-4"
    disabled={isMarryDisabled}
    on:click={onDownload}
>
    ❤️ {marryBtnNames[Math.floor(Math.random() * marryBtnNames.length)]}
</button>