//run code with: node app.js

/*window.onload = () => {
    console.log("Cargó el html");
    myFunction();
    console.log("Final del html \n");
}

function myFunction() { */
    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      //res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

    console.log("Any String");
    console.log("\n");

    var primero=new Array(4);
    var segundo=new Array(4);
    var tercero=new Array(4);
    var dominio=new Array(3);
    

    //let pregunta = window.prompt("coloque la cantidad de dominios que desea generar");
    let pregunta = 10;
    limite=parseInt(pregunta);
    
    //var len;

    //Combinaciones
    primero=['The','What','About','Only','Nice'];
    segundo=['Machine','Web','Net','Time','Social'];
    tercero=['Mistery','Alert','Forgiveness','Godess','Wasted'];
    dominio=['.com','.us','.net','.no','.ve'];

    //aleatoriedad
  /*  var i=(Math.floor((Math.random() * primero.length))); //mostraría números del 0 al 4
    var j=(Math.floor((Math.random() * segundo.length)));
    var k=(Math.floor((Math.random() * tercero.length)));
    var l=(Math.floor((Math.random() * dominio.length)));*/
    
    //sin loop para probar     
    //document.body.querySelector("#path").innerHTML = primero[i]+segundo[j]+tercero[k]+dominio[l];


    //loop for para imprimir en distintos párrafos
    //loop for más ixterno
    for (let index = 0; index < primero.length; index++) {

        //aleatoriedad
     /*   var i=(Math.floor((Math.random() * primero.length))); //mostraría números del 0 al 4
        var j=(Math.floor((Math.random() * segundo.length)));
        var k=(Math.floor((Math.random() * tercero.length)));
        var l=(Math.floor((Math.random() * dominio.length)));*/


     //Bucles de ciclos For internos
        for(let index2=0; index2 < segundo.length; index2++){
            for(let index3=0; index3 < tercero.length; index3++){
                for (let index4=0; index4 <dominio.length; index4++){

        //alert("empezó a correr el for"); //alerta que comenzó el for correctamente
     /*   let tag = document.createElement("p");
        let text = document.createTextNode(`${primero[i]+segundo[j]+tercero[k]+dominio[l]}`);
        tag.appendChild(text);
        let element = document.body.querySelector("#parrafos");
        element.appendChild(tag);*/

                console.log(`${primero[index]+segundo[index2]+tercero[index3]+dominio[index4]}`);
                }
            }     
        } 
    }

    //alert("dominio aleatorios generados");
//}