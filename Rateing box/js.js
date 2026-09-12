let rate = document.getElementById("rate");
rate.innerHTML=`
    <h2 id="emoji"></h2>
    <h1 id="text">Give us rating</h1>
`;

let text = document.getElementById("text")
let emoji = document.getElementById("emoji");

let stars = document.querySelectorAll("#stars button");

stars.forEach((btn,index) => {
    btn.addEventListener("click", () => {
       
        stars.forEach(star => {
            star.querySelector("i").style.color = "#ccc";
        });


        for(let y = index; y >= 0; y--){
            stars[y].querySelector("i").style.cssText=`
                color:#E8BD27;
            `;
        }

        if(btn.value === "Very poor"){
            emoji.textContent = "";
            emoji.textContent += "😔";
        }

        if(btn.value === "Poor"){
            emoji.textContent = "";
            emoji.textContent += "🙁";
        }

        if(btn.value === "Good"){
            emoji.textContent = "";
            emoji.textContent += "🙂";
        }

        if(btn.value === "Very good"){
            emoji.textContent = "";
            emoji.textContent += "🤩";
        }

        if(btn.value === "Excellent"){
            emoji.textContent = "";
            emoji.textContent += "🥰";
        }

        
        text.textContent = "";
        text.textContent += btn.value;

    });
});