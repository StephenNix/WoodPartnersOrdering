var properties = [
    {
        text: "Existing Property",
        value: "EP",
        selected: false,
        description: "Order for an existing property",
        imageSrc: "img/logo.png"
    },
    
    {
        text: "New Property",
        value: "SUP",
        selected: false,
        description: "Order for a new property",
        imageSrc: "img/Home_Icon.png"
    },
    
    {
        text: "Overhead",
        value: "OH",
        selected: false,
        description: "Order attributed to overhead",
        imageSrc: "img/g394.png"
    }
];

var selectedProperty;
var propertyName = "property";
var d = new Date();
var currentDate = d.getFullYear() + '-' + d.getUTCMonth() + '-' + d.getDate();
var manager_items = [0, 0, 0, 0, 0, 0, 0];

$(document).ready((function () {
    function scrollDownToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']");
        $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
    }
    
    $('body').mousedown(function(e){
        if(e.button===1) {
            return false;
        }
    });
    
    $('#laptop').click(function () {
        
    });
    
    $('.chosen-select').chosen({ width: '21%' });
    
    $('#propertyTypeSelect').ddslick({
        data: properties,
        width: 300,
        selectText: "Select a property type",
        imagePosition: "right",
        onSelected: function(data){
            selectedProperty = $('#propertyTypeSelect').data('ddslick').selectedData.value;
            $('#POnumber').val(selectedProperty + '_' + propertyName + '_' + currentDate);
            $('#POnumber').val($('#POnumber').val().split(" ").join(""));
        }
    });
    
    $('#nextButton').click(function () {
        scrollDownToAnchor('shippingInfo2_a'); 
    });
    
    $('#nextButton2').click(function () {
        scrollDownToAnchor('shippingInfo3_a'); 
    });
    
    $('#manager').click(function () {
        $('#productSelect_manager').css('display', 'block');
        $('html, body').scrollTo($('#productSelect_manager'), 800);
    });
    
    $('#laptop').click(function () {
        if(manager_items[0] === 0) {
            manager_items[0] = 1;
            $(this).animate({boxShadow: '1px 1px 12px 1px #6B6BFF'}, 100);
        }
        
        else {
            manager_items[0] = 0;
            $(this).animate({boxShadow: ''}, 100);
        }
    });
    
    $('#monitor').click(function () {
        if(manager_items[1] === 0) {
            manager_items[1] = 1;
            $(this).animate({boxShadow: '1px 1px 12px 1px #6B6BFF'}, 100);
        }
        
        else {
            manager_items[1] = 0;
            $(this).animate({boxShadow: ''}, 100);
        }
    });
    
    $('#residentialAddress').click(function () {
        $('#residentialAddress').attr('disabled', 'disabled');
        $('#businessAddress').removeAttr('disabled');
    });
    
    $('#businessAddress').click(function () {
        $('#businessAddress').attr('disabled', 'disabled');
        $('#residentialAddress').removeAttr('disabled');
    });
    
    $('#propertyName').bind('input propertychange', function() {
        propertyName = $('#propertyName').val();
        $('#POnumber').val(selectedProperty + '_' + propertyName + '_' + currentDate);
        $('#POnumber').val($('#POnumber').val().split(" ").join(""));
    });
}));