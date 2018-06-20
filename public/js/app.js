$(document).ready(function(){

    $(document).on("click","#submitBtn", function(event){
        event.preventDefault()
        var burger = $('.burgerOrder').val().trim()
        // alert(burger)
        
        $.ajax("/"+burger, {
            type: "post",
            data: burger
        }).then(
        function() {
            console.log("Added new burger: "+ burger);
            // Reload the page to get the updated list
            location.reload();
        })

        // $.post("/"+burger, function(data){
        //         console.log(data)
        //         location.reload();
        // })
    })
})