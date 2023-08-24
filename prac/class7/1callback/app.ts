function func(callback:()=>void){
    callback()
}

function callback(){
    console.log("hello")
}

func(callback)