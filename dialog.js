const app = document.getElementById("preview");
const preview = document.querySelectorAll(".previewable");

preview.forEach(item =>{
    item.addEventListener("click", change_preview)
});

app.addEventListener("click", function(){
    app.innerHTML = "";
    app.classList.add("hidden");
});

async function loadHtmlFile(filePath){
    try{
        const response = await fetch(filePath);
        const html = await response.text();
        app.innerHTML = html;
        app.classList.remove("hidden");
    } catch(error){
        console.error("Error loading HTML:", error);
    }
}

function change_preview(event){
    const id = event.currentTarget.id;

    console.log("clicked ", id);

    if (id == "preview-mmu"){
        loadHtmlFile("project_previews/mmu.html");
    }

    else if (id == "preview-cpu"){
        loadHtmlFile("project_previews/cpu.html");
    }

    else if (id == "preview-labs"){
        loadHtmlFile("project_previews/lab_sec.html");
    }
}
