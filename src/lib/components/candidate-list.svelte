<script>
    export let candidates = [];
    export let selection;
    export let onSelect = () => {};
</script>

<ul class="p-2 w-full h-64 tree-view overflow-y-scroll">
    {#each candidates as candidate, index}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
            class="w-full cursor-pointer {selection === index ? 'bg-[navy] text-white' : ''}"
            on:click={() => onSelect(index)}
        >
            {candidate}
        </li>
    {/each}
</ul>