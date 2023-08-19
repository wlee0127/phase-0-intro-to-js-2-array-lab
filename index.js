// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    
    let newArr = [].concat(cats,name);
    return newArr;
    
}

function prependCat(name){
    let newArr = [].concat(name,cats);
    return newArr;
    //console.log(newArr)
}

function removeLastCat(){
    let newArr = [...cats];
    //console.log(newArr)
    newArr.pop();
    //console.log(newArr, cats);
    return newArr;
}

function removeFirstCat(){
    let newArr = [...cats];
    newArr.shift();
    return newArr;
}
//removeLastCat()