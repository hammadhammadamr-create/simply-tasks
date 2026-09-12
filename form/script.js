let parent_card = document.getElementById("parent");
let score = document.getElementById("score");
let next = document.getElementById("next");
let back = document.getElementById("back");
let submit = document.getElementById("submit");

let question_cards = [
    {
        title: "Which HTML tag is used to create a hyperlink?",
        choices: [
            "A) <link>",
            "B) <a>",
            "C) <href>",
            "D) <url>"
        ],
        answer: "B) <a>"
    },

    {
        title: "Which HTML tag is used to display an image?",
        choices: [
            "A) <picture>",
            "B) <image>",
            "C) <img>",
            "D) <src>"
        ],
        answer: "C) <img>"
    },

    {
        title: "Which CSS property is used to change the text color?",
        choices: [
            "A) background-color",
            "B) font-size",
            "C) color",
            "D) text-style"
        ],
        answer: "C) color"
    },

    {
        title: "Which value enables Flexbox on an element?",
        choices: [
            "A) display: grid;",
            "B) display: flex;",
            "C) position: flex;",
            "D) flex: display;"
        ],
        answer: "B) display: flex;"
    },

    {
        title: "Which function is used to print a message to the browser console?",
        choices: [
            "A) print()",
            "B) console.log()",
            "C) show()",
            "D) alert.log()"
        ],
        answer: "B) console.log()"
    },

    {
        title: "What is the output of the following code?\n\nlet x = 10;\nlet y = 5;\nconsole.log(x + y);",
        choices: [
            "A) 105",
            "B) 15",
            "C) 50",
            "D) Error"
        ],
        answer: "B) 15"
    },

    {
        title: "Which method is used to select an element by its ID?",
        choices: [
            "A) querySelectorAll()",
            "B) getElementById()",
            "C) getElement()",
            "D) findElement()"
        ],
        answer: "B) getElementById()"
    },

    {
        title: "Which condition will print 'Hello' if age = 20?",
        choices: [
            "A) age < 18",
            "B) age == 20",
            "C) age != 20",
            "D) age > 30"
        ],
        answer: "B) age == 20"
    }
];

let i = 0;
let correct_answer = 0;
let selectedButton = null;
let check = "";
let userAnswers = [];
let submitted = [];

function displaycards() {
    parent_card.innerHTML = "";

    parent_card.innerHTML = `
        <h2 class="question">
            <span class="num">${i + 1}.</span>
            ${question_cards[i].title}
        </h2>

        <div class="choices">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    `;

    btns();

    if (userAnswers[i]) {
        check = userAnswers[i];

        let buttons = document.querySelectorAll(".choices button");

        buttons.forEach((button) => {
            if (button.textContent === userAnswers[i]) {
                selectedButton = button;
                button.style.cssText = `
                    color: white;
                    background-color: #c94aff;
                    border: 1px solid #c94aff;
                    box-shadow: 0 4px 25px #c94aff8c;
                `;
            }
        });

        if (submitted[i]) {
            buttons.forEach((button) => {
                if (button.textContent === question_cards[i].answer) {
                    button.classList.add("true");
                }
            });

            if (userAnswers[i] !== question_cards[i].answer) {
                selectedButton.classList.add("false");
            }
        }
    }

    updateButtons();
}

function btns() {
    let buttons = document.querySelectorAll(".choices button");

    buttons.forEach((btn, index) => {
        btn.textContent = question_cards[i].choices[index];

        btn.addEventListener("click", () => {
            if (submitted[i]) {
                return;
            }

            check = btn.textContent;
            selectedButton = btn;
            userAnswers[i] = check;

            buttons.forEach((button) => {
                button.style.cssText = `
                    color: black;
                    background-color: white;
                    border: 1px solid black;
                    box-shadow: none;
                `;
            });

            btn.style.cssText = `
                color: white;
                background-color: #c94aff;
                border: 1px solid #c94aff;
                box-shadow: 0 4px 25px #c94aff8c;
            `;
        });
    });
}

submit.addEventListener("click", () => {
    if (!selectedButton) {
        alert("Please select an answer");
        return;
    }

    if (submitted[i]) {
        return;
    }

    submitted[i] = true;

    if (check === question_cards[i].answer) {
        selectedButton.classList.remove("false");
        selectedButton.classList.add("true");
        correct_answer++;
    } else {
        selectedButton.classList.add("false");

        let buttons = document.querySelectorAll(".choices button");

        buttons.forEach((button) => {
            if (button.textContent === question_cards[i].answer) {
                button.classList.add("true");
            }
        });
    }

    scre();
});

next.addEventListener("click", () => {
    if (i < question_cards.length - 1) {
        i++;
        selectedButton = null;
        check = "";
        displaycards();
    }

    updateButtons();
});

back.addEventListener("click", () => {
    if (i > 0) {
        i--;
        selectedButton = null;
        check = "";
        displaycards();
    }

    updateButtons();
});

function updateButtons() {
    if (i === 0) {
        back.style.display = "none";
    } else {
        back.style.display = "block";
    }

    if (i === question_cards.length - 1) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
}

function scre() {
    score.innerHTML = `
        <h2>${correct_answer}/${question_cards.length}</h2>
    `;
}

displaycards();
scre();
