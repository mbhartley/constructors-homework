console.log('CONSTRUCTOR TWO')
console.log('I created a constructor called FamilyMember.')
console.log('The object names are "mike" "charlotte" "brian" "melissa" "matt" "lindsey" and "drew"')
console.log('Each object has the following properties: firstName, lastName, age, birthPlace, alive')
console.log('The property lastName defaults to Hartley but can also be modified because of the || operator,')
console.log('...this allows for a change in last name when, for example, my sisters get married')
console.log('There is a growOld function that adds one year to the value of the age property')
console.log('There is a deceased function that changes the value of the alive property from true to false')

//CONSTRUCTOR ONE//

function FamilyMember(firstName, age, lastName){
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
console.log('CONSTRUCTOR TWO')
console.log('I created a constructor called RecipePerfect.')
console.log('The object names are "water" "butter" "sugar" "salt" "flour" "milkPowder" and "yeast"')
console.log('Each object has the properties "ingredient" "amount" and "loafs"')
console.log('There is a function "increaseAmount" that is meant to allow the user to change the amount')
console.log('   of servings, or loafs in this case b/c it is a  bread recipe. Changing the amount of loafs')
console.log('   will change the amount of the ingredient needed to create the recipe. My hangup at this point')
console.log('   is that there are 2 steps involved- first, changing the "loafs" amount, then invoking the function')
console.log('   Also, this has to be done for each individual ingredient. Ideally, the user would change the amount')
console.log('   of loafs only once, and it would apply to all objects (ingredients)')

function RecipePerfect (ingredient, amount, loafs) {
  this.ingredient = ingredient;
  this.amount = amount;
  this.loafs = loafs;

  this.increaseAmount = function(){
    this.amount = this.loafs * this.amount;
  }
}

var water = new RecipePerfect('warm water', 1.25, 1)
var butter = new RecipePerfect('butter, softened', 1, 1)
var sugar = new RecipePerfect ('white sugar', 1, 1)
var salt = new RecipePerfect('salt', 1, 1)
var flour = new RecipePerfect('bread flour', 3, 1)
var milkPowder = new RecipePerfect('dry milk powder', 2, 1)
var yeast = new RecipePerfect('active dry yeast', .25, 1)

//CONSTRUCTOR THREE//
console.log('CONSTRUCTOR THREE')
console.log('I created a constructor called WineCatalog. Its purpose is to keep track of my personal wine inventory.')
console.log('The object names are "aOne" "aTwo" "aThree" "aFour" "aFive", corresponding to their place on the grid in my cellar')
console.log('The properties of each are "location" (ie, in my cellar) "vintage" "brand" "variety" "drinkBy" "dateOpened" and "tastingNotes"')
console.log('There is a function called bottleOpened to be invoked when I drink each wine.')
console.log('It returns the dateOpened and the tastingNotes that I assign to each bottle.')
console.log('I have already entered a dateOpened and tastingNotes for aOne and aTwo as examples')

function WineCatalog (location, vintage, brand, variety, drinkBy, dateOpened, tastingNotes) {
	this.location = location;
	this.vintage = vintage;
	this.brand = brand;
	this.variety = variety;
	this.drinkBy = drinkBy;
	this.dateOpened = dateOpened;
	this.tastingNotes = tastingNotes;

	this.bottleOpened = function(){
		return "This wine was opened on " + this.dateOpened + " and had tasting notes of" + this.tastingNotes;
	}
}

var aOne = new WineCatalog ('A1', '2001', 'Yalumba', 'Old Vine Shiraz', '2018')
var aTwo = new WineCatalog ('A2', '1998', 'Fisher Vineyards', 'Cabernet Sauvignon', '2015')
var aThree = new WineCatalog ('A3', '2004', 'Ogier', 'Chateauneuf Du Pape', '2018')
var aFour = new WineCatalog ('A4', '2009', 'Chateau Pontet Canet', 'Bordeaux', '2021')
var aFive = new WineCatalog	('A5', '2007', 'Pepper Bridge', 'Merlot', '2016')

aOne.dateOpened = 'January 2014'
aOne.tastingNotes = 'Intense dark fruit and plum, accented by tobacco, cedar and heavy pepper notes. Gripping  tannins with a long finish.'

aTwo.dateOpened = 'October 2013'
aTwo.tastingNotes = 'Subtle blackcurrant, with hints of eucalyptus and a touch of olive. Black cherry on the mid-palate. Soft tannins, smooth finish.'


















