/* /js/scripts.js in github Silus-Counter-Cruz making silus-counter-Cruz.bauska.org */
/* Nov 28, 2025 = 5,000 (xx hours approx)
*/
let counter = 0;
/* was 5,000 Nov 28, 2025
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
