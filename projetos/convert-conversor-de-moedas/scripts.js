// Cotação de moedas do dia.
const USD = 0.50
const EUR = 6.10
const GBP = 6.70

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Faz o cálculo do valor inserido de acordo com a cotação.
    let total = amount * price

    if (isNaN(total)) {
      return alert("Por favor, difgite o valor corretamente para converter")
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Nao funfou")
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}