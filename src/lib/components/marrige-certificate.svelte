<script>
    let { additionalClass = "", candidates } = $props();

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

<div
    id="result"
    class="flex justify-center flex-col items-center {additionalClass} border-12 border-[gray] bg-white"
>
    <h1 class="!font-fancy text-5xl mb-16">Certificate Of Marrige</h1>
    <p class="!font-fancy-2 text-2xl">This certifies that</p>
    <div class="flex">
        {#each candidates as item, index}
            <p class="!font-fancy-2 text-3xl font-bold">
                <span class="!font-fancy-2 underline underline-offset-1"
                    >{item}</span
                >
                {#if index == candidates.length - 1}
                    <span class="!font-fancy-2 font-normal">.</span>
                {:else if index == candidates.length - 2}
                    <span class="!font-fancy-2 font-normal">and</span>
                {:else}
                    <span class="!font-fancy-2 font-normal">,</span>
                {/if}
            </p>
        {/each}
    </div>
    <p class="!font-fancy-2 text-2xl">
        Were Wed on <span
            class="!font-fancy-2 font-bold underline underline-offset-1"
        >
            {d.getDate()}th
        </span>
        Day of
        <span class="!font-fancy-2 underline font-bold underline-offset-1">
            {monthNames[d.getMonth()]}
        </span>
        In the Year
        <span class="!font-fancy-2 underline font-bold underline-offset-1">
            {d.getFullYear()}
        </span>
    </p>
</div>
