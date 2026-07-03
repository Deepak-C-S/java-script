const amountInput = document.getElementById('amount')
const taxRateInput = document.getElementById('taxRate')
const currentDisplay = document.getElementById('current')
const taxAmountDisplay = document.getElementById('taxAmount')
const totalDisplay = document.getElementById('total')
const resetBtn = document.getElementById('resetBtn')

function calculateTax() {
    const amount = parseFloat(amountInput.value) || 0
    const taxRate = parseFloat(taxRateInput.value) || 0

    const taxAmount = (amount * taxRate) / 100
    const total = amount + taxAmount

    currentDisplay.textContent = '₹' + amount.toFixed(2)
    taxAmountDisplay.textContent = '₹' + taxAmount.toFixed(2)
    totalDisplay.textContent = '₹' + total.toFixed(2)
}

function resetCalculator() {
    amountInput.value = 0
    taxRateInput.value = 10
    calculateTax()
}

amountInput.addEventListener('input', calculateTax)
taxRateInput.addEventListener('input', calculateTax)
resetBtn.addEventListener('click', resetCalculator)

calculateTax()
