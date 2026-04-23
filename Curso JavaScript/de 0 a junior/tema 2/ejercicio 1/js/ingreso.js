
let valor1 = prompt("cuanto dinero tenes roberto?");
let valor2 = prompt("cuanto dinero tenes pedro?");
let valor3 = prompt("cuanto dinero tenes cofla?");

//De esta manera convertimos en valor recibido en un valor entero
valor1 = parseInt(valor1);

document.write("roberto tu puedes comprar: ");

if (valor1 >= 0.6 && valor1 < 1){
    document.write("Podes comprarte el helado de agua ");
}
else if(valor1 >= 1 && valor1 < 1.6){
    document.write("podes comprarte el helado de crema");
}
else if(valor1 >= 1.6 && valor1 < 1.7){
    document.write("podes comprarte el helado de heladix");
}
else if(valor1 >= 1.7 && valor1 < 1.8){
    document.write("podes comprarte el helado de heladovich");
}
else if(valor1 >= 1.8 && valor1 < 2.9){
    document.write("podes comprarte el helado de helardo");
}
else if(valor1 >= 2.9){
    document.write("podes comprarte el helado con confites y el pote de 1/4kg")
}
else if(valor1 > 3 ){
    document.write("podes comprarte cualquier helado");
}

document.write("pedro tu puedes comprar: ");

if (valor2 >= 0.6 && valor2 < 1){
    document.write("Podes comprarte el helado de agua ");
}
else if(valor2 >= 1 && valor2 < 1.6){
    document.write("podes comprarte el helado de crema");
}
else if(valor2 >= 1.6 && valor2 < 1.7){
    document.write("podes comprarte el helado de heladix");
}
else if(valor2 >= 1.7 && valor2 < 1.8){
    document.write("podes comprarte el helado de heladovich");
}
else if(valor2 >= 1.8 && valor2 < 2.9){
    document.write("podes comprarte el helado de helardo");
}
else if(valor2 >= 2.9){
    document.write("podes comprarte el helado con confites y el pote de 1/4kg")
}
else if(valor2 > 3 ){
    document.write("podes comprarte cualquier helado");
}

document.write("cofla tu puedes comprar: ");

if (valor3 >= 0.6 && valor3 < 1){
document.write("Podes comprarte el helado de agua ");
}
else if(valor3 >= 1 && valor3 < 1.6){
    document.write("podes comprarte el helado de crema");
}
else if(valor3 >= 1.6 && valor3 < 1.7){
    document.write("podes comprarte el helado de heladix");
}
else if(valor3 >= 1.7 && valor3 < 1.8){
    document.write("podes comprarte el helado de heladovich");
}
else if(valor3 >= 1.8 && valor3 < 2.9){
    document.write("podes comprarte el helado de helardo");
}
else if(valor3 >= 2.9){
    document.write("podes comprarte el helado con confites y el pote de 1/4kg");
}
else if(valor3 > 3 ){
    document.write("podes comprarte cualquier helado");
}

