Template.itemsearch.events({
  'keyup .searchInput': _.throttle(function(e, t) {
    var searchQuery = Session.get('searchQuery') || {};
    var searchValue = t.$('.searchInput').val();

    if(searchValue){
      if(this.number){
        searchValue = parseFloat(t.$('.searchInput').val());
      }

      searchQuery[this.columnName] = searchValue;
    }else{
      delete searchQuery[this.columnName];
    }
    Session.set('searchQuery', searchQuery);


  },500)
});

Template.itemsearch.helpers({
  searchValue: function() {
    return Session.get('searchQuery')[this.columnName];
  }
});


