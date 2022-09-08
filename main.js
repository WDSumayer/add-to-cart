let itemArray = [];
console.log(itemArray)
const addListButton = element =>{
    element.disabled = true;
    element.classList.remove('bg-primary');
    element.classList.add('disable-btn')
    const itemName = element.parentNode.children[0].innerText;
    const itemPrice = element.parentNode.children[1].children[0].innerText;
    
    const itemObject = {
        itemName : itemName,
        itemPrice : itemPrice,
    }
    itemArray.push(itemObject);
    let totalPrice = 0;
    const itemListContainer = document.getElementById('item-list-container');
    itemListContainer.textContent = '';
    const itemPriceTotal = document.getElementById('item-total-price');
    for(let i = 0; i < itemArray.length; i++){
        const item = itemArray[i];
        totalPrice = totalPrice + parseFloat(item.itemPrice);
        itemPriceTotal.innerText = totalPrice;
       const tr = document.createElement('tr');
       tr.innerHTML = `
       <td class="fs-5">${i + 1}</td>
       <td class="text-center fs-5">${item.itemName}</td>
       <td class="text-end fs-5">${parseFloat(item.itemPrice)}</td>
       <td onclick="itemRemove(this)" class="delete-btn">Delete</td>
       `
       itemListContainer.appendChild(tr);
    }
    
}




const itemRemove = (element) =>{
    element.parentNode.remove();
    const getButtons = document.getElementsByTagName('button');
    const fixedData = (element.parentNode.children[1].innerText);
    for(const button of getButtons){
        const buttonText = (button.parentNode.children[0].innerText);
        if(buttonText === fixedData){
            button.disabled = false;
            button.classList.add('bg-primary');
            button.classList.remove('disable-btn')
        }
    }
    
    let totalPrice = 0;
    const itemPriceTotal = document.getElementById('item-total-price');
    for(let i = 0; i < itemArray.length; i++){
        const item = itemArray[i];
       if(item.itemName === fixedData){
       const index = itemArray.indexOf(item);
       if (index > -1) { // only splice array when item is found
            itemArray.splice(index, 1); // 2nd parameter means remove one item only
            const itemListContainer = document.getElementById('item-list-container');
            itemListContainer.textContent = '';
            for(let i = 0; i < itemArray.length; i++){
                const item = itemArray[i];
                totalPrice = totalPrice + parseFloat(item.itemPrice);
                itemPriceTotal.innerText = totalPrice;
               const tr = document.createElement('tr');
               tr.innerHTML = `
               <td class="fs-5">${i+1}</td>
               <td class="text-center fs-5">${item.itemName}</td>
               <td class="text-end fs-5">${parseFloat(item.itemPrice)}</td>
               <td onclick="itemRemove(this)" class="delete-btn">Delete</td>
               `
               itemListContainer.appendChild(tr);
            }











          }
        
    }
} 



//     const fixedData = (element.parentNode.children[1].innerText);
//     const removedData = itemArray.indexOf(fixedData);
   
//    console.log(removedData)
   
    // if (removedData > -1) { // only splice array when item is found
    //     array.splice(removedData, 1); // 2nd parameter means remove one item only
    //   }
    //   console.log(itemArray)

    // }
}



