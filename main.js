const configGaleria = {
    type : "carousel",
    perView : 3,
    breakpoints : {
        1750: {
            perView : 2
        },
        1150: {
            perView : 1
        }
    },
    autoplay : 3000
}

new Glide('.glide', configGaleria).mount()

$(()=>{
    let burguer = $('#hamburguer')
    let btFechar = $('#close-menu')
    let menu = $('#menu-lateral')

    burguer.click(function(){
        menu.removeClass('esconder')
        menu.addClass('mostrar')
    })

    btFechar.click(function(){
        menu.removeClass('mostrar')
        menu.addClass('esconder')
    })

    $('.opcao').click(()=>{
        menu.removeClass('mostrar')
        menu.addClass('esconder')
    })
})