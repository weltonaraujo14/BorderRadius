function gerar() {

    
    let $ = document.querySelector.bind(document);

    let area = $('#area');

    let css = $('#css');

    let superiorEsquerdo = $('.superior-esquerdo');

    let inferiorEsquerdo = $('.inferior-esquerdo');

    let superiorDireito = $('.superior-direito');

    let inferiorDireito = $('.inferior-direito');

    if(superiorEsquerdo.value.length == 0 && inferiorEsquerdo.value.length == 0 && superiorDireito.value.length == 0 && inferiorDireito.value.length == 0){
        css.innerHTML = "Preencha os campos para saber o tamnho das bordas"
    }
    else{
    area.style.borderTopLeftRadius = `${superiorEsquerdo.value}px `;
    area.style.borderBottomLeftRadius = `${inferiorEsquerdo.value}px`;
    area.style.borderTopRightRadius = `${superiorDireito.value}px`;
    area.style.borderBottomRightRadius = `${inferiorDireito.value}px`;

    css.classList.add('visivel');
    css.innerHTML = `Seletor-CSS<br>{<br>
                     ⠀⠀Border-Top-Left-Radius: ${superiorEsquerdo.value}px;<br>
                     ⠀⠀Border-Bottom-Left-Radius: ${inferiorEsquerdo.value}px;<br>
                     ⠀⠀Border-Top-Right-Radius: ${superiorDireito.value}px;<br>
                     ⠀⠀Border-Bottom-Right-Radius: ${inferiorDireito.value}px;<br>}`
 
                    } 
 
}
