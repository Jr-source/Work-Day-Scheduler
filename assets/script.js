$(function() { 
    
    const currentMoment= moment(); 
    
    let now = currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    console.log (now) ; 
    
    let dateDisplay =  $("#currentDay"); 
    dateDisplay.text(now);
    
    let currentHour = parseInt(currentMoment.format("H")); 
    
    console.log( currentHour ) ; 
    
    
        for (let hourIndex = 9; hourIndex <= 18; hourIndex++){
            
            const currentHourIndex = $(`#hours${hourIndex}`).data('hour'); 
            
            if ( currentHour > currentHourIndex ) { 
                $(`#hours${hourIndex}`).addClass("past"); 
            }
            else if ( currentHour == currentHourIndex ) { 
                $(`#hours${hourIndex}`).addClass("present"); 
            }
            else if ( currentHour < currentHourIndex ) { 
                $(`#hours${hourIndex}`).addClass("future"); 
            }
    
        }
        for ( let eventIndex = 9; eventIndex <= 18; eventIndex++){
            let savedEvent = localStorage.getItem(`hour-${eventIndex}`); 
            $(`#hours${eventIndex}`).text(savedEvent); 
        }
        
       $(document).on("click" ,"i",  function(event){
           event.preventDefault(); 
           let clickedHour = $(this).parent("button").prev().data("hour"); 
           let eventSaved = $(this).parent().prev("textarea").val(); 
        
           localStorage.setItem('hour-' + clickedHour , eventSaved ); 
           console.log(this); 
           console.log(clickedHour); 
       })
    
    })