function openMenu(){
    let menuBar = document.getElementById("my_nav-bar");
    if (menuBar.className === "nav-bar") {
    menuBar.className += " responsive";
  } else {
    menuBar.className = "nav-bar";
  }
  console.log(menuBar.className);
}