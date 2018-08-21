
// can edit the basics when i undstand why this wont run
// $(document).ready(function()
// game winning number
var random = Math.floor(Math.random() * 101 + 19);
// to give random values to the images
var randomValue = Math.floor(Math.random() * 11 + 1);
// make sure we dont get 2 of the same values not sure where to implement this
var newrandom = Math.floor(Math.random() * randomValue + 1);
// store our random values im not sure if i need this
var selectedValue = [];
// keeps wins number
var wins = 0;
// keeps losses
var losses = 0;

function gamestart() {
$(".Number").text('you must mine ' + random + ' crystals');
// sets our mined crystals back to 0
var minedstart = 0;
// create our 4 images with 4 random values
for (var i = 0; i < 4; i++) {

    var image = $("<img>");

    image.addClass('crystals');

    image.attr('src', '../images/crystal.jpg')

    image.attr('crystalValue', randomValue);

    $('.images').append('.crystals');
}}
// core of the game, on clicks add our random values to the total until you get the goal or bust
// please god have "this" work. this should refer to .crystals
$('.crystals').on('click', function(){
var amount =  $(this).attr('crystalValue')
var mined = minedstart+amount;

$('.Number').append('<p>crystals mined '+ mined+' </p>');
if (mined === random){
wins ++;
return gamestart();
}
else {
    losses ++
    return gamestart();

}
});


gamestart();
