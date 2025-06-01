<script lang="js">
    let { content, buttons, title = "Modal" } = $props();

    let modal_bg = $state();
    let modal_popup = $state();

    function destroy() {
        modal_bg.remove();
        modal_popup.remove();
    }
</script>


<div
    bind:this={modal_bg}
    id="modal"
    class="fadeIn absolute left-0 p-2 right-0 top-0 bottom-0 bg-[navy]/50 backdrop-blur-md z-100 flex justify-center items-center"
>
    <div
        bind:this={modal_popup}
        id="modal_popup"
        class="window flex flex-col"
    >
        <div class="title-bar">
            <div class="title-bar-text">{title}</div>
            <div class="title-bar-controls">
                <button aria-label="Close" onclick={destroy()}></button>
            </div>
        </div>

        <div class="w-full p-5">
            {@render content()}
        </div>
        <div
            class="bg-background-950 h-[20%] w-full flex items-center justify-end px-5 gap-2 py-4"
        >
            {@render buttons()}
            <button
                onclick={destroy()}
            >
                Close
            </button>
        </div>
    </div>
</div>
