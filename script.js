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





