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
  documentURL = $("#urlAddress").val();
  hashTags = $("#hashTags").val().split("#")
 var tagNum = 1;
  for (let i=1; i<hashTags.length; i++){
  //   console.log(hashTags[i]);
  //   console.log(tagNum++);
  
}



var urlInput = {
  urlAddress: documentURL,
  hashTags: hashTags,
  // tagNum
  // data_state: dataState
}
$("#urlAddress").val("");
$("#hashTags").val("")
database.ref("URL_Inputs").push(urlInput)
})

database.ref("URL_Inputs").on("child_added", function(childSnapshot){
  fbURL = childSnapshot.val().urlAddress
  fbTags = childSnapshot.val().hashTags
  var div = $("<div class='card'>")
  var br = $("<br>")
  div.append(fbURL)
  div.append(br)
  div.append(fbTags)
  div.attr("data_state", "off")
  console.log(fbURL);
  console.log(fbTags);
  $("#displayArea").prepend(div);


})

// function addResource (arg1, arg2, arg3){
//   //make this a constructor function
//   this.name = name;
//   this.effort = effort;
//   this.grade = grade;
//   this.finalreview = function() {

//   }
// }