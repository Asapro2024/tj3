function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
function togglesign(){
    const result = document.getElementById("result")
    let currentValue = parseFloat(result.value);
    currentValue = currentValue 
    * -1;
    result.value = currentValue;
}
