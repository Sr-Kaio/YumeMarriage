import { createRawSnippet, mount, unmount } from "svelte";
import Modal from "$lib/components/modal.svelte";

export function openAddYumeModal(addYume) {
    const buttons = createRawSnippet(() => ({
        render: () => `<button id="confirm-btn">Confirm</button>`
    }));

    const content = createRawSnippet(() => ({
        render: () =>
            `<div class="field-row-stacked">
                <label for="yume-name-textarea">Put the name of your yume or self-insert!</label>
                <textarea id="yume-name-textarea" type="text"></textarea>
            </div>`
    }));

    const modal = mount(Modal, {
        target: document.body,
        props: { title: "Add", buttons, content }
    });

    const textarea = document.getElementById("yume-name-textarea");
    const confirm = document.getElementById("confirm-btn");

    confirm.onclick = () => {
        if (textarea.value.trim()) {
            console.log(textarea.value.trim())
            addYume(textarea.value.trim());
            unmount(modal);
        }
    };
}

export function openDownloadModal(onPDF, onPNG) {
    const buttons = createRawSnippet(() => ({
        render: () =>
            `<div class="flex gap-2">
                <button id="pdf-download">PDF</button>
                <button id="png-download">PNG</button>
            </div>`
    }));

    const content = createRawSnippet(() => ({
        render: () => `Choose your file type`
    }));

    const modal = mount(Modal, {
        target: document.body,
        props: { title: "Download", buttons, content }
    });

    document.getElementById("pdf-download").onclick = onPDF;
    document.getElementById("png-download").onclick = onPNG;
}
