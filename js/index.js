'use strict';

/* on  button press, get value
-store value 
-present value in li

*/

var btn = document.querySelector('.plus');
var input = document.querySelector('.input');
var ulist = document.querySelector('.ulist');
var arr = [];

function add() {
  console.log(input.value);

  //create li
  if (input.value != "") {
    var node = document.createElement("li");

    ulist.append(node);
    $(node).append('<p>' + input.value + '</p><span>x</span><br>');
  }

  $('.input').val('');
}

$(document).on('click', 'span', function () {
  $(this).closest('li').remove();
});

ulist.addEventListener('click', function (ev) {

  if (ev.target.tagName === 'P') {
    ev.target.classList.toggle('marked');
  }
}, false);

//events for adding list items
$(btn).click(add);
$(document).keypress(function (e) {
  if (e.which === 13) {
    add();
  }
});