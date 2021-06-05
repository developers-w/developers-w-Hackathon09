console.log('===== HACKATHON 9 =====');

console.log(`1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla'`);
function suma(a,b){
 return console.log(`La suma de ${a} y ${b} es: ${a+b}`);
}
suma(4,8)


console.log(`2. Un estudiante realiza 4 exámenes, calcular el promedio de estos`);

function promedio(n1,n2,n3,n4){
 return console.log(`El promedio de ${n1} , ${n2} , ${n3} , ${n4} es: ${(n1+n2+n3+n4)/4}`);
}
promedio(12,13,14,15);

console.log(`3. Calcular el área de un rectángulo`);

function area(base,altura){
    let area=0;
    if(base>0 && altura >0){
      area=base*altura;
    }else{
        console.log(`ERROR.... La base y altura deben tener valores positivos`);
    }
    return console.log(`El área del rectangulo con base ${base} y altura ${altura } es: ${area}`);
}
area(-8,5);

console.log(`4. Calcular el área de un triángulo`);

function areaT(baseT,alturaT){
    let area=0;
    if(baseT>0 && alturaT >0){
       area= (baseT*alturaT)/2;
    }else{
        console.log(`ERROR.... La base y altura del triangulo debeb tener valores positivos`);
    }
    return console.log(`El área del triángulo con base ${baseT} y altura ${alturaT } es: ${area}`);

}
areaT(3,4);

console.log(`5. Calcular el área de una circunferencia`);
function areaCircunferencia(radio){
    const pi=3.1415;

    if(radio>0){
        area= Math.round(pi*radio*radio);
     }else{
         console.log(`ERROR.... El radio de la circunferencia debe tener valor positivo`);
     }
     return console.log(`El área de la circunferencia con radio ${radio } es: ${area}`);
}
areaCircunferencia(5);

console.log(`6. Determinar el sueldo semanal de un trabajador basándose en sus horas
trabajadas y su salario de hora hombre`);

function sueldoSemanal(horasTrabajadas, salarioHora){
    const pago=horasTrabajadas*salarioHora;
    return console.log(`Horas trabajadas :${horasTrabajadas} 
    pago por hora :${salarioHora}
    pago semanal :${pago} `
    );
}
sueldoSemanal(10,100);

console.log(`7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
resolver el problema, determinando cuantas pulgadas debe pedir con base en
los metros que requiere. Represéntelo mediante el diagrama de flujo y el
pseudocódigo (1 pulgada = 0.0254 m).`);

function medidaPulgadas(medidaMetros){
    const medidaPulgadas= Math.round(medidaMetros/0.0254);
    return console.log(`En ${medidaMetros} metros hay ${medidaPulgadas} pulgadas`);
}

medidaPulgadas(100);


console.log(`8. Una empresa importadora desea determinar cuántos dólares puede adquirir
con equis cantidad de dinero peruano`);

function comprarDolar(cantidadSoles,precioDolar){
let  cantidaDolar=0;
    if(precioDolar>0){
     cantidaDolar=cantidadSoles/precioDolar;
    }else{
        console.log('Precio de dolar debe ser mayor a cero');
    }
  
    return console.log(`Con ${cantidadSoles} soles se puede adquirir ${cantidaDolar} dolares`);

}
comprarDolar(300,3.00);


console.log(`9. Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
les pregunta el año en que nacieron`);

function edad(añoNacimiento){
    const añoActual=2021;
     const edad=añoActual-añoNacimiento;
    return console.log(`El postulante tiene ${edad} años.`);
}
edad(2000);



console.log(`10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
edad de la persona de menor edad`);

const persona=[ {nombre:'a',edad:12},{nombre:'a',edad:12},{nombre:'a',edad:12},];






console.log(`11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
y represéntelo ,que permita determinar el bono que recibirá un trabajador`);


function calcularBono(aniosServicio){
  let bono=0;
    if(aniosServicio==1){
bono=100;
  }else if(aniosServicio==2){
    bono=200;
}else if(aniosServicio==3){
    bono=300;
}else if(aniosServicio==4){
    bono=400;
}else if(aniosServicio==5){
    bono=500;
}else{
    bono=1000;
}
return console.log(`El bono que recibe por haber trabajado ${aniosServicio} año es: ${bono}`);;
}
calcularBono(6);




console.log(`12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
en cada uno de los 6 años? Realice el algoritmo y representan la solución, `);

function salario() {
    let anioTrabajo=1;
    const salarioInicial=1500;
    let nuevoSalario=0;
    let sumSalario=0;
    if(anioTrabajo==1){
        nuevoSalario=salarioInicial+ salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario} `);
        anioTrabajo=anioTrabajo+1;
        
    } if(anioTrabajo==2){
        nuevoSalario= nuevoSalario+salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario}`);
        anioTrabajo=anioTrabajo+1;
    } if(anioTrabajo==3){
        nuevoSalario=nuevoSalario+salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario}`);
        anioTrabajo=anioTrabajo+1;
    } if(anioTrabajo==4){
        nuevoSalario=nuevoSalario+salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario}`);
        anioTrabajo=anioTrabajo+1;
    } if(anioTrabajo==5){
        nuevoSalario=nuevoSalario+salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario}`);
        anioTrabajo=anioTrabajo+1;
    } if(anioTrabajo==6){
        nuevoSalario=nuevoSalario+salarioInicial*0.1;
        sumSalario=sumSalario+nuevoSalario;
        console.log(`Sueldo en el ${anioTrabajo} año: $ ${nuevoSalario}`);
        anioTrabajo=anioTrabajo+1;
    }
    console.log(`Al cabo de 6 años ha recibido $ ${sumSalario}`);

    
}
salario();






console.log(`13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el
número de aprobados y reprobados`);

function evaluarNotas(){
    let numAlumnos = prompt('Ingrese numero de los alumnos');
    let aprobados=0;
    let desaprobados=0;
    if(Number.parseInt(numAlumnos) > 0 ){
      for (let i = 0; i < numAlumnos; i++) {
          let nota=prompt('Ingrese nota ',i);
          if (Number.parseInt(nota)>10.5) {
              aprobados=aprobados+1;
              

          }else{
              desaprobados=desaprobados+1;
              nota="";
          }
          
      }      
    }else {
        console.log('Numero de alumnos debe ser mayor a cero.');

    }

    return console.log(`Numero Alumnos: ${numAlumnos} 
    aprobados: ${aprobados} 
    desaprobados: ${desaprobados} `);

}
// evaluarNotas();

console.log(`14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
contabilizar, de un lote de N focos, el número de focos de cada color que hay en
existencia`);



console.log(`15. Realice un algoritmo para determinar si una persona puede votar con base en
su edad en las próximas elecciones`);

function evaluarVotante(edad){
    

    let msj='Menor de edad, Usted no participará de estas elecciones.';
    
    if(Number.parseInt(edad)>=18 && Number.parseInt(edad) <65 ){
        msj=`edad : ${edad}  
        Usted es apto para participar en estas elecciones.`;
    }
    return console.log(msj);;
}

evaluarVotante(18);













