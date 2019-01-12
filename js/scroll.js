$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene  = new ScrollMagic.Scene({
        triggerElement:'#div-contenedor2',
        offset:0
    })
    .setClassToggle('.h1-servicios','fade-in')
    .addIndicators()
    .addTo(controller);
});
