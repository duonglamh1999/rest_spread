const filterOdds = (...num)=> num.filter( n=> n%2===0);
const findMid = (...nums)=> nums.reduce((min,curr)=> curr<min? curr:min)
const mergeObjects= (obj1,obj2)=> ({...obj1,...obj2})
const doubleAndReturn = (arr,...follow) => [...arr,...follow.map(i=> i*2)]
const removeRandom = (items) =>{ let idx = Math.floor(Math.random() * items.length);
return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend= (arr1,arr2)=> [...arr1,...arr2]
const addKeyval = (obj,key,val)=> {let newobj= {...obj}
newobj[key]=val
return val}
const removeKey = (obj,key)=> {
    let newObj ={...obj};
    delete newobj[key];
    return newObj;
}
const combine =(obj1,obj2)=> ({...obj1,...obj2})
const update = (obj,key,val){
    let newobj= {...obj}
newobj[key]=val
return val
}