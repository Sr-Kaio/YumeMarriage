import { download, href } from "./url_utils";

export async function generatePNG(png, marry_candidates, mount, unmount, MarriageCertificate) {
    const certificate = await mount(MarriageCertificate, {
        target: document.body,
        props: {
            additionalClass: "h-full w-full max-h-[480px] max-w-[734px]",
            candidates: marry_candidates,
            year: document.getElementById("year").value,
            month: document.getElementById("month").value,
            day: document.getElementById("day").value,
        }
    });

    const element = document.getElementById("result");

    if (element) {
        const dataUrl = await png.toPng(element);
        download("marriage_certificate", dataUrl)
    }

    unmount(certificate);
}

// export async function generatePDF(pdf, marry_candidates, mount, unmount, MarriageCertificate) {
//     const certificate = mount(MarriageCertificate, {
//         target: document.body,
//         props: {
//             additionalClass: "h-[480px]",
//             candidates: marry_candidates,
//             year: document.getElementById("year").value,
//             month: document.getElementById("month").value,
//             day: document.getElementById("day").value,

//         }
//     });

//     const element = document.getElementById("result");

//     if (element) {
//         await pdf.default().from(element).save();
//     }

//     unmount(certificate);
// }