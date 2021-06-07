// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {

    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);

    // Carousel script explanation

    // First I will add the Images that I want to have in my carousel then ,then them an class ,"mySlides" by which I will
    // use to identify them from my the other elements /Images. In my javascript file I will initialize a variable
    // to represent the individual images (i) .Next I will access my slide images with an their respective class from 
    // the html side using "document.getElementByClassName" which will go through my html document file and 
    // look for anything ,my images not that has the class name I have identified it with.With my images now I
    // will use a for loop to loop through the images at a time with the (i) I initialized .The image should be among the 
    // number of images in my class,so I will use (i < x.length) which is the number of my Images then incerement,meaning
    // after am done with one image I will go to the next image.I will then give a styling property that when 
    // one image is being displayed ,the other image will be hidden so as to not have all the images being displayed
    // at the same time.After this I will give a duration of 3 seconds for the image to remain displayed on the 
    // screen before the next image is shown.And there I will have my slides
    
    

}

function functionality(){
    var company;
    var phone;
    var location;
    var date;
    function getCompany(){
        return document.getElementById("company").value
        }
    function getPhone(){
        return document.getElementById("phone").value
        }
    function getLocation(){
        return document.getElementById("location").value
        
    }
    function getdate(){
        return document.getElementById("date").value
    }
    document.getElementById("submit").addEventListener('click',function (display){
    display.preventDefault();
    company = getCompany()
    phone = getPhone()
    location = getLocation()
    date = getdate()
    window.alert(`Hello ,from ${company},we have received your phone number ${phone} from ${location} and we will let you know if we will be available on ${date}`)
    document.getElementById("form").submit();
      
      });

   
}
