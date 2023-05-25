function calculation(){
    const coffee = document.getElementById("nocoffee").value;
    const Price = document.getElementById("coffeeprice").value;
    const Total = coffee*Price;
    document.getElementById("total").value = Total;

}
 
