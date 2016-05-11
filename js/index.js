var users = [];

function submit() {
    var input = document.getElementById('name');
    if(isValid(input)) {
        addUser(input);
        sortUsersByName();
        loadPage();
    } else {
        alert('You must inform an username');
    }
}

function addUser(input) {
    users.push(input.value);
    input.value = '';
}

function isValid(input) {
    if(input.value) return true;
    return false;
}

function sortUsersByName() {
    users = users.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
}

function loadPage() {
    clearPage();
    var list = document.getElementById('list');
    var ul = document.createElement('ul');
    list.appendChild(ul);
    for(var i=0; i<users.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(users[i]));
        item.setAttribute('id', 'item' + i);
        item.onclick = deleteUser;
        ul.appendChild(item);
    }
}

function deleteUser(event) {
    var item = event.target;
    if(confirm('Do you want to delete ' + item.textContent + '?')) {
        var id = item.id.slice(4);
        users.splice(id, 1);
        loadPage();
    }
}

function clearPage() {
    var list = document.getElementById('list');
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function reset() {
    clearPage();
    users = [];
}

function init() {
    document.getElementById('submit').onclick = submit;
    document.getElementById('clear').onclick = reset;
}

window.onload = init;
