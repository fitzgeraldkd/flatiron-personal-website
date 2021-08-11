function toggleSection(e) {
    let section;
    if (e.target.nodeName === "path") {
        section = e.target.parentNode.parentNode;
    } else if (e.target.nodeName === "svg") {
        section = e.target.parentNode;
    } else {
        section = e.target;
    }
    const sectionContent = section.nextElementSibling;
    sectionContent.classList.toggle("hidden");
    for (const sectionChevron of section.children) {
        sectionChevron.classList.toggle("hidden");
    }
}

const sections = document.getElementsByClassName("section-header");
for (const section of sections) {
    section.addEventListener("click", toggleSection)
}