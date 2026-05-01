const app = document.getElementById("app");
const navList = document.querySelectorAll(".nav-item a");

navList.forEach(item =>{
    item.addEventListener("click", change_page)
});




async function loadHtmlFile(filePath){
    try{
        const response = await fetch(filePath);
        const html = await response.text();
        app.innerHTML = html;
    } catch(error){
        console.error("Error loading HTML:", error);
    }
}

function change_page(event){
    const name = event.target.textContent;
    console.log("CLICKED!", name);

    if (name == "About"){
        loadHtmlFile("about_page.html");
    }

    else if (name == "Projects"){
        loadHtmlFile("project_page.html");
    }

    else if (name == "Current"){
        loadHtmlFile("current_page.html");
    }
    
    else if (name == "Contact"){
        loadHtmlFile("contact_page.html");
    }
}

loadHtmlFile("about_page.html");