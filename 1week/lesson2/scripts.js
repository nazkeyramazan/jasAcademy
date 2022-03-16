const tableData = [
    { id: 1, name: 'Чехол OEM 11199 для iPhone 11 черный', price: '1 200 ₸', count: 120, instalment: true },
    { id: 2, name: 'Чехол Samsung Smart S View Wallet Cover EF-EA562 Зеленый', price: '17 990 ₸', count: 33, instalment: false },
    { id: 3, name: 'Samsung EF-JS906CTEGRU для Samsung Galaxy S22 Черный asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf ', price: '13 990 ₸', count: 0, instalment: false },
    { id: 4, name: 'Veles для iPhone 13 Pro Max прозрачный', price: '790 ₸', count: 3, instalment: true },
    { id: 5, name: 'OEM для Apple iPhone 11 прозрачный', price: '790 ₸', count: 20, instalment: true },
    { id: 6, name: 'OEM 11199 для iPhone 11 черный', price: '1 200 ₸', count: 55, instalment: false },
    { id: 7, name: 'Чехол Apple MM2Y3ZM MagSafe для Apple iPhone 12 Pro', price: '36 060 ₸', count: 100, instalment: false },
]
function convertToInt(data) {
    for( let key in data ) {
      console.log(data[key]);
    }
  }
let dataToRender = tableData;

function toggleCheckbox(){
    if (document.getElementById('checkboxValue').checked) {
        dataToRender =  tableData.filter(item=>item.instalment==false);

    } else if (document.getElementById('checkboxValue').checked == false){
        dataToRender = tableData;
    }
    renderDataInTheTable(dataToRender);

}

function renderDataInTheTable(dataToRender) {
    const mytable = document.getElementById("table");
    var tableHeaderRowCount = 1;
    var rowCount = table.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    dataToRender.forEach(item => {
        let newRow = document.createElement("tr");
        Object.values(item).forEach((itemValue) => {
            if(itemValue === false){
                let cell = document.createElement("td");
                cell.innerText = '✅';
                newRow.appendChild(cell);
            }else
            if(itemValue === true){
                let cell = document.createElement("td");
                newRow.appendChild(cell);
            }else
            if(itemValue === 0){
                let cell = document.createElement("td");
                cell.innerText = 'Нет в наличии';
                newRow.appendChild(cell);
            }
            else{
                let cell = document.createElement("td");
                cell.innerText = itemValue;
                newRow.appendChild(cell);
            }
        })
        mytable.appendChild(newRow);
    });
}

let countBool = false;
function sortByCount(){
    if(countBool == false){
        dataToRender =  tableData.sort(function(a, b){return b.count - a.count});
        renderDataInTheTable(dataToRender);
        countBool = true;
    } else
    if(countBool == true){
        dataToRender =  tableData.sort(function(a, b){return a.count - b.count});
        renderDataInTheTable(dataToRender);
        countBool = false;
    }
}

let priceBool = false;
function sortByPrice(){
    if(priceBool == false){
        dataToRender =  tableData.sort(function(a, b){return parseInt((b.price.replace(" ", "")), 10) - parseInt(a.price.replace(" ", ""), 10)});
        renderDataInTheTable(dataToRender);
        priceBool = true;
    } else
    if(priceBool == true){
        dataToRender =  tableData.sort(function(a, b){return parseInt(a.price.replace(" ", ""), 10) - parseInt(b.price.replace(" ", ""), 10)});
        renderDataInTheTable(dataToRender);
        priceBool = false;
    }
}
renderDataInTheTable(dataToRender);
convertToInt(tableData);