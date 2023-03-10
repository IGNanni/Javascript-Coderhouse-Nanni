const listado = document.getElementById("listadoServicios");
const pedirlistado = async () => {
    try {
        const response = await fetch ("./data.json");
        const servicios = await response.json();

        servicios.forEach(servicio => {
            const li = document.createElement("li");
            li.innerHTML = `
            <div>
            <h3>${servicio.nombre}</h3>
            <h3>$${servicio.precio}</h3>
            </div>
            `;          
            li.setAttribute("class","card")
            listado.append(li);
        });
    } catch (error){
            const h1 = document.createElement("h1");
            h1.innerHTML = `Ups! Algo salió mal!`; 
            h1.setAttribute ("class", "ERROR")         
            document.body.append(h1);

            const titulo = document.getElementById("titulo");
            titulo.style.display = "none";
    }
}

pedirlistado();
