let slideout = () => {
    let tiles = $('.button').toArray();
    for (let key in tiles) {
        switch ($(tiles[key]).attr("data-button")) {
            case "linkedin":
                $($(tiles[key])).css("transform", "translate(-40vw)");
                break;
            case "github":
                $($(tiles[key])).css("transform", "translate(-80vw)");
                break;
            case "resume":
                $($(tiles[key])).css("transform", "translate(-100vw)");
                break;
            default:
                $($(tiles[key])).css("transform", "translate(100vw)");
                break;
        }
    }
};

let slidein = () => {
    let tiles = $('.button').toArray();
    for (let key in tiles) {
        setTimeout
        $($(tiles[key])).css("transform", "");

    }
};


$(document).ready(function () {
    // Scroll down to show footer on an`droid
    setTimeout( () => {
        window.scrollTo(0,1)
    }, 200);

    $('.page').fadeOut(0);
    slideout();
    setTimeout(() => {
        $('.page').fadeIn(200);
        slidein();
    }, 300);


    $('a').click( (event) => {
        event.preventDefault();
        const newLoc = event.currentTarget.href;
        slideout();
        setTimeout( ()=> {
            $('.page').fadeOut(200);
            window.location = newLoc;
        }, 300);
    });
});


$('.page').fadeOut(0);