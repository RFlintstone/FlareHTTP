function viewNotFoundController(req, res) {
  res.status(404).render('error', { title: 'Module Not Enabled' });
}

module.exports = viewNotFoundController;