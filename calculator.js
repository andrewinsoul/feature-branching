window.onload = function () {
  let items = [], sumTotal = 0; 
  function calculate() {
    function thousandSeperator(n) {
      let count = 0, numArray = n.split('');
      for(let i = numArray.length -1; i > 0; i--) {
        if (count === 2) {
          numArray.splice(i, 0, ',');
          count = 0;
          continue;
        }
        count += 1;
      }
      return numArray.join('');
    }
    let table = document.getElementById('itemTable');
    let itemName = document.getElementById('itemName').value;
    let itemQty = document.getElementById('itemQty').value;
    let itemPrice = document.getElementById('itemPrice').value;
    if (!itemName.replace(/\s/g, '').length) {
      alert('please fill entry for the item name');
      return 1;
    }
    if (itemQty === '') {
      alert('please fill entry for the item quantity');
    }
    if (itemPrice === '') {
      alert('please fill entry for the item price');
    }
    itemQty = Number(itemQty); itemPrice = Number(itemPrice);
    if (isNaN(itemQty)) {
      document.getElementById('itemQty').value = '';
      alert('quantity of item should be numerical');
      return 1;
    }
    if (isNaN(itemPrice)) {
      document.getElementById('itemPrice').value = '';
      alert('price of item should be numerical');
      return 1;
    }
    sumTotal += itemPrice;
    items.push({ itemName, itemQty, itemPrice });
    document.getElementById('total').innerHTML = `CURRENT TOTAL = ${thousandSeperator(String(sumTotal))}`;
    let rowLen = document.getElementById('itemTable').rows.length;
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = rowLen;
    cell2.innerHTML = items[items.length - 1].itemName;
    cell3.innerHTML = thousandSeperator(String(items[items.length - 1].itemQty));
    cell4.innerHTML = thousandSeperator(String(items[items.length - 1].itemPrice));
    document.getElementById('itemName').value = '';
    document.getElementById('itemQty').value = '';
    document.getElementById('itemPrice').value = '';
    }
  function clearCalculator() {
    sumTotal = 0;
    let table = document.getElementById('itemTable');
    let numberOfRow = table.rows.length
    for (let i = 1; i < numberOfRow; i++) {
      table.deleteRow(1);
    }
    items = []; 
    document.getElementById('total').innerHTML = `CURRENT TOTAL: ${sumTotal}`;
  }
  const calculateBtn = document.getElementById('calc-btn');
  calculateBtn.addEventListener("click", calculate, false);
  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener("click", clearCalculator, false);
}
