Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
  this.render('home');
});
// add post form
Router.route('/addpost', function () {
  this.render('AddPost');
});
Router.route('/showposts', function () {
  this.render('ShowPosts');
});

Router.route('/admin', function () {
  	if (Roles.userIsInRole(Meteor.user(), this._id)) {
	this.render('AdminPanel');
	} else {
		Router.go('/');
	}
});

//Router.route('/admin/posts', function () {
//  this.render('AdminPosts');
//});

Router.route('/admin/posts', function () {
	if (Roles.userIsInRole(Meteor.user(), this._id)) {
	this.render('AdminPosts');
	} else {
		Router.go('/');
	}
});

Router.route('/ucp', function () {
		if (Roles.userIsInRole(Meteor.user(), this._id)) {
	this.render('UserControlPanel');
	} else {
		Router.go('/');
	}
});


Router.route('/admin/posts/:_id', function () {
  this.render('EditPosts', {
	  data: function () {return Posts.findOne({_id: this.params._id});}
	  });
});