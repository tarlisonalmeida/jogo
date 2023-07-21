let area
let campo

let letras

let letra
let busca

let verificar

let c

let addLetras

let texto

let foto

let qtd1 = []
let qtd2 = []
let filmes4 = []
let v2 = ''
let v1 = ''

let imagem

let filmes = [
    {id: 1, nome: 'HOMEM ARANHA', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg'},
    {id: 2, nome: 'PLANETA DOS MACACOS', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/pt/c/c9/Planet_of_the_Apes_1968.jpeg'},
    {id: 3, nome: 'ATE O ULTIMO HOMEM', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg'},
    {id: 4, nome: "MATRIX", genero: "Ação/Ficção Científica", foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG'},
    {id: 5, nome: "INTERSTELLAR",genero: "Ficção Científica",foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png'},
    {id: 6, nome: "JURASSIC PARK",genero: "Ação/Aventura",foto: 'https://m.media-amazon.com/images/I/81GW8loPVJL._AC_UF1000,1000_QL80_.jpg'},
    {id: 7, nome: "AS BRANQUELAS",genero: "Ação/Aventura",foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg'},
    {id: 8, nome: 'O PODEROSO CHEFAO', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg'},
    {id: 9, nome: 'O MAGICO DE OZ', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/94/10/20287529.jpg'},
    {id: 10, nome: 'CIDADAO KANE', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/bzp/01/857.jpg'},
    {id: 11, nome: 'UM SONHO DE LIBERDADE', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg'},
    {id: 12, nome: 'TEMPO DE VIOLENCIA', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/16/32/19872655.jpg'},
    {id: 13, nome: 'CASABLANCA', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg'},
    {id: 14, nome: 'O PEDEROSO CHEFAO 2', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/93/27/20120933.jpg'},
    {id: 15, nome: 'O EXTRATERRESTRE', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/95/16/34/20384584.jpg'},
    {id: 16, nome: 'TITANIC', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg'},
    {id: 17, nome: 'TUBARAO', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/37/75/20093768.jpg'},
    {id: 18, nome: 'A MALVADA', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/27/19/20088949.png'},
    {id: 19, nome: 'A ORIGEM', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg'},
    {id: 20, nome: 'O FRANCO ATIRADOR', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/99/43/20123934.jpg'},
    {id: 21, nome: 'CAES DE ALUGUEL', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/15/03/19/17/47/301476.jpg'},
    {id: 22, nome: 'QUEM QUER SER UM MILIONARIO', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/18/75/20028641.jpg'},
    {id: 23, nome: 'A BELA E A FERA', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/76/31/20028593.jpg'},
    {id: 24, nome: 'DURO DE MATAR', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/88/20188922.jpg'},
    {id: 25, nome: 'QUASE FAMOSOS', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/90/96/20169238.jpg'},
    {id: 26, nome: 'OS SUSPEITOS', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/210/174/21017487_20130703212051766.jpg'},
    {id: 27, nome: 'CLUBE DOS CINCOS', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/pictures/210/100/21010003_20130603204213408.jpg'},
    {id: 28, nome: 'FURREST GUMP', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg'},
    {id: 29, nome: 'O SILENCIO DOS INOCENTES', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/14/10/07/22/16/591185.jpg'},
    {id: 30, nome: 'O REI LEAO', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg'},
    {id: 31, nome: 'GLADIADOR', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/44/GladiadorPoster.jpg/230px-GladiadorPoster.jpg'},
    {id: 32, nome: 'CORACAO SELVAGEM', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/00/72/19871036.jpg'},
    {id: 33, nome: 'O LABIRINTO DO FAUNO', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/14/49/19872468.jpg'},
    {id: 34, nome: 'OS SETE SAMURAIS', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sevensamurai-movieposter1954.jpg/640px-Sevensamurai-movieposter1954.jpg'},
    {id: 35, nome: 'SOMOS TAO JOVENS', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/05/50/20492816.jpg'},
    {id: 36, nome: 'TROPA DE ELITE', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg'},
    {id: 37, nome: 'O PESO DO TALENTO', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/22/03/10/18/06/3474189.png'},
    {id: 38, nome: 'O HOMEM DE ACO', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/pictures/210/057/21005782_20130514172205617.jpg'},
    {id: 39, nome: 'HOMEM DE FERRO', genero: 'AÇÃO', foto: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg'},
    {id: 40, nome: 'INVOCACAO DO MAL', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg'},
    {id: 41, nome: '12 ANOS DE ESCRAVIDAO', genero: 'AÇÃO', foto: 'https://br.web.img2.acsta.net/pictures/14/03/10/18/29/032627.jpg'},
    {id: 42, nome: 'FROZEN', genero: 'AÇÃO', foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4f/Frozen_2_poster.jpg/250px-Frozen_2_poster.jpg'},
]   

let qtdFilmes = filmes.length

let filmes2 = []
let filmes3 = []

document.querySelector('h3 strong').innerText = qtdFilmes

function criarArea () {
    area = document.querySelector('.area') 
    area.style.border = '2px solid blue' 
    area.style.width = 'auto'
    area.style.height = 'auto'
    area.style.margin = '10px'
    area.style.padding = ' 5px 10px'
    area.style.display = 'flex'
    area.style.flexWrap = 'wrap'
    area.style.alignItems = 'center'
    area.style.justifyContent = 'center'
    area.style.borderRadius = '10px'
}

function criarCampo1 (e=c) {
    campo = document.createElement('div')
    campo.classList.add('numero'+e)
    area.appendChild(campo)

    campo.style.display = 'flex'
    campo.style.alignItems = 'center'
    campo.style.justifyContent = 'center'
    campo.style.border = '1px solid #888'
    campo.style.width = '50px'
    campo.style.height = '50px'
    campo.style.fontSize = '30px'
    campo.style.margin = '5px'
    campo.style.borderRadius = '10px'
    campo.style.boxShadow = '1px 2px 1px red'
}

function criarCampo2 (e =c) {
    campo = document.createElement('div')
    campo.classList.add('numero'+e)
    campo.innerText = '-'
    area.appendChild(campo)

    campo.style.display = 'flex'
    campo.style.alignItems = 'center'
    campo.style.justifyContent = 'center'
    campo.style.width = '50px'
    campo.style.height = '50px'
    campo.style.margin = '10px'
}

function areaBusca () {
    letra = document.createElement('input')
    letra.type = 'Text'
    busca = document.querySelector('.buscar')
    texto = document.createElement('p')
    verificar = document.createElement('input')
    verificar.type = 'button'
    verificar.value = 'Verificar'
    verificar.id = 'verificar'
    texto.innerText = 'Digite uma letra'
    busca.append(texto)
    busca.appendChild(letra)
    busca.appendChild(verificar)

    busca.style.display = 'flex'
    busca.style.alignItems = 'center'

    texto.style.border = '1px solid #888'
    texto.style.padding = '1px 10px'
    texto.style.borderRadius = '3px'
    texto.style.backgroundColor = '#eee'

    verificar.style.width = '130px'
    verificar.style.height = '22px'

    letra.style.width = '50px'
    letra.style.height = '50px'
    letra.style.fontSize = '30px'
    letra.style.padding = '5px 10px'
    letra.style.margin = '0px 10px'
    letra.style.textAlign = 'center'
    letra.style.borderRadius = '10px'
    letra.style.border = '1px solid #888'
    letra.style.boxShadow = '1px 2px 1px red'
}

let quadro = document.querySelector('.barra #input1')

let item = document.querySelector('.barra #input2').addEventListener('click', () => {

    qtd1 = []
    filmes2 = []
    filmes3 = []
    filmes4 = []

    document.querySelector('.letras') .style.border = 'none'
    
    document.querySelector('.letras').innerText = ''
    for (i in filmes){

        letras = filmes[i].nome.split('')

        if (filmes[i].id == quadro.value){
            document.querySelector('.img').innerHTML = ''
            foto = filmes[i].foto

            criarArea()
            c = 0
            area.innerHTML = ""
            while (c < filmes[i].nome.length){

                if(letras[c] == ' '){
                    criarCampo2()
                    qtd2.push(letras[c])
                }else{
                    criarCampo1()
                    qtd1.push(letras[c])
                }
                filmes2.push(letras[c])
                c++
            }
            document.querySelector('.buscar').innerHTML = ''
            areaBusca()
            
        }
    }

    document.getElementById('verificar').addEventListener('click', () => {

        if(letra.value == ""){
            
        }else{
            let d = 0
            while(d < filmes2.length){
                let palavra = (letra.value).toUpperCase()

                addLetras = document.querySelector('.letras')    
                
                if(filmes4.indexOf(palavra) == -1){
                    addLetras.innerHTML += palavra + ' '
                    filmes4.push(palavra)
                    addLetras.style.border = '2px solid blue'
                }
                
                if(filmes2[d].indexOf(palavra) == 0){ 

                    let v5 = String(`div .numero${d}`)
                    let valor = document.querySelector(v5)
                    texto.innerText = 'Digite uma letra'
                    texto.style.border = '1px solid #888'

                    if(valor.innerText == ""){
                        valor.innerHTML = palavra
                        v1 = Number(qtd1.length)
                        v2 = filmes3.push(palavra) 
                    }
                                        
                    if(Number(v1 == v2)){

                        imagem = document.querySelector('.img')
                        let img = document.createElement('img')
                        img.src = foto
                        imagem.append(img)
                        alert('VOCÊ ACERTOU!!! PARABENS')

                        img.style.width = '200px'
                        img.style.height = '200px'
                        img.style.borderRadius = '50%'
                        img.style.boxShadow = '1px 5px 5px black'
                        img.style.marginTop = '15px'
                    }
                }
                d++                
            }
            
        }
        
        letra.value = ''
        letra.focus()
    } ) 
    
})


