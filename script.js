function toggleSection(e) {
    const sectionContent = e.target.nextElementSibling;
    sectionContent.classList.toggle("hidden");
    for (const sectionChevron of e.target.children) {
        sectionChevron.classList.toggle("hidden");
    }
}

const sections = document.getElementsByClassName("section-header");
for (const section of sections) {
    section.addEventListener("click", toggleSection)
}