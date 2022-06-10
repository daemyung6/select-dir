const input = document.getElementById('input');
const display = document.getElementById('display');
input.addEventListener('change', function() {
    display.innerHTML = null;
    for (let i = 0; i < input.files.length; i++) {
        display.appendChild(
            document.createElement('hr')
        );
        display.appendChild((function() {
            let h1 = document.createElement('h1');
            h1.innerText = input.files[i].name;
            return h1;
        })());
        display.appendChild((function() {
            let div = document.createElement('div');
            div.innerText = input.files[i].path;
            return div;
        })());
    }
})