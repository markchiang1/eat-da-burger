$(document).ready(function(){

    $(document).on("click","#submitBtn", function(event){
        event.preventDefault()
        var burger = $('.burgerOrder').val().trim()
        //alert(burger)
        
        $.ajax("/"+burger, {
            type: "post",
            data: burger
        }).then(function(event) {
            console.log(event);
            
            console.log("Added new burger: ", event);
            // Reload the page to get the updated list
            location.reload();
        })
        .catch(function(err){
            console.log(err)
        })
//ps aux | grep -i node 
        // $.post("/"+burger, function(data){
        //         console.log(data)
        //         location.reload();
        // })
    })
})