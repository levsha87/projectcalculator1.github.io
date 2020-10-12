let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-btn"),
    decimalBtn = document.getElementById("decimal"),
    result = document.getElementById("result"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e){
        numberPress(e.target.textContent);
    });
};

for(let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
        operationBtn.addEventListener("click", function(e){
            operationPress(e.target.textContent);
    });
};

for(let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
        clearBtn.addEventListener("click", function(e){
        clear(e.target.textContent);
    });
};

decimalBtn.addEventListener("click", decimal);

result.addEventListener("click", function(e){
    console.log("Клик по result")
});

function numberPress(number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        };
    };
    console.log(typeof number);
};

function operationPress(op) {
        localOperationMemory = display.value;
        
        if(MemoryNewNumber && MemoryPendingOperation !== "=") {
            display.value = MemoryCurrentNumber;
        } else {
            MemoryNewNumber = true;
            switch(MemoryPendingOperation) {
                case '+': 
                MemoryCurrentNumber += +localOperationMemory;
                break;
                case '-': 
                MemoryCurrentNumber -= +localOperationMemory;
                break;
                case '*': 
                MemoryCurrentNumber *= +localOperationMemory;
                break;
                case '/': 
                MemoryCurrentNumber /= +localOperationMemory;
                break;
                default: 
                MemoryCurrentNumber = +localOperationMemory;
                };       
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op;
        }
        /*if(MemoryCurrentNumber===Infinity ||isNaN(MemoryCurrentNumber)){
                display.value = 'Error: divide by zero';
            }; */
        if(MemoryPendingOperation === '/'&& MemoryCurrentNumber === 0){
            display.value = 'Error: divide by zero';
        }
  };
    
    function decimal(argument) {
        let localDecimalMemory = display.value;
        
        if(MemoryNewNumber) {
            localDecimalMemory = "0.";
            MemoryNewNumber = false;
        } else {
            if(localDecimalMemory.indexOf(".") === -1) {
                localDecimalMemory += "."
            }
        };
        display.value = localDecimalMemory;
        console.log("Клик по " )
    };

    function clear(id) {
        if(id === "ce") {
            display.value = "0" // здесь строка? или число?
            MemoryNewNumber = true;
        } else if(id === "c") {
            display.value = "0" 
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0,
            MemoryPendingOperation = "";
        }
    };

