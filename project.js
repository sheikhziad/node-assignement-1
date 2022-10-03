const prom = new Promise((resolve,reject)=>{
    resolve('success')
    reject('failure')
})

prom.then((val)=>{
    console.log(`Condition : ${val}`)
},(err)=>{
    console.log(`Condition : ${val}`)
})