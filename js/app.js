$(function(){

  // SELECT THE BODY PART / OPTIONS ARE PRESENTED IN CENTER COLUMN 

  $('#body').click(displayBodies);

  // function slideMenu(){
  //   $(".column-center").css(".show");
  // }
  function displayBodies(){
    
    clearActiveClasses();
    
    $("#body").attr("class", "active");

    // console.log('clicked body category option');
    $("#option1").css({background: "url('images/body/option1.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/body/option2.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/body/option3.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/body/option4.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/body/option5.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/body/option6.png')",
                        backgroundSize: 'contain'});
  }

  $('#eyes').click(displayEyes);

  function displayEyes(){
    clearActiveClasses();
    $("#eyes").attr("class", "active");

    // console.log('clicked eyes category option');
    $("#option1").css({background: "url('images/eyes/option1.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/eyes/option2.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/eyes/option3.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/eyes/option4.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/eyes/option5.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/eyes/option6.png')",
                        backgroundSize: 'contain'});
  }

  $('#mouth').click(displayMouths);

  function displayMouths(){
    clearActiveClasses();
    $("#mouth").addClass("active");

    // console.log('clicked mouth category option');
    $("#option1").css({background: "url('images/mouth/option1.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/mouth/option2.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/mouth/option3.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/mouth/option4.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/mouth/option5.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/mouth/option6.png')",
                        backgroundSize: 'contain'});
  }

  $('#arms').click(displayArms);

  function displayArms(){
    clearActiveClasses();
    $("#arms").addClass("active");

    // console.log('clicked arms category option');
    $("#option1").css({background: "url('images/arms/option1.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/arms/option2.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/arms/option3.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/arms/option4.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/arms/option5.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/arms/option6.png')",
                        backgroundSize: 'contain'});
  }

  $('#legs').click(displayLegs);

  function displayLegs(){
    clearActiveClasses();
    $("#legs").addClass("active");

    // console.log('clicked legs category option');
    $("#option1").css({background: "url('images/legs/option1.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/legs/option2.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/legs/option3.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/legs/option4.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/legs/option5.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/legs/option6.png')",
                        backgroundSize: 'contain'});
  }



  // SELECT THE BODY CATEGORY, SELECT AN OPTION / OPTIONS DISPLAYS IN STAGE AREA

  $(".options").click(placePart);


  function placePart() {

    var activeCategory = $(".category").find("li[class='active']").attr("id");
    var selectedOption = $(this).attr("id");

    var imgSrc = '<img src="images/' + activeCategory + '/' + selectedOption + '.png"  height="500px" width="500px"/>'

    var zIndex = zIndexOfPart(activeCategory);
   
    var part = createPart(imgSrc, zIndex);
    
    $("#viewbox").append(part);
  }

  function createPart(imgSrc, zIndex) {
    
    return  "<div style='position:absolute; z-index:" + zIndex + ";'>" + imgSrc +  "</div>";
  }

// CODE FROM HTML USING Z-INDEX LAYERS

  function zIndexOfPart(activeCategory) {

    if (activeCategory === "eyes") {
      return 5;
    } else if (activeCategory === "mouth") {
      return 4;
    } else if (activeCategory === "body") {
      return 3;
    } else if (activeCategory === "legs") {
      return 2;
    } else {
      return 1;
    }
  }


  $('#clearall').click(function() { location.reload(); }); 

  function clearActiveClasses() {
    $("#body").removeClass("active");
    $("#eyes").removeClass("active");
    $("#mouth").removeClass("active");
    $("#arms").removeClass("active");
    $("#legs").removeClass("active");
  }

  // $('.center-column').css("overflow-y", "scroll");

});
