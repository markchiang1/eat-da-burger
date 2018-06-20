$(document).ready(function(){

    $(document).on("click","#submitBtn", function(event){
        event.preventDefault()
        var burger = $('.burgerOrder').val().trim()
        alert(burger)
    })
    
    

    // $.post("/"+burger, function(data){
    //         console.log(data)
    // })
})