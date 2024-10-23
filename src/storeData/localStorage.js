
// find our data in local storage 

let localData = () => {
    let ourLocalData = localStorage.getItem('cart');
    if (ourLocalData) {
        let ourData = JSON.parse(ourLocalData);
        return ourData
    }
    return []
}

let setDataInLocalStorage = (data) =>{
    let addLocalStorage = JSON.stringify(data);
    localStorage.setItem('cart' , addLocalStorage)
}

let addMyDataInLoaalStorage = (myData) => {
    let oldData = localData();
    oldData.push(myData);
    setDataInLocalStorage(oldData)
}

export {addMyDataInLoaalStorage,setDataInLocalStorage,localData}

