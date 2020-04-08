 $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.navbar').css("background-color", "rgba(0,0,0,0.9)")
        
        $('.navbar').css("transition", "1s")
    } else {
        $('.navbar').css("background-color", "rgba(0,0,0,0.4)")

        $('.navbar').css("transition", "1s")
    }
});

 function scrolling(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {

        var target = $(this.hash);

        if (target.length) {
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
        }

      });
    });

 }
 scrolling()
function iconButton(){
    const burguerKing = $('#btnHambuger')

    const burguerKing2  = $('#btnHambuger2')

    let state = 0
    burguerKing.click(()=>{
    	if (state === 0){
    		state = 1
             $('.menu').css('display', 'inline')
             $('.content-infor-header').css('z-index', '-1')
             burguerKing2.css('display', 'inline')
             burguerKing.css('display', 'none')
    		console.log('Abriu Navbar')
    	}
    	else if (state === 1){
    		state = 0
            $('.menu').css('display', 'none')
            $('.content-infor-header').css('z-index', '1')
            burguerKing2.css('display', 'none')
             burguerKing.css('display', 'inline')
            console.log('Fechou Navbar')
    	}
    })
      burguerKing2.click(()=>{
        if (state === 0){
            state = 1
             $('.menu').css('display', 'inline')
             $('.content-infor-header').css('z-index', '-1')
             burguerKing.css('display', 'inline')
             burguerKing2.css('display', 'none')
            console.log('Abriu Navbar')
        }
        else if (state === 1){
            state = 0
            $('.menu').css('display', 'none')
            $('.content-infor-header').css('z-index', '1')
            burguerKing2.css('display', 'none')
            burguerKing.css('display', 'inline')
            console.log('Fechou Navbar')
        }
    })

}

$('.large').click(()=>{
    window.location.href="https://github.com/MarcoSamuel"
})

window.load = function(){
    ScrollReveal().reveal('header', { delay: 700  })
    ScrollReveal().reveal('main', { delay: 700  })
    ScrollReveal().reveal('footer', { delay: 700  })
}
load()
iconButton()

