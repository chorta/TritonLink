// desktop custom nav dropdown

$(".large-nav .dropdown-toggle").hover(function(){
  $(this).toggleClass("nav-hover");

});

$(".yamm-content li").hover(function(){
  $(this).parents(".list-unstyled").toggleClass("bg-blue");

  // finds current hovered nav and matches parent
  var navIndex = $(this).parents(".list-unstyled").index();
  $(".navbar-nav.btn-group .dropdown-toggle").eq(navIndex).toggleClass("nav-hover");

});


// desktop custom nav dropdown
var navHoverIn = function() {
    setTimeout(function(){
        var primaryNav = $(".main-nav");
        if (primaryNav.is(':hover')) {
            primaryNav.addClass("is-hover");
        }
    }, 500);
};

var navHoverOut = function() {
    $(".main-nav").removeClass("is-hover");
};

// expand mega nav
$(".main-nav").hover(navHoverIn, navHoverOut);

//Tab Navigation

$(".nav-group>a, #navbar-collapse-grid .navbar-nav li>a").on("focus",function(){

    $(".main-nav").addClass("is-hover");

});

$(".nav-group>a, #navbar-collapse-grid .navbar-nav li>a").on("blur",function(){

    $(".main-nav").removeClass("is-hover");

});

// Show and Hide Emergency Alert
$(".show-alert-emergency").on("click", function(){
  $(".main").css("padding-top", $(".navbar .alert").outerHeight());
  $( ".alert-danger" ).show();
});

$(".hide-alert-emergency").on("click", function(){
  $(".main").css("padding-top", "0px");
  $( ".alert-danger" ).hide();
});

// Show and Hide Weather Alert
$(".show-alert-weather").on("click", function(){
  $(".main").css("padding-top", $(".navbar .alert").outerHeight());
  $( ".alert-warning" ).show();
});

$(".hide-alert-weather").on("click", function(){
  $(".main").css("padding-top", "0px");
  $( ".alert-warning" ).hide();
});









// expand mega nav
// $(".main-nav").hover(function(){
//   $(this).toggleClass("is-hover");
// });

// var primaryNav = $('.main-nav');

// primaryNav.hover(function(){


// setTimeout(function() {
//    primaryNav.toggleClass("is-hover");
// }, 500);

// });

// $(".main-nav").hover(
//     function () {
//         var $this = $(this);

//         $this.addClass("hover");
//         setTimeout(function() {
//             $this.addClass("is-hover");
//         }, 00); // 2000 is in mil sec eq to 2 sec.
//     },
//     function () {
//         $(this).removeClass("hover is-hover");
//     }
// );


// highlight column when list item is hovered
// $(".main-nav .list-unstyled li").hover(function(){
//   // $(this).parents(".nav-group").toggleClass("bg-blue");

//   $(this).parents(".nav-group").children("a").toggleClass("bg-blue");
// });

// highlight column under main nav item when hovered and highlight column when list item is hovered
$(".nav-group").hover(function(){
  $(this).toggleClass("bg-blue");
  $(this).children("a").toggleClass("bg-blue");
});

// // make hover state active on parent anchor
//  $('.block-menu-block.block ul.menu li ul').hover (
//   function () {
//     $(this).parent('.expanded').children('a').addClass("dd-active");
//   },
//   function () {
//     $(this).parent('.expanded').children('a').removeClass("dd-active");
//   }
// );


$(".small-nav .navbar-btn .dropdown-toggle").click(function(){
$(".small-nav .navbar-btn .dropdown-toggle").not(this).removeClass("open");
$(this).attr("aria-expanded", "true").toggleClass("open");
// if ($(this).parents(".navbar-btn").hasClass("open")) {
//     $(this).toggleClass("open");
// }

});


// small nav - after click outside of nav menu close dropdown
$(document).mouseup(function (e)
{
    var container = $(".small-nav");
    // if the target of the click isn't the container...
    if (!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".navbar-collapse.collapse.in").collapse('hide');
    }
});


$(".search-icon.dropdown-toggle").click(
function(){
$(this).children().toggleClass("close-icon");

});

$(".navbar-toolbar-icon.navbar-toggle").click(
function(){
$(this).children().toggleClass("close-toolbar-icon");

}
// ,
// function(){
//   $(this).children().attr("src", "img/icon_search.png");
// }

);


// navbar expanding search field


 $(".navbar-form .search-icon.search-expand").on("click", function(){
   $("#inputSearch").removeClass("hidden").animate({
       opacity: 1,
       width: 300,
   }, 300);
   $(".input-search").removeClass("hidden").animate({
       opacity: 1,
       width: 300,
   }, 300);
   $(".navbar-search .radio-inline").removeClass("hidden").animate({
       opacity: 1,
   }, 300);
 });
 // code something to click out of search



$('.navbar-search .radio-inline input').click(function() {

  $('.radio-inline input:not(:checked)').parent('label').removeClass("radio-active");

  $('.radio-inline input:checked').parent('label').addClass("radio-active");

 // if($('.navbar-search .radio-inline input').is(':checked'))
 //   {
 //    $(".navbar-search .radio-inline").toggleClass("radio-active");
 //  }
});

// update input placeholder text on radio click
$('#searchFaculty, #searchFacultyMobile').click(function(){
  $("#q, .is-mobile").attr("placeholder", "Search Faculty/Staff");
});

$('#searchUCSD, #searchUCSDMobile').click(function(){
  $("#q, .is-mobile").attr("placeholder", "Search Blink");
});


function getParameterByName(name, url) {
if (!url) url = window.location.href;
name = name.replace(/[\[\]]/g, "\\$&");
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var entryParam = getParameterByName('q');
if (entryParam != undefined && entryParam !== '') {
// show the search element
setSearchValue(entryParam);
showSearchElement();
}
/*
function showSearchElement() {
if ($('.search-icon.visible-sm').css('display') == 'block') {
$('.dropdown-menu').css('display', 'block');
} else {
$("#inputSearch").removeClass("hidden").animate({
 opacity: 1,
 width: 300,
}, 300);

$(".input-search").removeClass("hidden").animate({
   opacity: 1,
   width: 300,
}, 300);
}


$(".navbar-search .radio-inline").removeClass("hidden").animate({
 opacity: 1,
}, 300);
}
*/

function setSearchValue(searchString) {
$('input[data-id="inputSearch"]').val(searchString);
$('input[data-id="inputSearchMobile"]').val(searchString);
}


function setSearch(searchType) {
  if (searchType == 'blink') {
    $('.search-form').attr('action', '/sandbox/search/index.html');
    $('.mobile-search-form').attr('action', '/sandbox/search/index.html');
    $('input[data-id="inputSearch"]').attr('id', 'q').attr('name', 'q');
    $('input[data-id="inputSearchMobile"]').attr('id', 'q').attr('name', 'q');

  } else if (searchType == 'directory') {
    $('.search-form').attr('action', 'https://act.ucsd.edu/directory/search');
    $('.mobile-search-form').attr('action', 'https://act.ucsd.edu/directory/search');
    $('input[data-id="inputSearch"]').attr('id', 'entry').attr('name', 'entry');
    $('input[data-id="inputSearchMobile"]').attr('id', 'entry').attr('name', 'entry');
  }
}

$(function(){
    $('#searchUCSD').click(function() {
        $("form").attr('action', '/sandbox/search/index.html');
    });

    $('#searchFaculty').click(function() {
        $("form").attr('action', 'https://act.ucsd.edu/directory/search');
        $('input[data-id="inputSearch"]').attr('id', 'entry').attr('name', 'entry');
    });
});

$("#q").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-icon-button").click();
    }
});

function submitForm(e) {
    if (window.location.pathname === '/search/index.html') {
          
          $('.search-form').submit();

    } else {
  var term = $('input[data-id="inputSearch"]').val();

  if (term == "" && $('input[data-id="inputSearch"]')[2] !== undefined) {
    if (!$('input[data-id="inputSearch"]')[2].classList.contains('hidden') && $.trim($('input[data-id="inputSearch"]')[2].value) !== "") {
        //$('input[data-id="inputSearch"]')[2].value = $('input[data-id="inputSearch"]')[2].value;
        //$('input[data-id="inputSearch"]')[2].setAttribute('name', 'q');
        $('.search-form').submit();
      }

  } else if (term == "" && $('input[data-id="inputSearch"]')[1] !== undefined) {
    if (!$('input[data-id="inputSearch"]')[1].classList.contains('hidden') && $.trim($('input[data-id="inputSearch"]')[1].value) !== "") {
        $('input[data-id="inputSearch"]')[1].value = $('input[data-id="inputSearch"]')[1].value;
        //$('input[data-id="inputSearch"]')[1].setAttribute('name', 'search-term');
        $('.search-form').submit();
      }

  } else {
    if (!$('input[data-id="inputSearch"]').hasClass('hidden') && $.trim($('input[data-id="inputSearch"]').val()) !== "") {
        $('input[data-id="inputSearch"]')[0].value = $('input[data-id="inputSearch"]')[0].value;
        //$('input[data-id="inputSearch"]')[0].setAttribute('name', 'entry');
        $('.search-form').submit();
      }
  }
      }


}

function submitMobileForm() {
  var term = $('input[data-id="inputSearchMobile"]').val();

  if (term == "" && $('input[data-id="inputSearchMobile"]')[1] !== undefined) {
    if (!$('input[data-id="inputSearchMobile"]')[1].classList.contains('hidden') && $.trim($('input[data-id="inputSearchMobile"]')[1].value) !== "") {
        $('input[data-id="inputSearchMobile"]')[1].value = $('input[data-id="inputSearchMobile"]')[1].value;
        $('input[data-id="inputSearchMobile"]')[1].setAttribute('name', 'q');
        $('.mobile-search-form').submit();
      }
  } else {
    if (!$('input[data-id="inputSearchMobile"]').hasClass('hidden') && $.trim($('input[data-id="inputSearchMobile"]').val()) !== "") {
        $('input[data-id="inputSearchMobile"]')[0].value = $('input[data-id="inputSearchMobile"]')[0].value;
        $('input[data-id="inputSearchMobile"]')[0].setAttribute('name', 'q');
        $('.mobile-search-form').submit();
      }
  }

}

$('.mobile-search-icon').each(function(a) {
  $(a).on('click', function() {
      submitMobileForm();
    });
});

$($('.mobile-search-icon')[0]).on('click', function() {
  submitMobileForm();
});


$('.expand_accordion').click(function() { /* Expand all/collapse all function */
     if ($(this).hasClass('accordion_expanded')) {
     $('.expand_accordion').each(function (i) {
             $(this).removeClass("accordion_expanded");
             $(this).html("Expand all");
             $('.accordion h2').removeClass('head_expanded').next().hide();
         });
     }

     else {
       $('.expand_accordion').each(function (i) {
             $(this).addClass("accordion_expanded");
             $(this).html("Collapse all");
             $('.accordion h2').addClass('head_expanded').next().show();
         });
     };
     window.location.hash = '';
     return false;
 });

 function expander() {
     $('.accordion_body').hide();
     var hashCheck = window.location.hash
     if (hashCheck) {
         $('.accordion h2').each(function(index) {
             if (hashCheck == '#'+ $(this).find('a').text().replace(/\s/g,'-').substring(0,31)) {
                 $(this).addClass('head_expanded').next().show();
                 var newPosition = $(this).offset();
                 setTimeout(function() {
                     window.scrollTo(0, newPosition.top);
                 }, 50);
             };
         });
     };
 };

 $('#tdr_content_content a[href*="#"]').click(function() {
     var targetURL = $(this).attr("href").split('#');
     if (String(targetURL[targetURL.length-2]).length == 0) { /* Ensure that the link goes to an anchor on the same page*/
         var targetLetter = targetURL[1].substring(0,31);
         var hashLetter = '- '+ targetLetter.replace(/\s/g,'').toUpperCase() + ' -';
         $('.accordion h2').each(function () {
             targetDrawer = $(this).find('a').text().replace(/\s/g, '-').substring(0,31);
             if ($(this).find('a').text() == hashLetter || targetDrawer == targetLetter) {
                 $('.accordion h2').removeClass('head_expanded').next().hide();
                 $(this).addClass('head_expanded').next().show();
                 var newPosition = $(this).offset();
                 window.scrollTo(newPosition.left,newPosition.top);
             };
         });
     };
 });

 $(window).bind('load', expander);

 $('.faq_question').click(function() {
$(this).next().toggle();

window.location.hash = $(this).text().replace(/\s/g,'-').substring(0,31);
return false;
}).next().hide();

function faq_expander() {
$('.blink_faq_content').hide();
var hashCheck = window.location.hash;
if (hashCheck) {
 $('.faq_question').each(function(index) {
   if (hashCheck == '#'+ $(this).text().replace(/\s/g,'-').substring(0,31)) {
     $(this).next().toggle();
     var newPosition = $(this).offset();
     setTimeout(function() {
         window.scrollTo(0, newPosition.top);
     }, 50);
   };
 });
};
};

$(window).bind('load', faq_expander);

$('.faq_expand_all').click(function() {

if($(this).hasClass('faq_all_expanded')) {
 $('.faq_all_expanded').each(function (i) {
       $(this).removeClass("faq_all_expanded");
       $(this).html("Expand all");
 });

 $('.faq_question').next().hide();
 $('.faq_expand_some').removeClass("faq_some_expanded");
 $('.faq_expand_some').html("Expand section");
} else {
 $('.faq_expand_all').each(function (i) {
   $(this).addClass("faq_all_expanded");
   $(this).html("Collapse all");
 });
 $('.faq_question').next().show();
 $('.faq_expand_some').addClass("faq_some_expanded");
 $('.faq_expand_some').html("Collapse section");
};
return false;
});

$('.faq_expand_some').click(function() {
if($(this).hasClass('faq_some_expanded')) {
 $(this).removeClass("faq_some_expanded");
 $(this).html("Expand section");
 $('.faq_question.'+$(this).attr('rel')).next().hide();
} else {
 $(this).addClass("faq_some_expanded");
 $(this).html("Collapse section");
 $('.faq_question.'+$(this).attr('rel')).next().show();
};

return false;
});

// get system status from statuspage.io
$.ajax({
    timeout: 5000,
    url: 'https://vl1y9mn0nbkh.statuspage.io/api/v2/status.json',
    dataType: 'json',
    success: statusCallback,
    error: function (x, t, m) {
        if (t === 'timeout') {
            var html = 'All systems and services are available. See <a href="http://status.ucsd.edu/">status.ucsd.edu</a> for more information.';
            jQuery('.system-status').addClass('allclear');
            jQuery('.system-status-message').html(html);
        }
    }
});

function statusCallback(data) {

var status = data.status.indicator;

if (status === 'critical' || status === 'major') {
    var html = '<a href="http://status.ucsd.edu/">Some systems are unavailable.</a>';
    jQuery('.status-indicator').addClass('warning');
    jQuery('.system-status-message').html(html);

} else if (status === 'minor') {
    var html = '<a href="http://status.ucsd.edu/">Some systems moderately impacted.</a>';
    jQuery('.status-indicator').addClass('issue');
    jQuery('.system-status-message').html(html);

} else {
    // default to green
    var html = '<a href="http://status.ucsd.edu/">All Services are operating normally.</a>';
    jQuery('.status-indicator').addClass('allclear');
    jQuery('.system-status-message').html(html);
}
}
