const add = (arg1,arg2,sum) =>{
    
    setTimeout(()=>{
        // sum of their squares 
        const  sqsum= arg1*arg1 + arg2*arg2
        sum(sqsum)
    },5000)
}

add(8,3,(sum)=>{
    console.log(sum)
})