// //$.getJSON('https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY');
// // server waar we verbinding mee maken 
// // response is verstuurd in JSON
var globalData;
console.log(globalData);

$.getJSON('https://api.unsplash.com/users/ferranjay/collections/?client_id=c3d7b6f96322775c4eacc1f689002c62626db249ff12c1fa66acec94413c9594', function (data) {
    console.log(data);
    globalData = data;  // database response : slaat de data op in globalData om later fotos uit te plukken

    $.each(data, function (index, value) {  // we loopen door het pakket heen

        createButton(index, value.title);  // voor elk ding in het pakket maken we een knop , voeren we een functie uit en daarin geven we mee index en titel.

    });
});


function createButton(id, name) {
    console.log(id, name);
    $('.output').append('<button id="country' + id + '" type="button" class="btn btn-default" onclick="showShit(' + id + ')">' + name + '</button>');
}   // we maken een button die geven we een uniek id en een onclick functie en die geven we ook het unieke id mee.

function showShit(id) {
    $('.photoOutput').html('');  // we maken het ding leeg en vervangen het door deze info  ...dit doen we met de .append die we dus voor .html vervangen
    $.each(globalData[id].preview_photos, function (index, photo) {
        $('.photoOutput').append('<img class="photoOutput" src="' + photo.urls.small + '"/>');
    });
}

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}

