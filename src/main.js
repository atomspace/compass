// var alphaCountMain = $(window).on('deviceorientation', function(jqevent){
//     var event = jqevent.originalEvent;
//     var alphaCount = (event.alpha);
//     // var spinPart = $('.spinPart');
//     // spinPart.css('transform','rotate('+alphaCount+'deg)');
//     // var degreeValue = $('.degreeValue');
//     // degreeValue.html( Math.round(alphaCount) + '°');
//     console.log(alphaCount);
//     return alphaCount;
// })

// function handleDeviceOrientation(event){
//     var heading = getCompassHeading(event);
//     var direction = getDirection(heading);
//     setDirection(direction);
//     setAngle(heading);
//     rotateCompass(heading);
// }


// function findNaD(degrees){
//     switch(degrees){
//         case (degrees >= 338 && degrees <= 360 || degrees <= 22 && degrees >= 0):
//             return N;
//         case (degrees >= 23 && degrees <= 67):
//             return NE;
//         case (degrees >= 68 && degrees <= 112):
//             return E;
//         case (degrees >= 113 && degrees <= 157):
//             return ES;
//         case (degrees >= 158 && degrees <= 202):
//             return S;
//         case (degrees >= 203 && degrees <= 247):
//             return SW;
//         case (degrees >= 248 && degrees <= 293):
//             return W;
//         case (degrees >= 294 && degrees <= 337):
//             return WN;
           
//     }

// }



// var readyName = findNaD(alphaCountMain)

// $(".direction").html(readyName);

// $(window).on('deviceorientation', handleDeviceOrientation)
$(window).on('deviceorientation', function(jqevent){
    var event = jqevent.originalEvent;
    var alphaCount = (event.alpha);

    var realDeg = converter(alphaCount)
    
    var realName = findName(realDeg)


    var spinPart = $('.spinPart');
    spinPart.css('transform','rotate('+alphaCount+'deg)');
 
    var direction = $('.direction')
    direction.html(realName)

    var degreeValue = $('.degreeValue');
    degreeValue.html( realDeg + '°');


    // console.log(alphaCount);
    // console.log(realName);
    // console.log(realDeg);
})

function converter(deg){
    if (deg <= 0 && deg > -360){
        return Math.abs(Math.round(deg));
    }
    else if (deg > 0 && deg < 360 ){
        return (360 - Math.round(deg));
    }


}

function findName(degrees){
    if (degrees >= 338 && degrees <= 360 || degrees <= 22 && degrees >= 0 || degrees >= -338 && degrees <= -360 || degrees <= -22 && degrees >= 0)
        return "N";            
    else if (degrees >= 23 && degrees <= 67 || degrees >= -23 && degrees <= -67){
        return "NE";
    }
    else if (degrees >= 68 && degrees <= 112 || degrees >= -68 && degrees <= -112){
        return "E";
    }
    else if (degrees >= 113 && degrees <= 157 || degrees >= -113 && degrees <= -157){
        return "ES";
    }
    else if (degrees >= 158 && degrees <= 202 || degrees >= -158 && degrees <= -202){
        return "S";
    }
    else if (degrees >= 203 && degrees <= 247 || degrees >= -203 && degrees <= -247){
        return "SW";
    }
    else if (degrees >= 248 && degrees <= 293 || degrees >= -248 && degrees <= -293){
        return "W";
    }
    else if (degrees >= 294 && degrees <= 337 || degrees >= -294 && degrees <= -337){
        return "WN";
    }   
    

}
