import {addClasses, url_trim} from "./my_functions.js";

document.addEventListener("DOMContentLoaded", function() {
  var url_now = window.location.href;
  var url = url_trim(url_now, "post") + "post/fetch";
  console.log(url);

  //PUT Questions
  Array.from(document.getElementsByClassName("question")).forEach((button) => {
    button.onclick = () => {
      var content = button.innerHTML;
      var question_id = button.id.slice(12);
      if (content === "Post") {
        
        //PUT whether it should be posted or not
        fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            question_id: question_id,
            post: true,
          }),
        })
          .then(result => {
            location.href = window.location.href
        });
      }
      
      else {

        //PUT whether it should be posted or not
        fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            question_id: question_id,
            post: false,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
    };
  });

  //PUT Answers
  Array.from(document.getElementsByClassName("answer")).forEach((button) => {
    button.onclick = () => {
      var content = button.innerHTML;
      var answer_id = button.id.slice(10);
      if (content === "Post") {
        
        //PUT whether it should be posted or not
        fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            answer_id: answer_id,
            post: true,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
      
      else {

        //PUT whether it should be posted or not
        fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            answer_id: answer_id,
            post: false,
          }),
        })
          .then(result => {
            location.href = window.location.href
          });
      }
    };
  });
});
