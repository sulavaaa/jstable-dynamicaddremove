function StudentService(){
    this.studentList =[];

    this.add = function(student){
        this.studentList.push(student);
        for(let i=0; i<this.studentList.length;i++){
            console.log(this.studentList[i]);
        }
    }

    this.getById = function(id){
       this.studentList.forEach(function (std){
            let student = std;
            if(student.id == id){
                return student;
            }
            return null;
    });
    }

    this.getAll = function(){
        return this.studentList;
    }
}