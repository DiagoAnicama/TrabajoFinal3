
    function formula(){
        let a = parseInt(document.getElementById("dato1").value);
        let b = parseInt(document.getElementById("dato2").value);
        let c = parseInt(document.getElementById("dato3").value);
        let dato1;
        let dato2;
        dato1 = (((-1)*b)+(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a);
        dato2 = (((-1)*b)-(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a);

        document.getElementById("respuesta1").innerHTML= dato1;
        document.getElementById("respuesta2").innerHTML= dato2;
        
        }

        