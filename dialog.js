const preview = document.getElementById("preview");
const preview_obj = document.querySelectorAll(".previewable");

const preview_website = document.getElementById("preview-website");


document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !preview.classList.contains("hidden")) {
        preview.style.animation = "fadeOutDown 0.3s";
    }
});

preview.addEventListener("click", function(e){
    if (e.target === preview) {
        preview.style.animation = "fadeOutDown 0.3s";
    }
});

preview.addEventListener("animationend", (event) => {
    if (event.animationName == "fadeOutDown"){
        preview.classList.add("hidden");
        preview.style.animation = "";
    }
});

preview_obj.forEach(item =>{
    item.addEventListener("click", change_preview)
});

async function loadHtmlFile(filePath){
    try{
        const response = await fetch(filePath);
        const html = await response.text();
        preview.innerHTML = html;
        preview.classList.remove("hidden");
    } catch(error){
        console.error("Error loading HTML:", error);
    }
}

function change_preview(event){
    const id = event.currentTarget.id;

    switch (id) {
        case "input-project-MultiAgentAI":
            loadHtmlFile("project_previews/project_MultiAgentAI.html");
            break;
        case "input-project-PDFSteganography":
            loadHtmlFile("project_previews/project_Steganography.html");
            break;
        case "input-project-MMU":
            loadHtmlFile("project_previews/project_MMU.html");
            break;
        case "input-project-CPU":
            loadHtmlFile("project_previews/project_CPU.html");
            break;
        case "input-project-CSECLabs":
            loadHtmlFile("project_previews/project_CSECLab.html");
            break;
        case "input-game-YU2025":
            loadHtmlFile("project_previews/game_YU2025.html");
            break;
        case "input-game-GreaseTrap":
            loadHtmlFile("project_previews/game_GreaseTrap.html");
            break;
        case "input-game-AllBulletsNoBite":
            loadHtmlFile("project_previews/game_AllBulletsNoBite.html");
            break;
        case "input-writeup-PasswordProfiler":
            loadHtmlFile("project_previews/write_PasswordProfiler.html");
            break;
        default:
            break;
    }

}

function open_website() {
    const website_expanded = document.getElementById("preview-website-expanded");
    const iframe = website_expanded.querySelector("iframe");

    website_expanded.classList.remove("hidden");

    iframe.src = "https://doomfishy.github.io/SimpleStegoJS/";
}