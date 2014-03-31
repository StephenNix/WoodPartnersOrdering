function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }

    return true;
}

$(document).ready(function() {
    
    $('a.fancybox').fancybox({
        transitionIn    :   'elastic',
        transitionOut   :   'elastic',
        speedIn :   600, 
        speedOut:   200, 
        hideOnContentClick  :   false,
        width   :   700,
        height  :    615,
        fitToView   :   false,
        autoSize    :   false
    });
    
    $('#placeOrder').click(function() {
        $('#placeOrder_link').click();
    });
    
    $('#reviseOrder_button').click(function() {
        $("#orderPanel").attr('src', 'placeOrder.html');
    });
    
    $('#orderStatus').click(function() {
        $('#orderNumber_status input[type="number"]').val('');
        if($('#orderNumber_revise').css('display') !== 'none') {
            $('#orderNumber_revise').stop(true, true).slideToggle(200);
        }
        if($('#orderNumber_cancel').css('display') !== 'none') {
            $('#orderNumber_cancel').stop(true, true).slideToggle(200);
        }
        $('#orderNumber_status').stop(true, true).slideToggle(200);
    });

    $('#reviseOrder').click(function() {
        $('#orderNumber_revise input[type="number"]').val('');
        if($('#orderNumber_status').css('display') !== 'none') {
            $('#orderNumber_status').stop(true, true).slideToggle(200);
        }
        if($('#orderNumber_cancel').css('display') !== 'none') {
            $('#orderNumber_cancel').stop(true, true).slideToggle(200);
        }
        $('#orderNumber_revise').stop(true, true).slideToggle(200);
    });

    $('#cancelOrder').click(function() {
        $('#orderNumber_cancel input[type="number"]').val('');
        if($('#orderNumber_revise').css('display') !== 'none') {
            $('#orderNumber_revise').stop(true, true).slideToggle(200);
        }
        if($('#orderNumber_status').css('display') !== 'none') {
            $('#orderNumber_status').stop(true, true).slideToggle(200);
        }
        $('#orderNumber_cancel').stop(true, true).slideToggle(200);
    });
});
