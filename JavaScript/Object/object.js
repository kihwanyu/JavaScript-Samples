var student = {
   name: 'Taeyon',
   phone: '010-1234-5678'
};

student.name = 'IU';
student['phone'] = '010-5678-1234';


var propName = 'friend';
student[propName] = 'YuInna'

console.log(student);

var dj = {
   name: 'YuInna',
   sayHello: function () {
      // this를 이용해서 프로퍼티 접근
      console.log('Hello!! My name is ' + this.name);
   }
};
dj.sayHello();

function Actor(name, movie) {
    this.name = name;
    this.movie = movie;
	
    this.act = function() {
        console.log(this.name + ' perform in ' + this.movie);
    }
};

var johansson = new Actor('Johansson', 'Avengers');
johansson.act();

var alba = new Actor('Jessica Albl', 'Into the blue');
alba.act();