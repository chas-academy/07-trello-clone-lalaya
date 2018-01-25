$(document).ready(function() {
    function initSort() {
        // Sort card
        $(".card-container").sortable({
            cursor: "move",
            connectWith: ".card-container",
            helper: "clone",
            placeholder: "sortable-placeholder",
        });

        // Sort list
        $(".board").sortable({
            cursor: "move",
            connectWith: ".board",
            helper: "clone",
            placeholder: "sortable-placeholder",
        
        });
    } 

    initSort();

    function initRemove () {
        // Remove card on click
        $('.card').on('click', '.remove-card' , function(e){
            $(this).closest('.card').remove()
        });
    
        // Remove list on click
        $('.list').on('click', '.remove-list' , function(e){
            $(this).closest('.list').remove()
        });
    }

    initRemove();



    function addCard(event) {
        event.preventDefault();
    }

    var formData = $(event.target).offsetParent().find("form").serializeArray();


    dialog = $('.new-card').dialog({
        autoOpen: false,
        height: 500,
        width: 500,
        modal: true,
        buttons: {
            Save: addCard,
            Cancel: function() {
                dialog.dialog("close");
            }
        }

    });

    $('.new-card').click(function() {
    dialog.dialog("open"); 

    });

}); 