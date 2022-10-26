let proximosP = proximosp.matches
console.log(proximosP)

// let equipol = proximosP[2].awayTeam.name;
// console.log(equipol)

// let equipov = proximosP[2].homeTeam.name;
// console.log(equipov);

// let date = proximosP[2].utcDate;
// console.log(date)

function crearTablaP(proxp) {
    let cuerpo_tablap = document.getElementById("cuerpo_tablap")

    for (let i = 0; i < proxp.length; i++) {
        let tr = document.createElement("tr");

        let pais = document.createElement("p");
        pais.innerHTML = proxp[i].area.name;

        let equipo_local = document.createElement("p");
        equipo_local.innerHTML = proxp[i].homeTeam.name;
        

        let equipo_visitante = document.createElement("p");
        equipo_visitante.innerHTML = proxp[i].awayTeam.name;

        let imgEL = document.createElement("img");
        imgEL.setAttribute("src", proxp[i].homeTeam.crest);
        imgEL.classList.add("escudos");

        let imgEV = document.createElement("img");
        imgEV.setAttribute("src", proxp[i].awayTeam.crest);
        imgEV.classList.add("escudos");

        let bandera = document.createElement("img");
        bandera.setAttribute("src", proxp[i].area.flag);

        let fecha = new Date(proxp[i].utcDate);

        let datos_tabla = [
           bandera,
            pais,
            imgEL,
            equipo_local,
            imgEV,
            equipo_visitante,
            fecha.toLocaleString(),
        ];

        for (let j = 0; j < datos_tabla.length; j++) {
            let td = document.createElement("td");
            td.append(datos_tabla[j]);
            tr.append(td);            
        }
        cuerpo_tablap.append(tr);
    }
    
}

crearTablaP(proximosP);