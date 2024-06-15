const apiKey = 'your_api_key_here';
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount-input');
const convertButton = document.getElementById('convert-button');
const resultDisplay = document.getElementById('result-display');

convertButton.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);
    if (amount && from && to) {
        convertCurrency(from, to, amount);
    }
});

async function convertCurrency(from, to, amount) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
    const data = await response.json();
    const rate = data.conversion_rates[to];
    const convertedAmount = amount * rate;
    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}
