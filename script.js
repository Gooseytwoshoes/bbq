function showDescription(imageID) {
    var description = document.getElementById('description' + imageID);
    if (description.style.display === "none") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
}  