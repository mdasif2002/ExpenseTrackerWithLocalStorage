
function saveToLocalStorage(event){
    event.preventDefault();

    var amount = event.target.expenseamount.value;
    var description = event.target.description.value;
    var category = event.target.category.value;

    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('number',number);

    const obj ={
        amount,
        description,
        category
    }
    localStorage.setItem(obj.category,JSON.stringify(obj));
    showUserOnScreen(obj);

    

}

function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfItems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.amount + "-" + obj.description + "-" + obj.category;
    parentElement.appendChild(childElement)

    //create delete button
    var dltBtn = document.createElement('button');
    dltBtn.textContent='delete';
    childElement.appendChild(dltBtn)

    dltBtn.onclick=()=>{
        localStorage.removeItem(obj.category);
        parentElement.removeChild(childElement);
    }

    //create edit button
    var editBtn = document.createElement('button');
    editBtn.textContent='edit';
    childElement.appendChild(editBtn)

    editBtn.onclick =()=>{
        localStorage.removeItem(obj.category);
        parentElement.removeChild(childElement);
        document.getElementById('amount').value=obj.amount;
        document.getElementById('description').value=obj.description;
        document.getElementById('category').value=obj.category;
    }

    //getItems from local storage
    // var x = localStorage.getItem(obj.category);
    // document.getElementById('demo').innerHTML=x;
    
}