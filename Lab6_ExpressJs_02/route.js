const express = require('express')
const validator = require('express-validator')
const Grade = require('./grade')
const GradeService = require('./gradeService')

const router  = express.Router();
//grade = new Grade();
//gradeService = new GradeService();

router.use(express.urlencoded({extended:true}));
router.use(validator());

router.get('/courses', function(req,res){
  var grade=  gradeService.getGrades()
   res.send(grade)
})

router.get('/:id',function(req,res){
   grade=  gradeService.getGrade(req.params.id)
    res.send(grade)
})

router.post('/addCourse', function(req, res) {
    req.assert('id', 'Person ID can not be emtpy').notEmpty();
    var errors= req.validationErrors();
    if(errors) res.send({errors:errors})
    else{
    grade= gradeService.addGrade(req.body.id, req.body.name, req.body.course, req.body.grade)
    res.end();
    }
})

router.put('/:id',function(req,res){
    let grade  = new Grade(req.body.id,req.body.name,req.body.course,req.body.grade)
    gradeService.putGrade(grade)
     res.send(req.params.id)
     res.end()
})

router.delete('/:id',function(req,res){
    gradeService.deleteGrade(req.params.id)
    res.end()
})
module.exports = router;