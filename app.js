
const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,8],
    [0,4,8],
    [2,4,6]
]

let trun = true;
document.querySelectorAll(".box").forEach((ele)=>{
    ele.addEventListener("click", ()=>{
       if(trun){
        ele.innerText = "X";
        trun = false;
       }
       else{
        ele.innerText = "O";
        trun = true;
       }
       ele.disabled = true;
       check();
    });
});

const check = () =>{
    arr.forEach((ele)=>{
        let val1 = document.querySelectorAll(".box")[ele[0]].innerText;
        let val2 = document.querySelectorAll(".box")[ele[1]].innerText;
        let val3 =  document.querySelectorAll(".box")[ele[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                document.querySelector(".msg").innerText = `Winner is ${val1}`
                disabled();
            }
        }
        
    })
}

const disabled = () =>{
    document.querySelectorAll(".box").forEach((e)=>{
        e.disabled = true;
    })
}

const reset = ()=>{
    trun = true;
    document.querySelector(".msg").innerText = "";
    enable();
}

const enable = () =>{
    document.querySelectorAll(".box").forEach((e)=>{
        e.disabled = false;
        e.innerText = "";
    })
}
document.querySelector(".reset").addEventListener("click", reset)