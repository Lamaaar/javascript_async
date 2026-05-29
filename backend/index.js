const statusD = document.getElementById('status');
const button = document.getElementById('leker');
button.addEventListener('click', () => {
    statusD.innerText = 'töltés'
    fetch('http://127.0.0.1:63013/fruits', {
        method: 'get',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(data => {
        return data.json();
    }).then(value => {
        for (const fruit of value) {
            const div = document.createElement('div');
            div.innerText = `${fruit.id} ${fruit.name} ${fruit.price}`
            document.body.appendChild(div);
        }
    }).finally(() => {
        statusD.innerText = "";
    })
});