//initialize the count at 0, listen for clicks on the increment button
//increment the count variable when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count


// document.getElementById("count-el").innerText = 

/* Esta fue mi forma de hacerlo, el tutorial muestra la forma de abajo

let count= 0;

function increment(){
    
    count = count + 1
    console.log(count)
     document.getElementById("count-el").innerText = "pasajeros: " + count //aqui lo hice de esta forma para mostrar la cuenta en el titulo h2, es solo una forma, hay mas
    if (count === 10 || count === 20){
        console.log("10 pasajeros mas!");
    } //esto solo fue algo extra para que la consola me diga cada que han ingresado 10 pasajeros mas

}
increment();  */

//Esta es la forma del tuto, haciendo una variable que almacene el document getelementbyid


let countEl = document.getElementById("count-el") //pass in arguments
console.log(countEl);

let count = 0 
function increment(){
    count = count + 1 //podria ponerse igual count += 1
    countEl.innerText = count //aqui le indicamos que cada que la variable adquiera el nuevo valor, se despliegue en el innerText osea se vea reflejado en el Dom en el h2, y le asignamos el valor de count para decir que eso se mostrara ahi

}
increment();


//create a function called save which logs out the count when its called
//osea que cada vez que aprietas el boton save, queda guardada la cifra que tenia el contador, en la consola.
// function save(){
//     console.log(count);
    
// }





//1.- Grab the save-el parahraph and store it into a variable called saveEl, 2.- Create a variable that contains both the count and and the dash separator i.e "12 - ". 3.- Render the variable in the saveEl using innerText. Make sure to not delete the existing content of the paragraph

let saveEl = document.getElementById("save-el"); //tambien pudimos haberla declarado antes, por donde declaramos la variable countEl para mejor legibilidad
console.log(saveEl);


function save(){
    let actualCount = count + " - "
    saveEl.textContent += actualCount //aqui en esta linea se cambió el innertext por el textcontent, lo que hace textcontent es que muestra de una mejor manera los espacios que pusimos arriba, es decir su funcion es como que ordenar un poquito mas el texto, algo asi xd, pero con innertext se mostraba algo asi: 5 -7 - 8- 9-, es decir los guiones no eran parejos
    
    //dentro de la misma funcion podemos hacer algo para que al dar save la cuenta se resetee a 0, digamos que damos save para cada tren que pasa en la estacion, porque no queremos seguir contando al infinito en el mismo lugar, entonces por eso mejor por cada tren que sale guardar su propio registro y reiniciar la cuenta
    countEl.textContent = 0 //este es solo para que al dar click en boton save se resetee a 0, pero si no agregaramos el paso siguiente, al darle al boton increment otra vez entonces no empieza a contar desde 0, empieza desde la ultima cifra que se quedó, por lo que es necesario reiniciar la cuenta poniendo count=0
    count=0
}



















