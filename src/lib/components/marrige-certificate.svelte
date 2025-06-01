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
    class="flex justify-center flex-col items-center {additionalClass} bg-no-repeat bg-[url('https://87ge3umaqf.ufs.sh/f/1QXbLCVSX7TZrdvu5EGr6Yp8J0BARcaDZLixn4dOKWy3Qvso')] bg-cover bg-center"
>
    <h1 class="!font-fancy text-5xl font-bold mb-16">Certificate Of Marrige</h1>
    <p class="!font-fancy-2 text-2xl">This certifies that</p>
    <div class="">
        <p class="!font-fancy-2 text-3xl font-bold max-w-70 text-center">
        {#each candidates as item, index}
                <span class="!font-fancy-2 underline underline-offset-1"
                    >{item}</span
                >
                {#if index == candidates.length - 1}
                    <span class="!font-fancy-2 font-normal mr-2">.</span>
                {:else if index == candidates.length - 2}
                    <span class="!font-fancy-2 font-normal mr-2">and</span>
                {:else}
                    <span class="!font-fancy-2 font-normal mr-2">,</span>
                {/if}
        {/each}
        </p>
    </div>
    <p class="!font-fancy-2 text-2xl">
        Were Wed on <span
            class="!font-fancy-2 font-bold underline underline-offset-1 mx-2"
        >
            {d.getDate()}th
        </span>
        Day of
        <span class="!font-fancy-2 underline font-bold underline-offset-1 mx-2">
            {monthNames[d.getMonth()]}
        </span>
        In the Year
        <span class="!font-fancy-2 underline font-bold underline-offset-1 mx-2">
            {d.getFullYear()}
        </span>
    </p>
</div>
