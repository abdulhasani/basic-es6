/**
 * Created by Hasani on 3/8/2017.
 */
var calculateMonthlyPayment = function(principal,years,rate){
    let monthlyRate = 0;
    if(rate){
            monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1-Math.pow(1/(1+monthlyRate),years * 12));
    /**
     * Destructur membantu menghilangkan kebutuhan
     * variabel sementara ketika bekerja dengan objek dan array
     */
    return {principal,years,rate,monthlyPayment,monthlyRate};
};
/**
 * ajax
 */
document.getElementById('calcBtn').addEventListener('click',function(){
   var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    /**
     * menangkap json
     * @type {{principal, years, rate, monthlyPayment, monthlyRate}}
     */
    let {monthlyPayment,monthlyRate} = calculateMonthlyPayment(principal,years,rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
});