$(document).ready(function() {
    function initSort() {
        // Sort card
        $(".card-container").sortable({
            cursor: "move",
            connectWith: ".card-container",
            helper: "clone",
            placeholder: "sortable-placeholder",
        });

        // Sort list - think this works better than drag and drop
        /*$(".board").sortable({
            cursor: "move",
            connectWith: ".board",
            helper: "clone",
            placeholder: "sortable-placeholder",            
        }); */

        $(".list").draggable({
            snap: ".column"    
        });

        $(".column").droppable({
            accept: ".list"
        });
    }  
    
    initSort();


    function initRemove () {
        // Remove card on click
        $('body').on('click', '.card .remove-card' , function(e){
            $(this).closest('.card').remove();
        });
    
        // Remove list on click
        $('.list').on('click', '.remove-list' , function(e){
            $(this).closest('.column').remove();
        });
    }

    initRemove();


    // Card 
    var $cardContainer;

    function addCard(event) {
        event.preventDefault();
        var name = $('#cardName').val();

        var cardHtml = `
            <div class="card">
                `+name+`
                <button class="remove-card">X</button>
            </div>
        `;

        $cardContainer.append(cardHtml);
        dialog.dialog("close");
    }

    dialog = $('#newCardForm').dialog({
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

    $('#newCardFormTabs').tabs({
        event: "mouseover"
    });

    $('.add-new-card').click(function() {
        dialog.dialog("open");
        
        $cardContainer = $(this).parent().find('.card-container');

    }); 

    $('.date-input').dateDropper();

});

