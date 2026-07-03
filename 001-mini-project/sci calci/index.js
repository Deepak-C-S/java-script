const result = document.getElementById("result");

function display(value) {
    if (result.value === "Error") {
        result.value = "";
    }

    result.value += value;
}

function clearScreen() {
    result.value = "";
}

function backspace() {
    if (result.value === "Error") {
        result.value = "";
        return;
    }

    result.value = result.value.slice(0, -1);
}

function evaluateExpression(expression) {
    const normalizedExpression = expression
        .replace(/π/g, "Math.PI")
        .replace(/\be\b/g, "Math.E")
        .replace(/\^/g, "**")
        .replace(/%/g, "/100");

    const scope = {
        sin: (value) => Math.sin((Number(value) * Math.PI) / 180),
        cos: (value) => Math.cos((Number(value) * Math.PI) / 180),
        tan: (value) => Math.tan((Number(value) * Math.PI) / 180),
        log: (value) => Math.log10(Number(value)),
        ln: (value) => Math.log(Number(value)),
        sqrt: (value) => Math.sqrt(Number(value))
    };

    return Function("scope", "with (scope) { return " + normalizedExpression + "; }")(scope);
}

function calculate() {
    if (!result.value) {
        return;
    }

    try {
        result.value = evaluateExpression(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function insertConstant(symbol) {
    if (result.value === "Error") {
        result.value = "";
    }

    result.value += symbol;
}

function applyUnary(operation) {
    if (!result.value || result.value === "Error") {
        return;
    }

    try {
        const value = Number(evaluateExpression(result.value));
        let output = value;

        if (operation === "sin") {
            output = Math.sin((value * Math.PI) / 180);
        } else if (operation === "cos") {
            output = Math.cos((value * Math.PI) / 180);
        } else if (operation === "tan") {
            output = Math.tan((value * Math.PI) / 180);
        } else if (operation === "sqrt") {
            output = Math.sqrt(value);
        } else if (operation === "square") {
            output = value ** 2;
        } else if (operation === "inverse") {
            output = 1 / value;
        }

        result.value = output;
    } catch (error) {
        result.value = "Error";
    }
}