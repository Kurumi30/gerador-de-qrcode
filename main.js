const generate = document.querySelector("#generate")
const qrCode = document.querySelector(".qr-code")
const mainButton = document.querySelector("#mainButton")
const content = document.querySelector("#content")

generate.addEventListener("click", function () {
  const content = document.querySelector("#content").value
  const finalURL = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(content)}&chs=200x200&chld=L|0`;

  if (content === "" || content === null) {
    alert("Preencha o campo!")
    return
  }

  qrCode.src = finalURL

  clear()
})

const clear = () => {
  const clearButton = document.createElement("button")

  clearButton.setAttribute("class", "btn btn-default")
  clearButton.setAttribute("id", "clear")
  clearButton.textContent = "Limpar"

  mainButton.append(clearButton)

  clearButton.addEventListener("click", () => {
    content.value = ""
    clearButton.remove()
  })
}

/*function htmlEncode(value) {
  const div = document.createElement("div")
  div.textContent = value
  return div.innerHTML
}*/
