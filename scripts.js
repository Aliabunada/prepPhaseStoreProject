// var item = $('.check label input');
var itemInput = $('.check label');
var total = $('#total');
var cost = 0;
itemInput.on('click',function(){
	 var x = this.id;
	 var price = $('#'+x).text();
	 cost += parseInt(price);
	 total.text(cost);
	 console.log(price);
})
console.log("Test");


function makeUser(name,password,cardNum,amountOfMoney){
	var x = {}
		x.name = name;
		x.password = password;
		x.cardNum = cardNum;
		x.amountOfMoney = amountOfMoney;
		x.withdraw = withdraw;
	return x;
	}

var withdraw = function(x){
	if(this.amountOfMoney < x){
		return false;
	}else{
		this.amountOfMoney -= x;
		return true;
	}
}

const x = makeUser("Kareem","RbkChorort7","1234",100);
//console.log(x.withdraw(151));