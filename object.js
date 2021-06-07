var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

// The first console with outer func will print Lovelace 
    // This is because this
// The second console with outer func will print Lovelace

// The first console with inner func will print Undefined
//  The second console with inner func will print Lovelace