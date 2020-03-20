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

    css.innerHTML = `seletor-css<br>{<br>
                     border-top-left-radius: ${superiorEsquerdo.value}px;<br>
                     border-bottom-left-radius: ${inferiorEsquerdo.value}px;<br>
                     border-top-right-radius: ${superiorDireito.value}px;<br>
                     border-bottom-right-radius: ${inferiorDireito.value}px;<br>}`
 
                    }   
}
