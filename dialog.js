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

    if (id == "preview-mmu"){
        loadHtmlFile("project_previews/mmu.html");
    }

    else if (id == "preview-cpu"){
        loadHtmlFile("project_previews/cpu.html");
    }

    else if (id == "preview-labs"){
        loadHtmlFile("project_previews/lab_sec.html");
    }

    else if (id == "preview-stego"){
        loadHtmlFile("project_previews/stego.html");
    }

    else if (id == "preview-yu2025"){
        loadHtmlFile("project_previews/yu_game.html");
    }

    else if (id == "preview-greaseTrap"){
        loadHtmlFile("project_previews/grease_trap.html");
    }

    else if (id == "preview-abnb"){
        loadHtmlFile("project_previews/abnb.html");
    }
}

function open_website() {
    const website_expanded = document.getElementById("preview-website-expanded");
    const iframe = website_expanded.querySelector("iframe");

    website_expanded.classList.remove("hidden");

    iframe.src = "https://doomfishy.github.io/SimpleStegoJS/";
}