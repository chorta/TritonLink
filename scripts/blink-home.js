// Time based greeting code - moment.js dependent

function getGreetingTime (m) {
	var g = null; //return g

	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(m.format("HH"));

	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}

	return g;

}

/* USE */
    //The var "humanizedGreeting" below will equal (assuming the time is 8pm) "Good evening, James."
    var day = moment().format('dddd');
    var month = moment().format('MMMM');
		var dayNo = moment().format('D');
    // var user = ", Cristian";
    var humanizedGreeting = "Good " + getGreetingTime(moment()) + ".<br/>It's "+ day +", "+ month +"&nbsp;"+ dayNo +".";

    $("#personal-greeting").append(humanizedGreeting);




// Match Height - jquery-match-height dependent

$(".toolset-container").matchHeight({
  property: 'min-height'
});



// MyBlink Session


function jsonpCallback(jsonStr) {
        var json = JSON.parse(jsonStr);
        $('#_myblink_toolbox').html(json.message);


				// Show Popular on Blink if MyBlink is NOT Activate
				if (json.message.length > 243) {
					$('.toolset-link').hide();
				}
      }

function myBlinkLogout() {
    // delete cookie
    document.cookie = '_myblink_user=; Path=/; domain=.ucsd.edu; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    $.ajax({
      method: "GET",
      url: "https://act.ucsd.edu/myblink-client/bookmarks/j-logout.htm",
      dataType: "script"
    });

		$('#popular-onblink').show();
}


//Loop through featured news items and check for expired items

$(".featured-item").each(function (i) {

  //Global Date and Time Format
  var dateFormat = 'YYYY-MM-DD HH:mm';

  //Get Expiration Date Attribute from HTML
  var getDate = 0;
  var getDate = $(this).attr("expiration-date");

  //Ensure HTML Date Uses Moment Format 
  var expirationDate = moment(getDate, 'YYYY-MM-DD HH:mm');
  
  //Today's Date and Time
  var now = moment();
    
  //console.log(expirationDate, todayIs);

  var dateDiff = expirationDate.isBefore(now);

  //console.log("Date Expiration is " + expirationDate.format(dateFormat) +" - "+now.format(dateFormat)+ " - "+ dateDiff +" - ");
  

  //Remove item if item is expired
  
    if ( dateDiff === true ) {
        $(this).remove();
    }

});

//Loop news items after removing expired items
$(".featured-news > .featured-item").each(function (j) {
  
	//console.log("For each news item ",j++);
  
	var totalItems = j++;

	if (totalItems > 0 ) {
    $(this).remove();
	}

  

  });

//Loop through news items and check for expired items

$(".news-item").each(function (i) {

  //Global Date and Time Format
  var dateFormat = 'YYYY-MM-DD HH:mm';

  //Get Expiration Date Attribute from HTML
  var getDate = 0;
  var getDate = $(this).attr("expiration-date");

  //Ensure HTML Date Uses Moment Format 
  var expirationDate = moment(getDate, 'YYYY-MM-DD HH:mm');

  
  //Today's Date and Time
  var now = moment();
  
  
  //console.log(expirationDate, todayIs);

  var dateDiff = expirationDate.isBefore(now);
  

  //console.log("Date Expiration is " + expirationDate.format(dateFormat) +" - "+now.format(dateFormat)+ " - "+ dateDiff +" - ");
  

  //Remove item if item is expired
  
    if ( dateDiff === true ) {
        $(this).remove();
    }

});

//Loop news items after removing expired items

//count number of items queued up
var countItems = $(".news-col-1 >.news-item").length;

//console.log(countItems);

//subtract number of items with total allowed on the list
var cutOffno = countItems - 6;


//console.log(cutOffno);

$(".news-col-1 >.news-item").each(function (j) {
  
	//console.log("For each news item ",j++);
  
	var totalItems = j++;

  //hide all items before cutOffno

  $(this).hide();

	if (totalItems >= cutOffno ) {
    
    //show items after cutOffno
    
    $(this).show();
    console.log(totalItems);
	}

  

  });



  
  //console.log(eventCutOffno);


  $(".event").each(function (i) {

    //Global Date and Time Format
    var dateFormat = 'YYYY-MM-DD HH:mm';
  
    //Get Expiration Date Attribute from HTML
    var getDate = 0;
    var getDate = $(this).attr("expiration-date");
  
    //Ensure HTML Date Uses Moment Format 
    var expirationDate = moment(getDate, 'YYYY-MM-DD HH:mm');
    
    //Today's Date and Time
    var now = moment();
    
    
    //console.log(expirationDate, todayIs);
  
    var dateDiff = expirationDate.isBefore(now);
  
    //console.log("Date Expiration is " + expirationDate.format(dateFormat) +" - "+now.format(dateFormat)+ " - "+ dateDiff +" - ");
    
  
    //Remove item if item is expired
    
      if ( dateDiff === true ) {
          $(this).remove();
      }
  
  });
  
  var countEventItems = $(".events >.event").length;

  console.log(countEventItems);
  
  //subtract number of items with total allowed on the list
  var eventCutOffno = countEventItems - 3;
  
  console.log(eventCutOffno);

  //Loop news items after removing expired items
  $(".events >.event").each(function (j) {
    
    //console.log("For each news item ",j++);
    $(this).hide();
    var totalItems = j++;
  
    if (totalItems >= eventCutOffno ) {
    
      //show items after cutOffno
      
      $(this).show();
      //console.log(totalItems);
    }
  
  
    });

  
  /* Tools Button Toggle */

  $('#tools-nav-button > .glyphicon').click(function(){
    $(this).toggleClass('glyphicon-wrench glyphicon-remove rotate');
  });

// Footer Year

// var footerDate = moment().format('YYYY');
//
// $(".footer-copyright-year").append(footerDate);


