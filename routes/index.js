var express = require('express');
var router = express.Router();

var quizController = require ('../controllers/quiz_controller.js');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

// GET Authot
router.get('/author', function(req, res) {
  res.render('author', { autor: 'Luis Estévez' });
});

module.exports = router;