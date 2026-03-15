let arry_produtos = []

let produtoInput = document.getElementById('produto')
let valor_do_produto_Input = document.getElementById('valor_do_produto')
let quantidade_Input = document.getElementById('quantidade')
let totalFinal = document.getElementById('total')
let adicionarBnt = document.getElementById('adicionar')
let valor_total = document.getElementById('valor_total')
let lista = document.getElementById('produto_e_valor')
let mensagem = document.getElementById('mensagem')

function mostrarMgsDeErro(texo, tipo) {
    mensagem.innerText = texo
    mensagem.className = 'mensagem-erro ' + tipo
    mensagem.style.display = 'block'

    setTimeout(() => {
        mensagem.style.display = 'none'
    }, 3000)
}
function adicionar() {
    if (produtoInput.value == '' || valor_do_produto_Input.value == '' || quantidade_Input.value == '') {
        mostrarMgsDeErro('⚠️ Preencha todos os campos corretamente!', 'erro')
    } else {

        let produto = produtoInput.value
        let preco = valor_do_produto_Input.value
            .replace(/\./g, '')
            .replace(',', '.')
        preco = Number(preco)
        let quantidade = Number(quantidade_Input.value)

        let sub_total = preco * quantidade

        let novoProduto = {
            produto: produto,
            preco: preco,
            quantidade: quantidade,
            sub_total: sub_total
        }


        arry_produtos.push(novoProduto)

        let option = document.createElement('option')
        option.text = `Produto: ${produto} | R$: ${preco} | Qtd: ${quantidade} | Subtotal: R$ ${sub_total}`

        //appendChild => Coloque esse option como filho do lista//
        lista.appendChild(option)
        produtoInput.value = ''
        valor_do_produto_Input.value = ''
        quantidade_Input.value = ''

        total()
    }

}

function total() {
    /*reduce() é um método de array que serve para:
    Transformar vários valores em um único valor final.
    Vários subtotais ➝ Um total geral.*/
    let somaDePerco = arry_produtos.reduce(function (acc, valorAtual) {
        return acc + valorAtual.sub_total
    }, 0)
    valor_total.innerText = somaDePerco.toFixed(2)
}