//const HtmlTableToJson = require('./node_modules/html-table-to-json/package.json');

document.addEventListener('keydown', () => {
    console.log(document.getElementById('one_description'));
    const objecto = {
        '1': {
            'one_description': one_description,
            'one_outcome': one_outcome
        }
    }
    console.log(objecto);
    console.log(localStorage.getItem('username'));
});

localStorage.setItem('username', 'pragadeeswaran');

console.log('Check Check Check');

//const jsonTables = HtmlTableToJson.parse(document.getElementById('timelycard'));
//console.log(jsonTables);