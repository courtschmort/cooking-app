
function toLiters (gallons) {
return gallons / 0.26417;
};

function toGrams (ounces) {
  return ounces * 28.3495;
};



$(document).ready(function() {
  $('form#galLiters').submit(function(event) {
    event.preventDefault();
    var gallons = parseInt($('#galLiters-input').val());
    var result = toLiters(gallons).toFixed(2);
    $('#galLiters-output').text(result + " liters");
  });
  $('form#toOunces').submit(function(event) {
    event.preventDefault();
    var ounces = parseInt($('#ounceGrams-input').val());
    var result = toGrams(ounces).toFixed(2);
    $('#ounceGrams-output').text(result + " Grams");
  });
});
