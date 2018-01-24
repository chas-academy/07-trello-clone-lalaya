$(document).ready(function() {
    function initSort() {
        $(".list").sortable({
            cursor: "move",
            connectWith: ".list",
            helper: "clone",
            placeholder: "sortable-placeholder",
        });

        $(".column").sortable({
            cursor: "move",
            connectWith: ".column",
            helper: "clone",
            placeholder: "sortable-placeholder",
        });
    } 

    initSort();

    // Remove card on click
    function initRemoveCard () {
        $('.card').on('click', '.remove-card' , function(e){
            $(this).closest('.card').remove()
        });
    }

    initRemoveCard();


}); 