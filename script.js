function chechAmount(){
    var userprincipal = document.getElementById("principal");   
    if(userprincipal.value <= 0){
        alert("Please enter A Positive Number ")
        userprincipal.focus();
        return false;  
    }     
    return true;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("r1").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");

    if(chechAmount() == true ){
        result.innerHTML=` If you deposit : <span class="span1">${principal}</span> ,<br>   
        at an interest rate of : <span class="span1"> ${rate}% </span>.<br>
        You will receive an amount of : <span class="span1"> ${ interest} </span> <br>
        in the year : <span class="span1"> ${year} </span> `

    }
   
}
function updateRate() 
{
    var rateval = document.getElementById("r1").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}       




