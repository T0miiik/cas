function zobrazCas() {
    var datum = new Date();
    var den = datum.getDay();
    var mesic = datum.getMonth() + 1;
    var hodiny = datum.getHours();
    var minuty = datum.getMinutes();
    var sekundy = datum.getSeconds();
    var rok = datum.getFullYear();
    var cislo = datum.getDate();
    var x;
  
    var dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];

 
    var mesice = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"];

    var x = dny[den];       
    var m = mesice[mesic];
  
    if (hodiny < 10) hodiny = "0" + hodiny;
    if (minuty < 10) minuty = "0" + minuty;
    if (sekundy < 10) sekundy = "0" + sekundy;
  
    const element = document.getElementById('cas');
    element.innerHTML = hodiny + ":" + minuty + ":" + sekundy;

    const ele = document.getElementById('datum');
    ele.innerHTML = "Je " + x + " " + cislo + ". " + m + " " + rok;
  }
  
  zobrazCas();
  
  setInterval(zobrazCas, 1000);