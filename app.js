window.onload = () => {
    console.log("Cargó el html");
    myFunction();
}

function myFunction() { 
    var primero=new Array(4);
    var segundo=new Array(4);
    var tercero=new Array(4);
    var dominio=new Array(3);
    

    let pregunta = window.prompt("coloque la cantidad de dominios que desea generar");
    limite=parseInt(pregunta);
    
    //var len;

    //Combinaciones
    primero=['The','What','About','Only','Nice'];
    segundo=['Machine','Web','Net','Time','Social'];
    tercero=['Mistery','Alert','Forgiveness','Godess','Wasted'];
    dominio=['.com','.us','.net','.no','.ve'];

    //aleatoriedad
    var i=(Math.floor((Math.random() * primero.length))); //mostraría números del 0 al 4
    var j=(Math.floor((Math.random() * segundo.length)));
    var k=(Math.floor((Math.random() * tercero.length)));
    var l=(Math.floor((Math.random() * dominio.length)));
    
    //sin loop para probar     
    //document.body.querySelector("#path").innerHTML = primero[i]+segundo[j]+tercero[k]+dominio[l];


    //loop for para imprimir en distintos párrafos
    for (let index = 0; index < limite; index++) {

        //aleatoriedad
        var i=(Math.floor((Math.random() * primero.length))); //mostraría números del 0 al 4
        var j=(Math.floor((Math.random() * segundo.length)));
        var k=(Math.floor((Math.random() * tercero.length)));
        var l=(Math.floor((Math.random() * dominio.length)));

        //alert("empezó a correr el for"); //alerta que comenzó el for correctamente
        let tag = document.createElement("p");
        let text = document.createTextNode(`\n ${primero[i]+segundo[j]+tercero[k]+dominio[l]}`);
        tag.appendChild(text);
        let element = document.body.querySelector("#parrafos");
        element.appendChild(tag);
                     
    } 

    alert("dominio aleatorios generados");
}