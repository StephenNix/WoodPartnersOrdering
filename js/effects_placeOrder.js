var properties = [
    {
        text: "Existing Property",
        value: "existing",
        selected: false,
        description: "Order for an existing property",
        imageSrc: "img/logo.png"
    },
    
    {
        text: "New Property",
        value: "new",
        selected: false,
        description: "Order for a new property",
        imageSrc: "img/logo.png"
    },
    
    {
        text: "Overhead",
        value: "overhead",
        selected: false,
        description: "Order attributed to overhead",
        imageSrc: "img/logo.png"
    }
];

var selectedProperty;

$(document).ready((function () {
    $('#propertyTypeSelect').ddslick({
        data: properties,
        width: 300,
        selectText: "Select a property type",
        imagePosition: "right",
        onSelected: function(data){
            selectedProperty = $('#propertyTypeSelect').data('ddslick').selectedData.value;
            $('#selected').text(selectedProperty);
            if($('#shippingInfo').css('display') === 'none'){
                $('#shippingInfo').fadeIn(200);
            }
        }
    });
    
}));