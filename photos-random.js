var list =['http://is.gd/kntEWP','http://is.gd/EnVPPa','http://is.gd/DyEfHc','http://is.gd/dsqbxA']
random();
function random(){
     var vari = document.getElementById("imag");
     vari.src = list[Math.floor(Math.random()*4)];
}
