function limpiarFormulario(){
document.getElementById("miForm").reset();
}
var suma= function(n1, n2, n3){
	var numero1 =parseInt(document.getElementById("numero1").value);
	var numero2 =parseInt(document.getElementById("numero2").value);
	var numero3 =parseInt(document.getElementById("numero3").value);
 if(numero1<numero2){
 	return "El numero menor es:"+ numero1;   
 	}else {   
              if(numero2<numero3){
                        return "El numero menor es:"+ numero2;                   
              }
              else {
                  return "El numero menor es:" + numero3;
              }              
}
   }

var pulgada= function (n1){
	var cm =parseFloat(document.getElementById("cm").value);
	var pg =cm * 0.393701;
	return cm+"los centimetros en pulgadas son:" + pg;
}

var yarda= function(n1){
	var mm= parseFloat(document.getElementById("mm").value);
	var yd= mm+1.09361;
	return mm+" los metros convertidos en yardas son:" + yd;
}