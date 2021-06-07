## Carousel script explanation

    First I will add the Images that I want to have in my carousel then ,then them an class ,"mySlides" by which I will
    use to identify them from my the other elements /Images. In my javascript file I will initialize a variable
    to represent the individual images (i) .Next I will access my slide images with an their respective class from 
    the html side using "document.getElementByClassName" which will go through my html document file and 
    look for anything ,my images not that has the class name I have identified it with.With my images now I
    will use a for loop to loop through the images at a time with the (i) I initialized .The image should be among the 
    number of images in my class,so I will use (i < x.length) which is the number of my Images then incerement,meaning
    after am done with one image I will go to the next image.I will then give a styling property that when 
    one image is being displayed ,the other image will be hidden so as to not have all the images being displayed
    at the same time.After this I will give a duration of 3 seconds for the image to remain displayed on the 
    screen before the next image is shown.And there I will have my slides


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
    
            
            The first console with outer func will print Lovelace 
            This is because this.name is referring to the object global variable name declared before the function
            giving it the permission to access it value "Lovelace"
        The second console with outer func will print Lovelace
            The self variable has been assigned this with is referencing to the object itself containing the global
            variable name hence its able to also access it value "Lovelace"

        The first console with inner func will print Undefined
            Prints out undefined because its referring to this which is an object but the function itself has no 
            access to the object but just has access to the outer function only so its not able to find the object
            being refrenced by this keyword
            
        The second console with inner func will print Lovelace
            The Inner function prints Lovelace because its referencing to self which is the outer function which has been
            assigned the object by using this.So its able to access the value for the name ("Lovelace through") the outer
            function