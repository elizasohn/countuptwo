$(document).ready(function() {
  $("form.counting").submit(function(event) {
  event.preventDefault();
    var x = parseInt($("input#countingupto").val());
    var y = parseInt($("input#countingby").val());
console.log();
  for (var i = 0; i <= x; i += y){
      if (y > x) {
        alert("please stop it");
      }else if (x == NaN || y == NaN) {
        alert("ugh");
      }
console.log(i);
    }





});

});
