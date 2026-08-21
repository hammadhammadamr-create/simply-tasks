let btns = document.querySelectorAll("#btn_calculator div button");
let text = document.getElementById("text");
let answer = document.getElementById("answer");


let nums = [];

let result = 0;

btns.forEach(btn =>{
   

    btn.addEventListener("click",()=>{
        text.innerHTML = "";
        answer.innerHTML = "";

        if(btn.textContent !== "del"){
            nums.push(btn.textContent);
        }

        opration(btn);

        for(let i = 0; i<nums.length; i++){
            text.innerHTML += `
                <p>${nums[i]}</p>
            `;
        }

    })
})

function opration (item){
    if(item.textContent === "+" || item.textContent === "-" || item.textContent === "*" || item.textContent === "/"){
        console.log(nums)
    }else if(item.textContent === "C"){
        nums = [];
        text.innerHTML = "";
    }else if(item.textContent === "del"){
        nums.pop();
    }else if(item.textContent === "="){
        nums.pop();
        result = eval(nums.join(""));
        answer.innerHTML = `
            <p>${result}</p>
        `;
        return
    }

}


