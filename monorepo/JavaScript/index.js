let  checkboxes = document.querySelectorAll('input[type="checkbox"]');

const changeValuesButton = document.getElementById("changeValuesButton");
const shuffleValuesButton = document.getElementById('shuffleValuesButton');
const showSelectedValuesButton =  document.getElementById("showSelectedValuesButton");
const form = document.getElementById('form');

changeValuesButton.onclick = changeValues;
showSelectedValuesButton.onclick  = showSelectedValues;
shuffleValuesButton.onclick = shuffleValues;

function changeValues(event) {
	event.preventDefault();
	checkboxes.forEach(checkbox => checkbox.checked = !checkbox.checked)
}

function showSelectedValues(event) {
	event.preventDefault();
	const selectedValues = Array.from(checkboxes)
	.filter(checkbox => checkbox.checked)
	.map(checkbox => checkbox.value);
	alert(`${selectedValues}`);
}
function shuffleValues() {
	var selectedValues = [];
  
    for (var i = 0; i < checkboxes.length; i++) {
      selectedValues.push(checkboxes[i].value);
    }
    selectedValues = shuffleArray(selectedValues);
  
    alert("Shuffled Selected Values:\n" + selectedValues.join("\n"));
  }

  function shuffleValues(event) {
	event.preventDefault();
    for (let i = form.children.length; i >= 0; i--) {
      form.appendChild(form.children[Math.random() * i | 0]);
    }
  }