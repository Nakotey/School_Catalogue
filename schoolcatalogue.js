class School{
    constructor(name,numberOfStudents,level){
      this._name = name;
      this._numberOfStudents = numberOfStudents;
      this._level = level;
    }
  
    get name(){
      return this._name;
    }
  
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    get level(){
      return this._level;
    }
  
    set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === 'Number'){
        return this._numberOfStudents += num;
      }else{
        console.log('Invalid Input');
      } 
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let random = Math.floor(Math.random() * substituteTeachers.length)
  
      return substituteTeachers[random];
    }
  }
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, numberOfStudents,'primary');
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School{
    constructor(name){
      super(name);
    }
  }
  
  class HighSchool extends School{
    constructor(name, numberOfStudents,sportsTeams){
      super(name, numberOfStudents,'high');
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Student must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  
  const alSmith = new HighSchool('AI E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  console.log(alSmith.sportsTeams);