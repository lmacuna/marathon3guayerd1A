/* triple ed los que son pares
La NASA nos pidió un programa que calcule la edad de las personas en sus 
planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos 
mediante un input y un select al usuario, su edad en la tierra y su planeta favorito.
 Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente
  al planeta que eligió.
Días que tardan en dar la vuelta al sol:
Mercurio: 87.97
Venus: 224.7
Tierra: 365.26 (Por esto cada 4 años hay un año bisiesto)
Marte: 686.68
Jupiter: 4,331.98
Saturno: 10,760.55
Urano: 30,685.49
Neptuno: 60,191.19

Por ejemplo si tu edad son 23 años, en Marte tu edad será: 12.23 años. 
Puede mostrarse redondeado a 12. (Por eso todos quieren ir a Marte, para ser más jóvenes!!!) */
let edad;
let planeta;




const calcular=(edad,planeta)=>{
    edad = document.querySelector("#edad")
    // edad = document.getElementById("edad")
    edad=edad.value;
    
    edad=parseInt(edad);
    console.log(edad)
     planeta = document.querySelector("#planeta").value
    
              
               console.log(planeta) 

    
    switch(planeta){
           case 'Mercurio':
                  console.log("entro en el switch con mercurio")
                   r=(edad*364)/87.97;
                  document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>'+'<script>'+alert("tendras "+r.toFixed(1))+" años"+'</script>';
                  break;
           case 'Venus':
                  r=(edad*364)/224.7;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                  break;
           case 'Tierra':
                  r=(edad*364)/364;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                  break;   
               
           case 'Marte':
                 r=(edad*364)/686.68;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                 break;
           case 'Jupiter':
                 r=(edad*364)/4331.98;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                 break; 
           case 'Saturno':
                 r=(edad*364)/10760.55;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                 break;
           case 'Urano':
                 r=(edad*364)/30685.49;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                 break;
           case 'Neptuno':
                 r=(edad*364)/60191.19;
                 document.querySelector("#resultado").innerHTML= '<br>'+'<p style="width:110px;height:80px;color:white;background:darkblue;text-align:center">'+`tendras ${r.toFixed(1)} años`+'</p>';
                 break;
         

    }

}
