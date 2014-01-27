function FamilyMember(firstName){
	this.firstName = firstName;
	this.lastName = 'Hartley';
	this.birthPlace = 'Dallas, TX';
}

var mike = new FamilyMember ('Mike') 
var charlotte = new FamilyMember ('Charlotte')
var brian = new FamilyMember ('Brian')

console.log('I created a simple constructor called FamilyMember. Type FamilyMember')
console.log('My var names are "mike" "charlotte" and "brian" Type each.')

