const vm = new Vue({
    el: '#app',
    data: {
        maxHealth: 100,
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        
        startGame: function() {
            this.gameIsRunning = true;
            this.turns = [];
            this.playerHealth = this.maxHealth;
            this.monsterHealth = this.maxHealth;
        },

        attack: function() {
            var dmg;
            
            dmg = this.calculateDamage(3, 10);
            this.turns.unshift({
                isPlayer: true, 
                text: "Player hits monster for " + dmg + " damage"
            });
            this.monsterHealth -= dmg;
            if(this.checkWin()) return;
            
            this.monsterAttacks();
            this.checkWin();
        },
        
        specialAttack: function() {
            var dmg;
            
            dmg = this.calculateDamage(10, 20);
            this.turns.unshift({
                isPlayer: true, 
                text: "Player hits monster with a Special Attack for " + dmg + " damage!"
            });
            this.monsterHealth -= dmg;
            if(this.checkWin()) return;
            
            this.monsterAttacks();
            this.checkWin();
        },
        
        monsterAttacks: function() {
            dmg = this.calculateDamage(5,12);
            this.turns.unshift({
                isPlayer: false, 
                text: "Monster hits player for " + dmg + " damage"
            });
            this.playerHealth -= dmg;
        },
        
        heal: function() {
            var healAmt = 10;
            this.turns.unshift({
                isPlayer: true, 
                text: "Player heals self for " + dmg
            });
            this.monsterAttacks();
            this.playerHealth = Math.min(this.playerHealth + healAmt, 100);
        },
        
        giveUp: function() {

        },
        
        calculateDamage: function(minDmg, maxDmg) {
            return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
        },
        
        checkWin: function() {
            if(this.monsterHealth < 0) {
                this.monsterHealth = 0;
                this.gameIsRunning = false;
                if(confirm("You won! Play a new game?")) this.startGame();
                return true;
            } else if(this.playerHealth < 0) {
                this.playerHealth = 0;
                this.gameIsRunning = false;
                if(confirm("The Monster won :( Play a new game?")) this.startGame();
                return true;
            }
            return false;
        }
    }
});
