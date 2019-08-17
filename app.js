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

$("#add").on("click", function (event) {
event.preventDefault();
documentURL = $("#urlAddress").val()
console.log(documentURL);
hashTags = $("#hashTags").val()
var urlInput = {
  urlAddress: documentURL,
  hashTags: hashTags
}
$("#urlAddress").val("");
database.ref("URL_Inputs").push(urlInput)
})

database.ref("URL_Inputs").on("child_added", function(childSnapshot){
  fbURL = childSnapshot.val().urlAddress
  fbTags = childSnapshot.val().hashTags
  var div = $("<div>")
  div.append(fbURL)
  div.append(fbTags)
  console.log(fbURL);
  console.log(fbTags);
  $("#displayArea").prepend(div);


})