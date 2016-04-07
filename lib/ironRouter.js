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
  this.render('AdminPanel');
});

//Router.route('/admin/posts', function () {
//  this.render('AdminPosts');
//});

Router.route('/admin/posts', function () {
	this.render('AdminPosts');
});

Router.route('/ucp', function () {
	this.render('UserControlPanel');
});


Router.route('/admin/posts/:_id', function () {
  this.render('EditPosts', {
	  data: function () {return Posts.findOne({_id: this.params._id});}
	  });
});