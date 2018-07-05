const Grade = require('./grade')

class GradeService {
    
    constructor(){
        this.grades =[]
    }
 
    addGrade(id,name,course,grade){
    grade = new Grade(id,name,course,grade);
    this.grades.push(grade);
    console.log("Grade Saved Successfully");
    console.log("Array: "+this.grades);
    }
    getGrade(id){
        console.log("insdie gradeservice"+this.grades)
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex++) {
            if(this.grades[fieldIndex].id == id){
               return this.grades[fieldIndex];               
            }
        }
    }
    deleteGrade(id){
         
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex++) {
            if(this.grades[fieldIndex].id == id){
              this.grades.splice(fieldIndex,1);               
            }
        }
    }

    getGrades(){
        console.log("insdie gradeservice"+this.grades)
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex++) {
               return this.grades;               
           
        }
    }
    putGrade(grade){
         
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex ++) {
            if(this.grades[fieldIndex].id == grade.id){
              this.grades[fieldIndex] = grade;               
            }

        }
    }}

    module.exports = GradeService;