const input = document.querySelector('input');
input.addEventListener('change', updateValue);
function updateValue(e) {
    log.textContent = e.target.value +" is totally rad!!!";
    console.log(e.target.value);
    }