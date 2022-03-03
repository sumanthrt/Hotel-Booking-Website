var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.querySelector("#fromDate").setAttribute("min",today);
function computeTotal() {
    let bookingName = document.getElementById("bookingName").value;
    let noOfAdults = document.getElementById("noOfAdults").value;
    let refToFrom = document.getElementById("fromDate");
    let fromDate = new Date(refToFrom.value);
    var fd = fromDate.getDate() + 1;//refers to next day
    var fm = fromDate.getMonth() + 1;//January is 0
    var fy = fromDate.getFullYear();
    if (fd < 10) {
        fd = '0' + fd;
     }
     
     if (mm < 10) {
        fm = '0' + fm;
     } 
     minDate = fy + '-' + fm + '-' + fd;
     document.querySelector("#toDate").setAttribute("min",minDate);
    let refToTo = document.getElementById("toDate");
    let toDate = new Date(refToTo.value);
    let refToTotal = document.getElementById("totalPrice");
    let diffInTime = toDate.getTime() - fromDate.getTime();
    let totalPrice= noOfAdults*1000*diffInTime/(1000 * 3600 * 24);
    if(totalPrice > 0){
        refToTotal.value = 'Rs. '+ totalPrice;
    }
}