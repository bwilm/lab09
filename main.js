$(document).ready(function (){
    
    let numbers = [1,2,3,4,5,6]
    let myDie = [];
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)]
    }
//create generate button
    let myDice = ($('<button id="generate"> Generate Dice </button>'))
    myDice.appendTo($('body'));

//create roll dice button
    let rollDice = ($('<button id="rollDice"> Roll Dice </button>'))
    rollDice.appendTo($('body'));
    //$('button').click    
        
    function Die() {
        this.div = $('<div></div>');
        
        this.roll();
        $('body').append(this.div); 

    }

  // function 

    Die.prototype.roll = (function() {
        this.num = Math.ceil(Math.random() * 6);
        $(this.div).text(this.num);
    })

  //  }

  //  var die = new Die();
    
    
    $('#generate').click(function(CreateNewDice){
        let die = new Die();
        myDie.push(die)
    })


    
    $('#rollDice').click(function(){
        for (let i=0; i<=myDie.length; i++){
            myDie[i].roll();
            console.log(myDie[i]);
        };
    })




})






//let dice = $('</div>')


