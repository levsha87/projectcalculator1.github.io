let decimalBtn = document.getElementById("decimal"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

document.getElementById("container").addEventListener("click", function(e) {
    switch(e.target.classList[0]){
        case "number": 
        numberPress(e.target.textContent);
        break;
        case "operator": 
        operationPress(e.target.textContent);
        break;
        case "clear-btn": 
        clear(e.target.textContent);
        break;
        case  "dot":
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
       let localOperationMemory = display.value;       
        
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
                if(MemoryPendingOperation === "/" && localOperationMemory === "0"){
                    MemoryCurrentNumber = "Error divided by zero";
                }
                break;
                
                default:
                MemoryCurrentNumber = +localOperationMemory;
                };  
                
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op;
            
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
    
