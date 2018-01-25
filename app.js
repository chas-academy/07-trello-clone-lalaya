$(document).ready(function() {
    function initSort() {
        // Sort card
        $(".list").sortable({
            cursor: "move",
            connectWith: ".list",
            helper: "clone",
            placeholder: "sortable-placeholder",
        });

        // Sort list
        $(".column").sortable({
            cursor: "move",
            connectWith: ".column",
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
    

}); 