function home_redirect() {
    location.href = "index.html"
}

function game_redirect() {
    location.href = "game_instance.html"
}

function hintShow() {
    document.getElementById("hints").classList.toggle("show");
    }
window.onclick = function(event) {
    if (!event.target.matches('.card_button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}

function rulesShow() {
    document.getElementById("rules").classList.toggle("index_show");
    }
window.onclick = function(event_r) {
    if (!event_r.target.matches('.rules_button')) {
        var dropdowns_r = document.getElementsByClassName("dropdown-cntt");
        var i;
        for (i = 0; i < dropdowns_r.length; i++) {
            var openDropdown_r = dropdowns_r[i];
            if (openDropdown_r.classList.contains('index_show')) {
            openDropdown_r.classList.remove('index_show');
        }
    }
}
}
function flipping(imgId) {
    var portrait = document.getElementById(imgId);
    if(portrait.style.opacity == 0) {
        document.getElementById(imgId).style.opacity = 1;
    }
    else{
        document.getElementById(imgId).style.opacity = 0;
    }
}

let lewis_on = 0;
function lewisChange() {
    if(lewis_on == 0){
        document.getElementById("lewis_frame").style.display = "inline"
        document.getElementById("frame_button").innerHTML = "3D"
        lewis_on = 1
    }else if(lewis_on == 1){
        document.getElementById("lewis_frame").style.display = "none"
        document.getElementById("frame_button").innerHTML = "Lewis"
        lewis_on = 0
    }
}

function card_selector() {
    randint = Math.floor(Math.random() * 24);
    if(randint == 0){
        document.getElementById("user_mol_name").innerHTML = "Hidrogênio (H<sub>2</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=783"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_0.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui uma geometria molecular linear;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula possui apenas dois elétrons;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula diatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Seu átomo central não é definido;"
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Oxigênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Desenhar a estrutura de Lewis..."
    }else if(randint == 1){
        document.getElementById("user_mol_name").innerHTML = "Ácido Cianídrico (HCN)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=768"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_1.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Carbono como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por três elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Carbono em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular linear."

    }else if(randint == 2){
        document.getElementById("user_mol_name").innerHTML = "Dióxido de Enxofre (SO<sub>2</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=1119"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_2.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui enxôfre como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: Possui uma geometria molecular angular;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Não possui Carbono em sua composição;"
        document.getElementById("hint_5").innerHTML = "Dica 5: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: A molécula é composta por dois elementos químicos diferentes."

    }else if(randint == 3){
        document.getElementById("user_mol_name").innerHTML = "Dióxido de Carbono (CO<sub>2</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=280"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_3.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Possui geometria molecular Linear;"
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Carbono como átomo central."
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Oxigênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Desenhar a estrutura de Lewis..."

    }else if(randint == 4){
        document.getElementById("user_mol_name").innerHTML = "Oxigênio (O<sub>2</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=977"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_4.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Não possui Carbono em sua composição;"
        document.getElementById("hint_2").innerHTML = "Dica 2: Possui geometria molecular Linear;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula diatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui átomo central definido;"
        document.getElementById("hint_7").innerHTML = "Dica 7: A molécula é composta por um elemento químico."

    }else if(randint == 5){
        document.getElementById("user_mol_name").innerHTML = "Água (H<sub>2</sub>O)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=962"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_5.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Oxigênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Carbono em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Angular."

    }else if(randint == 6){
        document.getElementById("user_mol_name").innerHTML = "Fluoreto de Nitrosila (NOF)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=123261"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_6.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Nitrogênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por três elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Angular."

    }else if(randint == 7){
        document.getElementById("user_mol_name").innerHTML = "Difluoreto de Oxigênio (OF<sub>2</sub>)"
        document.getElementById("user_mol_name").style.fontSize = "35px"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=24547"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_7.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Oxigênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Flúor em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Não possui geometria molecular Linear."

    }else if(randint == 8){
        document.getElementById("user_mol_name").innerHTML = "Ácido Sulfídrico (H<sub>2</sub>S)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=402"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_8.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Enxofre como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula triatômica;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Fósforo em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Angular."

    }else if(randint == 9){
        document.getElementById("user_mol_name").innerHTML = "Cloreto de Tionila (SOCl<sub>2</sub>S)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=24386"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_9.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Enxofre como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por três elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Cloro em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Piramidal."

    }else if(randint == 10){
        document.getElementById("user_mol_name").innerHTML = "Amônia (NH<sub>3</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=222"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_10.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Nitrogênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Carbono em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Piramidal."

    }else if(randint == 11){
        document.getElementById("user_mol_name").innerHTML = "Tricloreto de Fósforo (PCl<sub>3</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=24387"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_11.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Fósforo como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Fósforo em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Piramidal."

    }else if(randint == 12){
        document.getElementById("user_mol_name").innerHTML = "Fosfito (PO<sub>3</sub>)<sup>-3</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&smiles=[P-](=O)([O-])[O-]"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_12.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Fósforo como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Oxigênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Piramidal."

    }else if(randint == 13){
        document.getElementById("user_mol_name").innerHTML = "Hidrônio (H<sub>3</sub>O)<sup>+</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=123332"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_13.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Oxigênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Oxigênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Piramidal."

    }else if(randint == 14){
        document.getElementById("user_mol_name").innerHTML = "Nitrato (NO<sub>3</sub>)<sup>+</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=943"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_14.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Nitrogênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Trigonal Plana."

    }else if(randint == 15){
        document.getElementById("user_mol_name").innerHTML = "Fluoreto de Boro (BF<sub>3</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=6356"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_15.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Boro como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Flúor em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Trigonal Plana."

    }else if(randint == 16){
        document.getElementById("user_mol_name").innerHTML = "Carbonato (CO<sub>3</sub>)<sup>-2</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=19660"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_16.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Carbono como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Oxigênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Trigonal Plana."

    }else if(randint == 17){
        document.getElementById("user_mol_name").innerHTML = "Fosfogênio (COCl<sub>2</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=6371"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_17.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Carbono como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por três elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Cloro em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Trigonal Plana."

    }else if(randint == 18){
        document.getElementById("user_mol_name").innerHTML = "Borano (BH<sub>3</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=6331"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_18.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Boro como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por quatro átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Carbono em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Hidrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Trigonal Plana."

    }else if(randint == 19){
        document.getElementById("user_mol_name").innerHTML = "Metano (CH<sub>4</sub>)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=297"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_19.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Carbono como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por cinco átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Boro em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Carbono em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Tetraédrica."

    }else if(randint == 20){
        document.getElementById("user_mol_name").innerHTML = "Amônio (NH<sub>4</sub>)<sup>+</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=223"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_20.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Nitrogênio como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por cinco átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Carbono em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Tetraédrica."

    }else if(randint == 21){
        document.getElementById("user_mol_name").innerHTML = "Sulfato (SO<sub>4</sub>)<sup>-2</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=1117"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_21.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Enxofre como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por cinco átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Hidrogênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Tetraédrica."

    }else if(randint == 22){
        document.getElementById("user_mol_name").innerHTML = "Tetrafluorborato (BF<sub>4</sub>)<sup>-</sup>"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=26255"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_22.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Boro como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por dois elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por cinco átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Oxigênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Possui Flúor em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Tetraédrica."

    }else if(randint == 23){
        document.getElementById("user_mol_name").innerHTML = "Clorometano (CH<sub>3</sub>Cl)"
        document.getElementById("frame_3d").src = "https://embed.molview.org/v1/?mode=balls&cid=6327"
        document.getElementById("lewis_frame").src = "./src/card_images/lewis_structures/lewis_23.webp"
        document.getElementById("hint_1").innerHTML = "Dica 1: Possui Carbono como átomo central;"
        document.getElementById("hint_2").innerHTML = "Dica 2: A molécula é composta por três elementos químicos diferentes;"
        document.getElementById("hint_3").innerHTML = "Dica 3: É uma molécula composta por cinco átomos;"
        document.getElementById("hint_4").innerHTML = "Dica 4: Desenhar a estrutura de Lewis..."
        document.getElementById("hint_5").innerHTML = "Dica 5: Não possui Oxigênio em sua composição;"
        document.getElementById("hint_6").innerHTML = "Dica 6: Não possui Nitrogênio em sua composição;"
        document.getElementById("hint_7").innerHTML = "Dica 7: Possui geometria molecular Tetraédrica."

    }else{
        document.getElementById("user_mol_name").innerHTML = "Null"
        document.getElementById("frame_3d").src = "null"
        document.getElementById("hint_1").innerHTML = "Dica 1: "
        document.getElementById("hint_2").innerHTML = "Dica 2: "
        document.getElementById("hint_3").innerHTML = "Dica 3: "
        document.getElementById("hint_4").innerHTML = "Dica 4: "
        document.getElementById("hint_5").innerHTML = "Dica 5: "
        document.getElementById("hint_6").innerHTML = "Dica 6: "
        document.getElementById("hint_7").innerHTML = "Dica 7: "

    }
}
