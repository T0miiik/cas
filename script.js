let posunMinut = 0; // globální proměnná pro uchování posunu

function zobrazCas() {
  let datum = new Date();
  
  // aplikujeme posun minut
  datum.setMinutes(datum.getMinutes() + posunMinut);

  let den = datum.getDay();
  let mesic = datum.getMonth();
  let hodiny = datum.getHours();
  let minuty = datum.getMinutes();
  let sekundy = datum.getSeconds();
  let rok = datum.getFullYear();
  let cislo = datum.getDate();

  const dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];
  const mesice = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"];

  if (hodiny < 10) hodiny = "0" + hodiny;
  if (minuty < 10) minuty = "0" + minuty;
  if (sekundy < 10) sekundy = "0" + sekundy;

  document.getElementById('cas').innerHTML = hodiny + ":" + minuty + ":" + sekundy;
  document.getElementById('datum').innerHTML = "Je " + dny[den] + " " + cislo + ". " + mesice[mesic] + " " + rok;
}

function pridejMinuty() {
  const input = document.getElementById('minuty').value;
  if (input !== "") posunMinut += parseInt(input);
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

zobrazCas();
setInterval(zobrazCas, 1000);
