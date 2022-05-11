setTimeout(()=>{
    console.log("2 second time is up")
},2000)

const names =['hiamnshu', 'priyanshu','Anuj']

const sortNames = names.filter((name)=>{
    return name.length <= 4
})

const geoCode = (address, callBack) =>{
    setTimeout(() =>{
       const data ={
         latitude: 899,
         longitude: 4334
     } 
     callBack(data)
    },8000)
     
}
geoCode('India',(data2)=>{
    console.log(data2)
})
