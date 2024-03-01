function dollertoruppes(){
    let usd= document.getElementById("usdinput").value;
    let result = usd * 82.59;

    document.getElementById("result").innerText = "Result : Rs" + result.toFixed(2);
}