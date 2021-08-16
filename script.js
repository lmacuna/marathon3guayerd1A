
/* "Un vivero nos pide armar un sistema que ayude a las personas a
 decidir qué tipo de planta colocar en su jardín según la flor 
 que quieran. Para eso, les daremos diferentes opciones (mediante
     un select, o mediante botones), para que puedan elegir varios 
     tipos de flor. Al elegir una flor, se debe mostrar su imagen. 
     Cuando se le pase el mouse por encima a esa imagen, debe 
     mostrar como se ve el árbol de dicha flor". */

const mostrarFlor =(id)=>{
    
    switch(id){
          case "1":
                document.querySelector("#imagenes").innerHTML='<img onmouseover="cambiar(id)" id="A" src="IMG/rosa.jpg">'
                break;
          case "2":
                document.querySelector("#imagenes").innerHTML='<img onmouseover="cambiar(id)" id="B" src="IMG/dalia.jpg">'
                break;
          case "3":
                document.querySelector("#imagenes").innerHTML='<img onmouseover="cambiar(id)" id="C" src="IMG/margarita.jpg">'
                 break;
          case "4":
                document.querySelector("#imagenes").innerHTML='<img onmouseover="cambiar(id)" id="D" src="IMG/clavel.jpg">'
                break;             
          case "5":
                document.querySelector("#imagenes").innerHTML='<img onmouseover="cambiar(id)" id="E" src="IMG/orquideas-azules2.jpg">'
                break; 

    }
    
    
} 

const cambiar=(id)=>{

    switch(id){
        case "A":
            document.querySelector("#imagenes").innerHTML='<img onmouseout="mostrarFlor(id)" id="1" src="IMG/rosa2.jpg">'
            break;
        case "B":
            document.querySelector("#imagenes").innerHTML='<img onmouseout="mostrarFlor(id)" id="2" src="IMG/dalia2.jpg">'
            break;
        case "C":
            document.querySelector("#imagenes").innerHTML='<img onmouseout="mostrarFlor(id)" id="3" src="IMG/margarita2.jpg">'
            break;  
        case "D":
            document.querySelector("#imagenes").innerHTML='<img onmouseout="mostrarFlor(id)" id="4" src="IMG/clavel2.jpg">'
            break;              

        case "E":
            document.querySelector("#imagenes").innerHTML='<img onmouseout="mostrarFlor(id)" id="5" src="IMG/orquideas-azules.jpg">'
            break; 
    }
    
}

