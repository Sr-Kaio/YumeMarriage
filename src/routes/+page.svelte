<script lang="js">
    import { onMount, mount, unmount } from "svelte";
    import CandidateList from "$lib/components/candidate-list.svelte";
    import ActionButtons from "$lib/components/actions-buttons.svelte";
    import { openAddYumeModal, openDownloadModal } from "$lib/utils/modalUtils";
    import { generatePDF, generatePNG } from "$lib/utils/downloadUtils";
    import MarrigeCertificate from "$lib/components/marrige-certificate.svelte";

    let marry_candidates = $state(["Sr Kaio", "Witchbrew"]);
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

    function removeYume() {
        if (selection !== null) {
            marry_candidates.splice(selection, 1);
            selection = null;
        }
    }

    function handleDownloadPrompt() {
        openDownloadModal(
            () =>
                generatePDF(
                    pdf,
                    marry_candidates,
                    mount,
                    unmount,
                    MarrigeCertificate,
                ),
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
    <div class="w-screen h-screen flex flex-col p-2">
        <div class="h-full w-full flex items-center justify-center">
            <div
                class="window overflow-hidden shadow-lg w-full max-h-[512px] max-w-[512px]"
            >
                <!-- window header thingy -->
                <div class="title-bar">
                    <div class="title-bar-text">Yume Marriage Generator X3</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close" disabled></button>
                    </div>
                </div>
    
                <div class="w-full h-[90%] p-3 flex flex-col">
                    <!-- UI layout -->
                    <CandidateList
                        candidates={marry_candidates}
                        {selection}
                        onSelect={(index) => (selection = index)}
                    />
    
                    <ActionButtons
                        onAdd={() => openAddYumeModal(addYume)}
                        onRemove={removeYume}
                        onDownload={handleDownloadPrompt}
                        isMarryDisabled={marry_candidates.length <= 1}
                    />
                </div>
            </div>
        </div>
        <!-- this is the footer -->
        <div class="h-[90px]"></div>
    </div>
