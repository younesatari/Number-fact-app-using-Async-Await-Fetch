/* Getting Elements and asign them to variables */
const input = document.getElementById('input');
const num = document.getElementById('num');
const fact = document.getElementById('fact');
const factContainer = document.getElementById('fact-container');

/* Event Listener */
input.addEventListener('input', addFact);

/* Add Fact */
async function addFact() {
   // Input Value
   const value = input.value;
   // Fetch Data
   const res = await fetch(`http://numbersapi.com/${value}`);
   const data = await res.text();
   // Add Fact
   if(input.value !== '') {
      num.innerText = input.value;
      factContainer.style.display = 'block';
      fact.innerText = data;
   } else {
      factContainer.style.display = 'none';
   }
}