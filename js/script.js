function calculateTip(){
    
    resetTip();
    var billAmount = document.getElementById("amount").value;
    var tipp = document.getElementById("tip").value;
    var numberofPeople = document.getElementById("numberPeople").value;
    var tipPercentage=tipp*0.01;
if(billAmount===""){
    alert("Bill Amount Is Empty. Please Enter Amount");
    return;
}
if(billAmount<0){
    alert("Bill Amount Is in Negative. Please Enter Positive Value");
    return;  
} 
if(tipp===""){
    alert("Tip Percentage Is Empty. Please Enter Value");
    return;
}   
if(tipp<0){
    alert("Tip Percentage Is in Negative. Please Enter Positive Value");
    return;
}


function tipCalc(){
    let tipTotal=((billAmount*100)*tipPercentage)/100;
    tipTotal=tipTotal.toFixed(2);
    return tipTotal;
}
var totalTip = tipCalc();

if(numberofPeople>1){
    document.getElementById("multiple").style.display="block";
    let bill= (billAmount/numberofPeople);
    let tip = (totalTip/numberofPeople);
    document.getElementById("TipMultiple").innerHTML=tip.toFixed(2);

    let full=(tip*numberofPeople);
    document.getElementById("tipMul").innerHTML=full.toFixed(2);

    let amountEach = parseFloat(bill) + parseFloat(tip);
    document.getElementById("totalAmountEach").innerHTML=amountEach.toFixed(2);

    let multipleTotal =parseFloat(billAmount)+parseFloat(totalTip);
    document.getElementById("billTotalMultiple").innerHTML=multipleTotal.toFixed(2);
}
else{

    document.getElementById("single").style.display="block";
    let singleTotal= (parseFloat(billAmount)+parseFloat(totalTip));
    document.getElementById("tipAmount").innerHTML=totalTip;
    document.getElementById("billTotal").innerHTML=singleTotal.toFixed(2);
}


}

resetTip();

function resetTip() {
    document.getElementById("single").style.display="none";
    document.getElementById("multiple").style.display="none";
}

