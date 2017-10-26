$(function(){

  // SELECT THE BODY PART / OPTIONS ARE PRESENTED IN CENTER COLUMN 

  $('#body').click(displayBodies);

  function displayBodies(){
    clearActiveClasses();
    $("#body").attr("class", "active");

    console.log('clicked body category option');
    $("#option1").css({background: "url('images/body/Monster1Body.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/body/Monster2Body.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/body/Monster3Body.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/body/Monster4Body.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/body/Monster5Body.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/body/Monster6Body.png')",
                        backgroundSize: 'contain'});
  }

  $('#eyes').click(displayEyes);

  function displayEyes(){
    clearActiveClasses();
    $("#eyes").attr("class", "active");

    console.log('clicked eyes category option');
    $("#option1").css({background: "url('images/eyes/Monster1Eyes.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/eyes/Monster2Eyes.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/eyes/Monster3Eyes.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/eyes/Monster4Eyes.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/eyes/Monster5Eyes.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/eyes/Monster6Eyes.png')",
                        backgroundSize: 'contain'});
  }

  $('#mouth').click(displayMouths);

  function displayMouths(){
    clearActiveClasses();
    $("#mouth").addClass("active");

    console.log('clicked mouth category option');
    $("#option1").css({background: "url('images/mouth/Monster1Mouth.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/mouth/Monster2Mouth.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/mouth/Monster3Mouth.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/mouth/Monster4Mouth.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/mouth/Monster5Mouth.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/mouth/Monster6Mouth.png')",
                        backgroundSize: 'contain'});
  }

  $('#arms').click(displayArms);

  function displayArms(){
    clearActiveClasses();
    $("#arms").addClass("active");

    console.log('clicked arms category option');
    $("#option1").css({background: "url('images/arms/Monster1Arms.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/arms/Monster2Arms.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/arms/Monster3Arms.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/arms/Monster4Arms.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/arms/Monster5Arms.png')",
                        backgroundSize: 'contain'});
    $("#option6").css({background: "url('images/arms/Monster6Arms.png')",
                        backgroundSize: 'contain'});
  }

  $('#legs').click(displayLegs);

  function displayLegs(){
    clearActiveClasses();
    $("#legs").addClass("active");


    console.log('clicked legs category option');
    $("#option1").css({background: "url('images/legs/Monster1Legs.png')",
                        backgroundSize: 'contain'});
    $("#option2").css({background: "url('images/legs/Monster2Legs.png')",
                        backgroundSize: 'contain'});
    $("#option3").css({background: "url('images/legs/Monster3Legs.png')",
                        backgroundSize: 'contain'});
    $("#option4").css({background: "url('images/legs/Monster4Legs.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/legs/Monster5Legs.png')",
                        backgroundSize: 'contain'});
    $("#option5").css({background: "url('images/legs/Monster6Legs.png')",
                        backgroundSize: 'contain'});
  }












  // SELECT THE BODY CATEGORY, SELECT AN OPTION / OPTIONS DISPLAYS IN STAGE AREA

  $('#option1').click(displayOptionOne);

  function displayOptionOne(){
    console.log('clicked category option 1');

    // identify which category is actives8lkwood.
    
    // $(".category").find("li[class='active']").attr("id")

    $("#viewbox").html('<img src="images/body/Monster1Body.png" height="500px" width="500px"/>');
  }

  $('#option2').click(displayOptionTwo);

  function displayOptionTwo(){
    console.log('clicked category option 2');
    $("#viewbox").html('<img src="images/body/Monster2Body.png" height="500px" width="500px"/>');

  }

  $('#option3').click(displayOptionThree);

  function displayOptionThree(){
    console.log('clicked category option 3');
    $("#viewbox").html('<img src="images/body/Monster3Body.png" height="500px" width="500px"/>');

  }

  $('#option4').click(displayOptionFour);

  function displayOptionFour(){
    console.log('clicked category option 4');
    $("#viewbox").html('<img src="images/body/Monster4Body.png" height="500px" width="500px"/>');

  }

  $('#option5').click(displayOptionFive);

  function displayOptionFive(){
    console.log('clicked category option 5');
    $("#viewbox").html('<img src="images/body/Monster5Body.png" height="500px" width="500px"/>');

  }

  $('#option6').click(displayOptionSix);

  function displayOptionSix(){
    console.log('clicked category option 6');
    $("#viewbox").html('<img src="images/body/Monster6Body.png" height="500px" width="500px"/>');

  }

  // SELECT THE EYES CATEGORY, SELECT AN OPTION / OPTIONS DISPLAYS IN STAGE AREA

  $('#option2').click(displayOptionOne);

  function displayOptionOne(){
    console.log('clicked category option 1');
    $("#viewbox").html('<img src="images/eyes/Monster1Eyes.png" height="500px" width="500px"/>');
  }

  $('#option2').click(displayOptionTwo);

  function displayOptionTwo(){
    console.log('clicked category option 2');
    $("#viewbox").html('<img src="images/eyes/Monster2Eyes.png" height="500px" width="500px"/>');
  }

  $('#option3').click(displayOptionThree);

  function displayOptionThree(){
    console.log('clicked category option 3');
    $("#viewbox").html('<img src="images/eyes/Monster3Eyes.png" height="500px" width="500px"/>');

  }

  $('#option4').click(displayOptionFour);

  function displayOptionFour(){
    console.log('clicked category option 4');
    $("#viewbox").html('<img src="images/eyes/Monster4Eyes.png" height="500px" width="500px"/>');

  }

  $('#option5').click(displayOptionFive);

  function displayOptionFive(){
    console.log('clicked category option 5');
    $("#viewbox").html('<img src="images/eyes/Monster5Eyes.png" height="500px" width="500px"/>');

  }

  $('#option6').click(displayOptionSix);

  function displayOptionSix(){
    console.log('clicked category option 6');
    $("#viewbox").html('<img src="images/eyes/Monster6Eyes.png" height="500px" width="500px"/>');

  }
  // CLEAR ACTIVE CLASSES 

  function clearActiveClasses() {
    $("#body").removeClass("active");
    $("#eyes").removeClass("active");
    $("#mouth").removeClass("active");
    $("#arms").removeClass("active");
    $("#legs").removeClass("active");
  }




});
