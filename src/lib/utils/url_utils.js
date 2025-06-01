export function href(url) {
    console.log("changed to " + url)
    window.location = url
}

export function download(filename, url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    link.remove()
}