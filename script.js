let decimalBtn = document.getElementById("decimal"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

document.getElementById("container").addEventListener("click", function(e) {
    if(e.target && e.target.classList[0] === "number") {        
        numberPress(e.target.textContent);
    }
    if(e.target && e.target.classList[0] === "operator") {        
        operationPress(e.target.textContent);
        console.log(MemoryPendingOperation +"new");
    }
    if(e.target && e.target.classList[0] === "clear-btn") {        
        clear(e.target.textContent);
    }
    if(e.target && e.target.classList[0] === "dot"){
        decimal(e.target.textContent);
    }
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
    
