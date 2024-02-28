function addText(){
    console.log(textTextArea.value);
    addTr();
}
function addTr(){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td2.className = "hei";
    let img = document.createElement('img');
    img.src = "img/kvad.jpg";
    img.className = "img-table"
    let td_div = document.createElement('div');
    td_div.innerText = textTextArea.value;
    td1.append(img);
    td2.append(td_div)
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
}

buttonAddText.addEventListener("click", addText);