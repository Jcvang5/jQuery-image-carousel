$(document).ready(function() {
    const imageArray = [
      {
        url: "https://www.publicdomainpictures.net/pictures/460000/velka/dinosaurier-urzeit-vintage-kunst-1655671979tT6.jpg",
        description: "Dinosaur Prehistoric Times Vintage Art"
      },
      {
        url: "https://www.publicdomainpictures.net/pictures/370000/velka/storch-kranich-vintage-kunst.jpg",
        description: "Stork Crane Vintage Art"
      },
      {
        url: "https://www.publicdomainpictures.net/pictures/500000/velka/vintage-kunst-hase-kaninchen-1680373094Amn.jpg",
        description: "Vintage Art Bunny Rabbit"
      },
      {
        url: "https://www.publicdomainpictures.net/pictures/380000/velka/schmetterling-motten-kunst-vintage.jpg",
        description: "Butterfly Moth Art Vintage"
      },
      {
        url: "https://www.publicdomainpictures.net/pictures/490000/velka/sheep-vintage-art-painting-1673262227LeM.jpg",
        description: "Sheep Vintage Art Paintin"
      },
    ];
 
    let currentIndex = 0;
 
    function displayImage() {
      $("#carouselImage").attr("src", imageArray[currentIndex].url);
      $("#imageDescription").text(imageArray[currentIndex].description);
    }
 
    $("#nextButton").click(function() {
      currentIndex = (currentIndex + 1) % imageArray.length;
      $("#imageContainer").fadeOut("slow", function() {
        displayImage();
        $("#imageContainer").fadeIn("slow");
      });
    });
 
    $("#prevButton").click(function() {
      currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      $("#imageContainer").fadeOut("slow", function() {
        displayImage();
        $("#imageContainer").fadeIn("slow");
      });
    });
 
    displayImage();
});
