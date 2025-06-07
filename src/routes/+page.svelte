<script lang="js">
    import { onMount, mount, unmount } from "svelte";
    import CandidateList from "$lib/components/candidate-list.svelte";
    import ActionButtons from "$lib/components/actions-buttons.svelte";
    import {
        openAddYumeModal,
        openDownloadModal,
        openCreditModal,
    } from "$lib/utils/modalUtils";
    import { generatePNG } from "$lib/utils/downloadUtils";
    import MarrigeCertificate from "$lib/components/marrige-certificate.svelte";

    let marry_candidates = $state([]);
    let selection = $state(null);

    let pdf, png;

    onMount(async () => {
        pdf = await import("html2pdf.js");
        png = await import("html-to-image");
    });

    $effect(() => {
        document.getElementById("marrybtn").disabled =
            marry_candidates.length <= 1;
    });

    function addYume(name) {
        selection = marry_candidates.push(name) - 1;
    }

    function clear() {
        marry_candidates = []
    }

    function removeYume() {
        if (selection !== null) {
            marry_candidates.splice(selection, 1);
            selection = null;
        }
    }

    function handleDownloadPrompt() {
        openDownloadModal(
            () =>
                generatePNG(
                    png,
                    marry_candidates,
                    mount,
                    unmount,
                    MarrigeCertificate,
                ),
        );
    }
</script>

<div class="w-screen h-screen flex flex-col p-4 ">
    <div class="h-full w-full flex items-center justify-center">
        <div
            class="window overflow-hidden w-full max-h-[512px] max-w-[512px]"
            style="filter:drop-shadow(3px 5px 0 black);"
        >
            <!-- window header thingy -->
            <div class="title-bar">
                <div class="title-bar-text">Yume Marriage Generator X3</div>
                <div class="title-bar-controls">
                    <button aria-label="Close" disabled></button>
                </div>
            </div>

            <div class="w-full h-[90%] p-3 flex flex-col gap-2">
                <!-- UI layout -->
                <CandidateList
                    candidates={marry_candidates}
                    {selection}
                    onSelect={(index) => (selection = index)}
                />

                <ActionButtons
                    onAdd={() => openAddYumeModal(addYume)}
                    onRemove={removeYume}
                    onClear={clear}
                    onDownload={handleDownloadPrompt}
                    isMarryDisabled={marry_candidates.length <= 1}
                />
            </div>
        </div>
    </div>
    <!-- this is the footer -->
    <div class="flex w-full justify-center md:justify-between items-end flex-col md:flex-row">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            onclick={() => {
                openCreditModal();
            }}
            class="md:flex hidden aspect-square h-32 bg-contain bg-[url('https://87ge3umaqf.ufs.sh/f/1QXbLCVSX7TZ0RRTBiNO3BCrZURVzNiFXEglodTjqSa6GJyk')] duration-200 hover:animate-pulse hover:scale-105 bg-no-repeat cursor-pointer bg-top-left hover:bg-[url('https://87ge3umaqf.ufs.sh/f/1QXbLCVSX7TZ0snSo0vNO3BCrZURVzNiFXEglodTjqSa6GJy')] m-0"
        ></div>
        <button
            class="!p-3 md:hidden w-12"
            onclick={() => {
                openCreditModal();
            }}>Credits</button
        >
        <p class="text-base">
            This website is <a href="https://github.com/Sr-Kaio/YumeMarriage"
                >Open Source</a
            >, Find any issues?
            <a href="https://github.com/Sr-Kaio/YumeMarriage/issues/new"
                >Report it!</a
            >
        </p>
    </div>
</div>
