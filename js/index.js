var users = [];

function submit() {
    var list = document.getElementById('list');
    var input = document.getElementById('name');
    users.push(input.value);
    input.value = '';
    users = users.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    clear();
    var ul = document.createElement('ul');
    list.appendChild(ul);
    for(var i=0; i<users.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(users[i]));
        ul.appendChild(item);
    }
}

function clear() {
    var list = document.getElementById('list');
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function clearAll() {
    clear();
    users = [];
}

function init() {
    document.getElementById('submit').onclick = submit;
    document.getElementById('clear').onclick = clearAll;
}

window.onload = init;
