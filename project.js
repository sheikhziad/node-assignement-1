const prom = new Promise((resolve,reject)=>{
    let x = 10;
    if(x>5){
        resolve('success');
    }else{
        reject('failure')
    }
})

prom.then((val)=>{
    console.log(`Condition : ${val}`)
},(err)=>{
    console.log(`Condition : ${val}`)
})