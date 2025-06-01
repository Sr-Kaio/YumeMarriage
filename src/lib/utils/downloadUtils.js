import { download, href } from "./url_utils";

export async function generatePNG(png, marry_candidates, mount, unmount, MarriageCertificate) {
    const certificate = mount(MarriageCertificate, {
        target: document.body,
        props: {
            additionalClass: "h-[480px] w-[734px]",
            candidates: marry_candidates
        }
    });

    const element = document.getElementById("result");

    if (element) {
        const dataUrl = await png.toPng(element);
        download("marriage_certificate", dataUrl)
    }

    unmount(certificate);
}

export async function generatePDF(pdf, marry_candidates, mount, unmount, MarriageCertificate) {
    const certificate = mount(MarriageCertificate, {
        target: document.body,
        props: {
            additionalClass: "h-[480px]",
            candidates: marry_candidates
        }
    });

    const element = document.getElementById("result");

    if (element) {
        await pdf.default().from(element).save();
    }

    unmount(certificate);
}