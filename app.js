var firebaseConfig = {
  apiKey: "AIzaSyCCnKiNqfCL5ozEzE0OyV2RgbrWkYdcys4",
  authDomain: "resource-documenter.firebaseapp.com",
  databaseURL: "https://resource-documenter.firebaseio.com",
  projectId: "resource-documenter",
  storageBucket: "",
  messagingSenderId: "363486461416",
  appId: "1:363486461416:web:30e0ca2f1d3e040e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var hashTags;

//on page load: populates categories menu and page from Firebase list
function populateCategory (){
  database.ref("Categories").on("child_added", function(childSnapshot){
  populateCat = childSnapshot.val().category
  console.log(populateCat);
  var option = $("<option>" + populateCat+ "</option>")
  option.attr("value", populateCat)
  $(".categoryList").append(option)
  var div = $("<div class='card'>")


  var h4 = $("<h4>")
  h4.append(populateCat)
  div.append(h4)
  div.attr("id",populateCat)
  $(".categorySort").append(div)
  })
}
populateCategory()

// on button click, adds a new category to the category dropdown
$(".category").on("click", ".addCategory", function(){
newCategory()
})  

//function that adds a new category to the dropdown
function newCategory() {
  event.preventDefault();
  var categoryText = $("#categoryText").val();
  var newCategory = {
    category: categoryText
  }
  database.ref("Categories").push(newCategory)
  $("#categoryText").val("");
}

// click event adds values to Firebase and reset's display values
$("#add").on("click", function (event) {
  event.preventDefault();
  documentURL = $("#urlAddress").val().toString();
  hashTags = $("#hashTags").val().split(" ")//breaks the hashtags apart on each space
  category = $(".categoryList").val()

var urlInput = {
  urlAddress: documentURL,
  hashTags: hashTags,
  category: category,
}
$("#urlAddress").val("");
$("#hashTags").val("");
database.ref("URL_Inputs").push(urlInput)
})

// grabs values from Firebase and displays them to the screen
database.ref("URL_Inputs").on("child_added", function(childSnapshot){
  fbURL = childSnapshot.val().urlAddress
  fbTags = childSnapshot.val().hashTags
  fbCatRef = childSnapshot.val().category
  var br = $("<br>")
  var div = $("<div class='card'>")
  div.addClass(fbCatRef)
  div.append(fbURL)
  div.append(br)
  div.append(fbTags)

  $("#"+fbCatRef).append(div);
})

