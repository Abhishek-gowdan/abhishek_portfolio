    // var tablinks= document.getElementsByClassName("tab-links");
    // var tabcontents= document.getElementsByClassName("tab-contents");

    // function opentab(tabname){
    //     for(tablink of tablinks){
    //         tablink.classList.remove("active-link")
    //     }
    //     for(tabcontent of tabcontents){
    //         tabcontent.classList.remove("active-tab")
    //     }
    //     event.currentTarget.classList.add("active-link");
    //     document.getElementById(tabname).classList.add("active-tab");
    //}
    
/*************/ 
const texts = ["Welcome to my website.","Passionate web developer", "MCA Student" ,"Seeking projects and job opportunities"];
let count = 0;
let index = 0;
let currentText = '';
let char = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  char = currentText.slice(0, ++index);

  document.getElementById('typewriter').textContent = char;

  if (char.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause before next string
  } else {
    setTimeout(type, 100); // typing speed
  }
}

type();


// switch color
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');

  toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
  });
});


function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}
