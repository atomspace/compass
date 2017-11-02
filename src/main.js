var alphaCountMain = $(window).on('deviceorientation', function(jqevent){
    var event = jqevent.originalEvent;
    var alphaCount = (event.alpha);
    return alphaCount;
})

function findNaD(degrees){
    switch(degrees){
        case (degrees >= 338 && degrees <= 22):
            return N;
        case (degrees >= 23 && degrees <= 67):
            return NE;
        case (degrees >= 68 && degrees <= 112):
            return E;
        case (degrees >= 113 && degrees <= 157):
            return ES;
        case (degrees >= 158 && degrees <= 202):
            return S;
        case (degrees >= 203 && degrees <= 247):
            return SW;
        case (degrees >= 248 && degrees <= 293):
            return W;
        case (degrees >= 294 && degrees <= 337):
            return WN;
           
    }

}
