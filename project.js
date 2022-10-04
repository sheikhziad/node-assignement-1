const prom = new Promise((resolve,reject)=>{
    try {
        resolve('success')
    } catch {
        reject('failure')
    }
})

prom.then((val)=>{
    console.log(`Condition : ${val}`)
},(err)=>{
    console.log(`Condition : ${val}`)
})