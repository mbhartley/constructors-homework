console.log('Constructor One')
console.log('I created a simple constructor called FamilyMember. Type FamilyMember')
console.log('My object names are "mike" "charlotte" "brian" "melissa" "matt" "lindsey" and "drew"')
console.log('Each object has the following properties: firstName, lastName, age, birthPlace, alive')
console.log('The property lastName defaults to Hartley but can also be modified with the || operator,')
console.log('...this allows for a change in last name when, for example, my sisters get married')
console.log('There is a growOld function that adds one year to the value of the age property')
console.log('There is a deceased function that changes the value of the alive property from true to false')

//CONSTRUCTOR ONE//

function FamilyMember(firstName, lastName, age){
	this.firstName = firstName;
    this.lastName = 'Hartley' || lastName;
	this.age = age;
	this.birthPlace = 'Dallas, TX';
	this.alive = true;
	
	
	this.growOld = function(){
		this.age = this.age + 1;
	};
	this.deceased = function(){
		this.alive = false;
	}
}

var mike = new FamilyMember ('Mike', 64) 
var charlotte = new FamilyMember ('Charlotte', 63)
var brian = new FamilyMember ('Brian', 40)
var melissa = new FamilyMember ('Melissa', 38)
var matt = new FamilyMember ('Matt', 36)
var lindsey = new FamilyMember ('Lindsey', 30)
var drew = new FamilyMember ('Drew', 23)

//CONSTRUCTOR TWO//


