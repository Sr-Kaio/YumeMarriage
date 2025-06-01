import { createRawSnippet, mount, unmount } from "svelte";
import Modal from "$lib/components/modal.svelte";
import { browser } from "$app/environment";
import { href } from "$lib/utils/url_utils.js";

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
                <button id="png-download">PNG</button>
            </div>`

    }));

    const content = createRawSnippet(() => ({
        render: () => `<p class="max-w-64">Choose your file type, if your certificate comes out broken, try regenerating it, otherwise, report it.</p>`
    }));

    const modal = mount(Modal, {
        target: document.body,
        props: { title: "Download", buttons, content }
    });

    document.getElementById("png-download").disabled = navigator.userAgent.indexOf("Firefox")  != -1
    //document.getElementById("pdf-download").onclick = onPDF;
    document.getElementById("png-download").onclick = onPNG;
}


export function openCreditModal() {

    const buttons = createRawSnippet(() => ({
        render: () =>
            `<div>
         
            </div>`
    }));

    const content = createRawSnippet(() => ({
        render: () =>      
        `
            <div class="flex gap-3">
                <ul class="tree-view aspect-ratio w-45 h-45 !p-[2px] md:!flex !hidden">
                    <img 
                        src="https://avatars.githubusercontent.com/u/89105250?s=400&u=4d271acf45a6140dbe911b7f95c86a86c2c845f7&v=4"
                        class="w-full bg-cover h-full "
                    >
                </ul >
                <div class="flex flex-col">
                    <h3 class="font-black text-xl flex gap-2 items-end">
                        <ul class="tree-view aspect-ratio w-16 h-16 !p-[2px] md:!hidden !flex">
                            <img 
                                src="https://avatars.githubusercontent.com/u/89105250?s=400&u=4d271acf45a6140dbe911b7f95c86a86c2c845f7&v=4"
                                class="w-full bg-cover h-full "
                            >
                        </ul >
                        Sr Kaio
                    </h3>
                    <p class="my-1">Special thanks to <a href="https://x.com/kitsunecar">kitsunecar</a></p>
                    <p class="max-w-80 mb-6">This website was made with Svelte, SvelteKit, TailwindCSS and hosted with Vercel</p>
                    <div class="flex">
                        <button id="github-btn">My Github</button>
                        <button id="yt-btn">My Youtube</button>
                        <button id="x-btn">My X (Twitter)</button>
                        

                    </div>
                </div>
            </div>

        `
    }));

    const modal = mount(Modal, {
        target: document.body,
        props: { title: "This wonderful website was made by", buttons, content }
    });

    document.getElementById("github-btn").onclick = () => {href("https://github.com/Sr-Kaio")};
    document.getElementById("yt-btn").onclick = () => {href("https://www.youtube.com/@sr_kaio")};
    document.getElementById("x-btn").onclick = () => {href("https://x.com/sr_kaio_dev")};
}
