// for categories list
$(document).ready(function() {
  $(".list-toggle").on('click', function(e){
    e.preventDefault();
    $(this).next().toggle();
    $(this).find('.icon').toggleClass('plus');
    $(this).find('.icon').toggleClass('minus');
  });
});

// for sidebar navigation
$(document).ready(function() {
  // hide all forms except first one
  $(".d-toggle").not('#add-category').css('display', 'none');
  // toggle forms from sidebar menu
  $(".sidebar-d-toggle").on('click', function(e) {
    e.preventDefault();
    $(this).siblings('.sidebar-d-toggle').removeClass('active-item');
    $(this).addClass('active-item');
    var id = $(this).children('a')[0].text.toLowerCase().replace(/ /g, "-");
    $('.d-toggle').not('#'+id).css('display', 'none');;
    $('#'+id).css('display', 'block');
  });
});

// get products of category using ajax
// $.ajax({
//   url: 'https://mohityadav7.github.io/estore/json/catgory-1-products.json',
// })
// .done(function(data) {
//   console.log("success");
//   console.log(data);
//   var productColumn = $(".product-column").html();
//   console.log(productColumn);
//   products = data.products;
//
//   for (var i = 0; i < products.length; i++) {
//     $('#products-row').append(productColumn);
//   }
//
//   for (var i = 0; i < products.length; i++) {
//     $(".product-column")[0];
//
//     if(i != products.length - 1)
//
//   }
// })
// .fail(function() {
//   console.log("error");
// })
// .always(function() {
//   console.log("complete");
// });



// for number of products form (increment/decrement)
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
