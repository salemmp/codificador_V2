const input = document.getElementById('entrada')
const salida= document.getElementById('salida')
const btn= document.getElementById('btn')



const input_decodificar = document.getElementById('entrada_decodificar')
const salida_decodificar= document.getElementById('salida_decodificar')
const btn_decodificar= document.getElementById('btn_decodificar')




let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let longitud_abc= abc.length
btn.addEventListener('click',()=>{
    let palabra= input.value
   let efecto= ""
   let codificado=""
    salida.innerText=palabra
        setTimeout(() => {
            const intervalo =setInterval(()=>{
                efecto=""
                for(j=0;j<palabra.length;j++){
                    indice_aleatorio=Math.floor(Math.random()*longitud_abc)
                    efecto+=abc[indice_aleatorio]
                }
                salida.innerText=efecto
                
            },50)
            setTimeout(() => {
                clearInterval(intervalo);
                console.log("Intervalo detenido");
                for(i=0;i<palabra.length;i++){
                    indice= abc.indexOf(palabra[i])
                    indice= indice+3
                    codificado+=abc[indice]
                }
                console.log(codificado)
                salida.innerText=codificado
              }, 1000); // Detener el intervalo después de 3 segundos
        }, 500);
       
    })
        
   












btn_decodificar.addEventListener('click',()=>{
    let palabra_x= input_decodificar.value
    let efecto= ""
    let decodificado=""

    salida_decodificar.innerText=palabra_x


    setTimeout(() => {
        const intervalo =setInterval(()=>{
            efecto=""
            for(j=0;j<palabra_x.length;j++){
                indice_aleatorio=Math.floor(Math.random()*longitud_abc)
                efecto+=abc[indice_aleatorio]
            }
            salida_decodificar.innerText=efecto
            
        },50)
        setTimeout(() => {
            clearInterval(intervalo);
            console.log("Intervalo detenido");
            for(i=0;i<palabra_x.length;i++){
                indice= abc.indexOf(palabra_x[i])
                indice= parseInt(indice-3)
                decodificado+=abc[indice]
            }
            console.log(decodificado)
            salida_decodificar.innerText=decodificado
          }, 1000); // Detener el intervalo después de 3 segundos
    }, 500);
})



//BUSGS:
//HACERLO RESPONSIVE
//NO SOPORTA MAYUSCULAS NI ESPACIOS
//SI LA LETRA ESTA CERCA DEL FINAL O EL INICIO DEL ABECEDARIO LANZA UNDEFINE