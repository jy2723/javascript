function getdata(dataid, getnextdata){
    setTimeout(() => {
        console.log("data",dataid)
        if (getnextdata){
            getnextdata()
        }
    }, 3000);
}

getdata(1, ()=>{
    getdata(2, ()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})