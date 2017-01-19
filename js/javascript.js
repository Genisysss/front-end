/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function onContainerClick (event) {
  if(event.classList.contains('off')) {
    event.classList.remove('off');
  } else {
    event.classList.add('off');
  }
}

document.getElementById("search").addEventListener("click", checkViewport, false);
document.getElementById("inputSluiten").addEventListener("click", sluitenSearchInput, false);

function checkViewport() {
    if (window.matchMedia("(max-width: 960px)").matches) {
        openSearchBar();
    }else{
        document.getElementById("searchInput").style.visibility = "visible";
        document.getElementById("inputSluiten").style.display = "block";
        document.getElementById("searchInput").className += " " + "expandSearchInput";
        }
}

function sluitenSearchInput() {
    document.getElementById("searchInput").classList.remove("expandSearchInput");
    document.getElementById("searchInput").style.visibility = "hidden";
    document.getElementById("inputSluiten").style.display = "none";
}
