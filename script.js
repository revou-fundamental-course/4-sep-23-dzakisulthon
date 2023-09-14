function square(){
    var sisi,luas,keliling
    sisi = parseInt(document.getElementById("inputField").value);
    luas = sisi*sisi;
    keliling = 4*sisi;
    document.getElementById("num").innerHTML="luas adalah : "+luas;
    document.getElementById("num1").innerHTML="keliling adalah : "+keliling;
}