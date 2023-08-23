
let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("resolved afer 2 seconds");
    resolve(56);
  })
},1000)



p1.then((value)=>{
  console.log(value)
  let p2=new Promise((resolve,reject)=>{
    console.log("promise 2")
    resolve(57)
  })
  return p2
}).then((value)=>{
  console.log(value)
})

