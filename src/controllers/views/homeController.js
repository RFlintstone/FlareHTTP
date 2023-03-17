function homeController(req, res) {
  res.render('home', { title: 'Home page!' });
}

module.exports = homeController;
