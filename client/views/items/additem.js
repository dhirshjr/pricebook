Template.addItem.events({
  'submit form': function(e, b){
    var newItem = {
      store: $('#itemStore').val(),
      name: $('#itemName').val(),
      weight: $('#itemWeight').val(),
      weightType: $('#itemWeightType').val(),
      qty: $('#itemQty').val(),
      qtyType: $('#itemQtyType').val(),
      price: $('#itemPrice').val()
    };
    
    Items.insert(newItem, {validationContext: 'insertForm'}, function(error, result) {
      if(!error){
        $('#addItemForm').find('input:text').val('');
        $('#itemStore').focus();
      }
    });
    
    return false;
  }
  
});

