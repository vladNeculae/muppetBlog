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