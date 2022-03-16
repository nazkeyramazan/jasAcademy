const tableData = [
    { id: 1, name: 'Чехол OEM 11199 для iPhone 11 черный', price: '1 200 ₸', count: 120, instalment: true },
    { id: 2, name: 'Чехол Samsung Smart S View Wallet Cover EF-EA562 Зеленый', price: '17 990 ₸', count: 33, instalment: false },
    { id: 3, name: 'Samsung EF-JS906CTEGRU для Samsung Galaxy S22 Черный asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf ', price: '13 990 ₸', count: 0, instalment: false },
    { id: 4, name: 'Veles для iPhone 13 Pro Max прозрачный', price: '790 ₸', count: 3, instalment: true },
    { id: 5, name: 'OEM для Apple iPhone 11 прозрачный', price: '790 ₸', count: 20, instalment: true },
    { id: 6, name: 'OEM 11199 для iPhone 11 черный', price: '1 200 ₸', count: 55, instalment: false },
    { id: 7, name: 'Чехол Apple MM2Y3ZM MagSafe для Apple iPhone 12 Pro', price: '36 060 ₸', count: 100, instalment: false },
]


function renderDataInTheTable(tableData) {
    const mytable = document.getElementById("table");
    tableData.forEach(item => {
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
renderDataInTheTable(tableData);
