function search() {
    var input = document.getElementById('search').value.toLowerCase();
    var items = ['preço', 'contato', 'Sabores', 'instagram', 'apresentação']; 
    var results = ['paga', 'contato','CHOCOLATE, doce de leite', 'siga'];

    for (var i = 0; i < items.length; i++) {
        if (items[i].toLowerCase().includes(input)) {
            results.push(items[i]);
        }
    }

    displayResults(results);
}

function displayResults(results) {
    var resultList = document.getElementById('results');
    resultList.innerHTML = '';

    for (var i = 0; i < results.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = results[i];
        resultList.appendChild(listItem);
    }
}
