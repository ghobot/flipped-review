$( document ).ready(function() {
    //in points array
    var inPoints = new Array();
    

    //create popcorn instance
    
    
    
    //find all in-points in table and make array
   
    //getInPoints();
   
   var pop = Popcorn("#main");

    pop.play();
    $('#metadata').removeClass('hide');
    
var ready = pop.readyState();    
    if (ready==4){
        
    
    }
    
   if ($(".header").not()) {
       $("tr:not(.header)").click(function() {
           var time = $('td:eq(3)',this).html();
           console.log("time: " + time);
           // var type = jQuery.type(time);
           //console.log("type: " + type);
           var time2 = time.split(/:(.+)?/)[1];
           pop.currentTime("00:17:08");
            console.log("time2: " + time2);
        });
    
   }
function popcornVideo (){
   
   
}
    
    
function getInPoints(){
    
    //Iterate all td's in second column
    $('#metadata tbody tr td:nth-child(4)').each( function(){
       //add item to array
       inPoints.push( $(this).text() );       
    });
   console.log("inpoints: " + inPoints);
}    

// listen for click events
    
//    
    
});