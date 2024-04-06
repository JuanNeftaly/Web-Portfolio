// ejercicio guiado 

// variables y demas cosas papu
let numbers = null;
let plus = null;
let minus = null;
let multiply = null;
let divide = null;
let delet = null;
let reset = null;
let equal = null;
let displayText = null;
let historyList = null;
let operators = {};

// consas para tomar los elementos del HTML 
const bindElements = () => {
    numbers = document.querySelectorAll(".number");
    plus = document.querySelector("#plus");
    minus = document.querySelector("#minus");
    multiply = document.querySelector("#times");
    divide = document.querySelector("#divide");
    delet = document.querySelector(".delete-button");
    reset = document.querySelector(".reset-button");
    equal = document.querySelector(".equals-button");
    operators = {
        plus,
        minus,
        multiply,
        divide,
    };
    displayText = document.querySelector(".calculator-screen-text");
    historyList = document.querySelector(".history-list");
}

// funcion para poder ver si los datos son validos 
const checkError = () => {
    if (
        displayText.innerHTML === "Error" ||
        displayText.innerHTML === "Infinity" ||
        displayText.innerHTML === "undefined" ||
        displayText.innerHTML === "NaN"
    ) {
        return true;
    }
};

// funcion para calcular los dos numeros
const calculate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    };
}

// funcion para gestionar los errores 
const operateAndShow = () => {
    try {
        const firstNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[0];
        const secondNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[1];
        const operator = displayText.innerHTML.match(/[\+\-\*\/]/)[0];

        const result = calculate(
            parseFloat(firstNumber),
            parseFloat(secondNumber),
            operator
        );
        const roundedResult = Math.round(result * 10000) / 10000;

        if (!checkError()) {
            displayText.innerHTML = roundedResult;
        }

        if (!checkError()) {
            //This function must be added
            const historyItem = `${firstNumber} ${operator} ${secondNumber} = ${roundedResult}`;
            renderHistoryItem(historyItem);
            addHistoryItemToLocalStorage(historyItem);
        }

    } catch (e) {
        isplayText.innerHTML = "";
    }
};

// EJERCICIO PROPUESTO
const eliminatultimocaracter = () => {
    displayText.innerHTML = displayText.innerHTML.slice(0, -1);
}

// listeners para capturar eventos 
const addEventListeners = () => {

    // para iterar los numeros 
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            if (checkError()) {
                displayText.innerHTML = "";
            }
            displayText.innerHTML += number.innerHTML;

            const firstNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[0];
            const secondNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[1];

            if (firstNumber?.length > 9 || secondNumber?.length > 9) {
                eliminatultimocaracter()
            }

            if (firstNumber) {
                const dotsFirst = firstNumber.match(/\./g);
                if (dotsFirst && dotsFirst.length > 1) {
                    eliminatultimocaracter()
                }
            }

            if (secondNumber) {
                const dotsSecond = secondNumber.match(/\./g);

                if (dotsSecond && dotsSecond.length > 1) {
                    eliminatultimocaracter()
                }
            }

            for (const operator in operators) {
                operators[operator].addEventListener("click", () => {
                    if (!checkError() && displayText.innerHTML !== "") {
                        displayText.innerHTML += operators[operator].innerHTML;
                    }

                    const operatorsInDisplay = displayText.innerHTML.match(/[\+\-\*\/]/g);

                    if (operatorsInDisplay && operatorsInDisplay.length > 1) {
                        eliminatultimocaracter()
                    }
                });
            };

            delet.addEventListener("click", () => {
                if (!checkError()) {
                    eliminatultimocaracter()
                }
            });

            reset.addEventListener("click", () => {
                displayText.innerHTML = "";
            });

            equal.addEventListener("click", () => {
                operateAndShow();
            });

        });
    });
};

// renderizadores 
const renderHistoryItem = (item) => {
    const historyItem = document.createElement("li");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = item;

    if (!checkError()) {
        historyList.prepend(historyItem);
    }

    if (historyList.children.length > 9) {
        historyList.removeChild(historyList.lastChild);
    }
};

// Historial 
const getHistoryItemsFromLocalStorage = () => {
    const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];
    return historyItems;
};

// Añadir cosas al historial
const addHistoryItemToLocalStorage = (item) => {
    if (!checkError()) {
        const historyItems = getHistoryItemsFromLocalStorage();
        historyItems.push(item);
        if (historyItems.length > 9) {
            historyItems.shift();
        }
        localStorage.setItem("historyItems", JSON.stringify(historyItems));
    }
};

// mostrar cosas
const showStoredHistoryItems = () => {
    const historyItems = getHistoryItemsFromLocalStorage();
    historyItems.forEach((item) => renderHistoryItem(item));
};

// controlando diversas cuestiones de todo el programa
const main = () => {
    bindElements();
    addEventListeners();
    showStoredHistoryItems();
};

window.onload = main;