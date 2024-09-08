// Get references to the DOM elements
const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills");
// Toggle the visibility of the skills section
toggleSkillsBtn.addEventListener("click", ()=>{
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.innerText = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.innerText = "Show Skills";
    }
});

//# sourceMappingURL=index.59697c84.js.map
