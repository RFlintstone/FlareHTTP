function viewNotFoundController(req, res) {
  res.status(404).render('error', { title: '404 Page' });
}

module.exports = viewNotFoundController;