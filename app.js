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
            $('#cardForm, #cardDescription').val('');
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
        width: 500,
        modal: true,
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

