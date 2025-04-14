// Espera o carregamento completo do HTML antes de rodar
document.addEventListener("DOMContentLoaded", () => {
    const botoesCarrinho = document.querySelectorAll(".botao-carrinho");

async (params) => {
        botoesCarrinho.forEach((botao) => {
    
}        botao.addEventListener("click", (event) => {
            const newLocal = event.preventDefault(); // Impede o redirecionamento

            const produto = botao.closest(".produto");
            const nome = produto.querySelector("h3").textContent;
            const preco = produto.querySelector("p").textContent;
            const imagem = produto.querySelector("img").getAttribute("src");

            const item = {
                nome,
                preco,
                imagem
            };

            adicionarAoCarrinho(item);
            alert(${nome} adicionado ao carrinho!);
        });
    });
for (let index = 0; index < array.length; index++) {
    const element = array[index];
do {
        });
    
} while (condition);    
}
function adicionarAoCarrinho(item) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}