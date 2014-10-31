$( document ).ready(function() {
    //in points array
    //var inPoints = new Array();
    var framerate = 23.98;
   
     //create popcorn instance  
   var pop = Popcorn("#main", { 
        "frameAnimation": true,      
        "framerate": framerate 
        });
    popcornVideoFootnotes(pop);
    pop.play();
   
    
    $('#metadata').removeClass('hide');
    
    var ready = pop.readyState();    
    if (ready==4){
    }
    
   if ($(".header").not()) {
        $("tr:not(.header)").click(function() {
            var time = $('td:eq(3)',this).text();
            var timeInSeconds = convertSeconds(time,framerate);
            pop.currentTime(timeInSeconds);
        });   
   }

function popcornVideoFootnotes(popcorn){ //for every row, create a popcorn footnote
    
   $('#metadata tbody tr').each(function(){    
            var start = $('td:nth-child(4)', this).html(),
                end = $('td:nth-child(5)', this).html(),
                question = $('td:nth-child(3) pre', this).html(),
                target = $('#question span');

            //console.log(start+", "+end+", "+question);

            popcorn.footnote({
                start: convertSeconds(start, framerate),
                end: convertSeconds(end, framerate),
                text: question,
                target: "target"        
            });  
})
//console.log("footnotes created");   
}

function convertSeconds(time,framerate) {
    var array = time.split(':');
    var frames = Number(array[3]) , seconds = Number(array[2]) , minutes = Number(array[1]),  hours = Number(array[0]);  
    var convertedSeconds = frames/framerate + seconds + 60*minutes + 3600*hours;    
    return convertedSeconds;
}    
    
    
//function getInPoints(){
//    
//    //Iterate all td's in second column
//    $('#metadata tbody tr td:nth-child(4)').each( function(){
//       //add item to array
//       inPoints.push( $(this).text() );       
//    });
//   console.log("inpoints: " + inPoints);
//}    

    
})