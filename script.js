document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("myForm").addEventListener("submit",function(event){
        event.preventDefault();

        const name = document.getElementById("fullname").value;
        const matricNo = document.getElementById("matricNo").value;
        const number1 = parseInt(document.getElementById("number1").value);
        const number2 = parseInt(document.getElementById("number2").value);
        const number3 = parseInt(document.getElementById("number3").value);

        document.getElementById("output").innerHTML= "Result from the FORM";
        document.getElementById("date").innerHTML = date();
        document.getElementById("OutputName").innerHTML = "Full Name<b>: " + name +"</b>";

        document.getElementById("resultName").value = name;
        document.getElementById("resultMatricNo").value = matricNo;
        document.getElementById("Sum").value = number1+number2+number3;
        document.getElementById("Average").value = average(number1,number2,number3);
        document.getElementById("Product").value = product(number1,number2,number3);
        document.getElementById("Largest").value = Math.max(number1,number2,number3);
        document.getElementById("Smallest").value =Math.min(number1,number2,number3);
        document.getElementById("food").value = getFood();
        document.getElementById("ResultGender").value =getGender();

    });
 
    function date() { 
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth()+1;
        const year = d.getFullYear();
        const s ="/";

        const tarikh = day + s + month + s + year;
        return tarikh;
     }

     function average(num1,num2,num3) {  
       let average =  (num1 + num2 + num3) /3;
       return average.toFixed(2);
     }

     function product(num1,num2,num3) {  
        return num1 * num2 *num3;
     }

     function getFood() {  
        txt="";
        for(i=0;i<document.myForm.myFood.length;i++){
            if(document.myForm.myFood[i].checked){
                txt += document.myForm.myFood[i].value + "|";
            }
        }
        return txt;
     }

     function getGender(){
        const g = document.getElementsByName("gender");
        for(i =0 ;i<g.length;i++){
            if(g[i].checked){
                return g[i].value;
            }
        }
        return "";
     }

     document.getElementById("site").addEventListener("change",function(){
        Site(this.value);
     });
     function Site(val){
        window.open(val,"_blank");
     }

     document.getElementById("color").addEventListener("change",function(){
        Change(this.value);
     });
     function Change(val){
        const selectedCOlor = document.getElementById("color").value;
        document.getElementById("bgcolor").style.backgroundColor = selectedCOlor;
     }

     
})