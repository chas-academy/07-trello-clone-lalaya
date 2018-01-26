$(document).ready(function() {
    function initSort() {
        // Sort card
        $(".card-container").sortable({
            cursor: "move",
            connectWith: ".card-container",
            helper: "clone",
            placeholder: "card-placeholder",
            // highlight effect when card is droped in a list
            receive: function (event, ui) {
                ui.item.effect({
                    effect: "highlight", 
                    duration: 800,
                })
                console.log(event, ui); 
            }
        
        });

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
        $('body').on('click', '.list .remove-list' , function(e){
            $(this).closest('.column').remove();
        });
    }

    initRemove();

   // Click to add new card or edit them
    var $editMode;
    var $editCard;

    function initEdit() {
        $('body').on('click', '.edit-card' , function(e){
            $editCard = $(this).closest('.card');
            $editMode = true;
            $('#cardName').val($editCard.data('name'));
            dialog.dialog("open");
            return false;        
        });
    }

    initEdit();

    function initCreate() {
        $('.add-new-card').click(function() {
            $('#cardName, #cardDescription').val('');
            $cardContainer = $(this).parent().find('.card-container');
            dialog.dialog("open");    
            $editMode = false;
        }); 
    }

    initCreate();

    // New card container
    var $cardContainer;

    function addCard(event) {
        event.preventDefault();
        var name = $('#cardName').val();
        var cardHtml = `
            <div class="card" data-name="`+name+`">
                <a class="edit-card">`+name+`</a>
                <button class="remove-card">X</button>
            </div>
        `;

        $cardContainer.append(cardHtml);
        dialog.dialog("close");
    }

    // Dialog for card form 
    dialog = $('#cardForm').dialog({
        autoOpen: false,
        height: 500,
        width: 300,
        modal: true,
        show: {effect: "drop"},
        buttons: {
            Save: addCard,
            Cancel: function() {
                dialog.dialog("close");

            }
        }    
    });

    // Tabs in dialog 
    $('#cardFormTabs').tabs({
        event: "mouseover"
    });

    // Datepicker Plugin
    $('.date-input').dateDropper();

});


