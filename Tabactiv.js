$(document).ready(function(){
  $('ul.header-nav li.header-list a').click(function(){
    $('li.header-list a').removeClass("active");
    $(this).addClass("active");
});
});

	