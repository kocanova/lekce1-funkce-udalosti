// tady je místo pro náš program



function zobraz(){
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */

function zmen() {
  let change;
  change=document.querySelector(".ctverecek");
  change.style.backgroundColor="green";
}

function upozorni() {
  document.querySelector(".ctverecek").style.lineHeight="3";
  document.querySelector(".ctverecek").innerHTML="Gratulace, právě jsi spustila tuto funkci!";
   console.log("Gratulace, právě jsi spustila tuto funkci!");
  alert("Gratulace, právě jsi spustila tuto funkci!");
 
  
}
