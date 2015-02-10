function randomImg(){
  var index = Math.floor(Math.random() * 4);
  var img = document.getElementById("imag");
  var list = document.getElementById("e"+index);

 img.innerHTML = '<img src="'+ list.innerHTML + '"/>'
}

randomImg();