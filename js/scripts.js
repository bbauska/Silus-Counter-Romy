/* /js/scripts.js of github Silus-Counter-Romy for Silus-Counter-Romy.bauska.org */
/* July 16, 2026 = 0 (0 hours approx)
*/
let counter = 0;
/* 1st xx,xxx mmm dd, yyyy
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
