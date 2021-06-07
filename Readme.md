##Carousel script explanation

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



    
    