document.addEventListener("DOMContentLoaded", () => {
    const tweetsDiv = document.getElementById("Tweets");
    const kanyeImage = document.getElementById("kanyeImage");
    const button = document.getElementById("newTweetButton");

    // URLs das imagens
    const image1 = "https://s2-quem.glbimg.com/K-yI9SyCb5HzQjx51LpbfU8azfI=/48x0:568x520/fit-in/636x520/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/c/p/mt8TzETbqajAy0gKKK2A/2021-01-07-kanye-west.jpeg";
    const image2 = "https://s2-quem.glbimg.com/K-yI9SyCb5HzQjx51LpbfU8azfI=/48x0:568x520/fit-in/636x520/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/c/p/mt8TzETbqajAy0gKKK2A/2021-01-07-kanye-west.jpeg"; // Substitua por outra URL de imagem

    let currentImage = image1;

    // Função para buscar uma frase da API
    function fetchKanyeQuote() {
        fetch("https://api.kanye.rest")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar a frase");
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                // Atualiza o conteúdo do div com a frase
                tweetsDiv.textContent = `"${data.quote}"`;

                // Alterna a imagem
                currentImage = currentImage === image1 ? image2 : image1;
                kanyeImage.src = currentImage;
            })
            .catch(error => {
                console.error("Erro:", error);
                tweetsDiv.textContent = "Erro ao carregar a frase.";
            });
    }

    // Chama a função para buscar a frase ao carregar a página
    fetchKanyeQuote();

    // Adiciona o evento de clique ao botão
    button.addEventListener("click", fetchKanyeQuote);
});