const checkboxes = document.querySelectorAll('.chat input[type = "checkbox"]');
let lastChecked;
function handleCheck(e) {

    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('STARTING TO CHECK THEM INBETWEEN');

            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox =>
    checkbox.addEventListener('click', handleCheck
    ));