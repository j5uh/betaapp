if(Meteor.isClient){
  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        Session.set('photo', data);
      });
    }
  });

  Template.takePhoto.helpers({
    'photo': function(){
      return Session.get('photo');
    }
  });
}

