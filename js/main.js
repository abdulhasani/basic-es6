/**
 * Created by Hasani on 3/8/2017.
 */
var calculateMonthlyPayment = function(principal,year,rate){
    let monthlyRate = 0;
    if(rate){
            monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1-Math.pow(1/(1+monthlyRate),year * 12));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click',function(){
   var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var monthlyPayment = calculateMonthlyPayment(principal,years,rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});