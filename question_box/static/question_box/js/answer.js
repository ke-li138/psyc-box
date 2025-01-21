import { addClasses, url_trim } from "./my_functions.js";

document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.querySelectorAll('form')).forEach(form => {
        form.onsubmit = () => {
            let box_id = form.id.slice(4);

            //Get the id of the thera assigned to answer
            let answered_html_id = "answer" + box_id;
            let answer = document.querySelector(`#${answered_html_id}`).value;

            console.log(`answer: ${answer}`)
            console.log(`box_id: ${box_id}`)

            alert("Answer Recieved")
            
            //POST the answer of the thera
            // fetch(url, {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         answer: answer,
            //         box_id: box_id,
            //     })
            // })
            //     .then(result => {
            //         if(document.querySelector('#flag_answered').innerHTML === 'Unanswered')
            //         {
            //             location.href = '/' + username + '/answer/unanswered'
            //         }
            //         else
            //         {
            //             location.href = '/' + username + '/answer/answered'
            //         }
            // })
        }
    });

    Array.from(document.getElementsByClassName('edit')).forEach(button => {
        button.onclick = () => {
            var div_edit_id = "div_edit" + button.id.slice(4)
            var div_edit = document.querySelector(`#${div_edit_id}`)
            div_edit.style.display = "block"
            button.style.display = "none"
        }
    })

    Array.from(document.getElementsByClassName('cancel')).forEach(button => {
        button.onclick = () => {
            var button_edit_id = "edit" + button.id.slice(6)
            var button_edit = document.querySelector(`#${button_edit_id}`)
            button_edit.style.display = "block"
            button.parentElement.style.display = "none"
        }
    })

    Array.from(document.getElementsByClassName('save')).forEach(button => {
        let answer_id = button.id.slice(4)
        let textarea_id = "edit_textarea" + answer_id
        let textarea = document.querySelector(`#${textarea_id}`)

        button.disabled = true;
        
        //Diable the save button when the answer is empty or unchanged
        textarea.addEventListener('input', () => {
            if (textarea.value.trim() === '') {
                button.disabled = true;
            }
    
            else {
                button.disabled = false;
            }
        });

        button.onclick = () => {
            var username = document.querySelector('h2').id
            var url_now = window.location.href;
            var url = url_trim(url_now, "answer") + 'answer/' + username +'/edit'
            
            var answer = textarea.value
            console.log(`answer_id:${answer_id}`)
            console.log(`answer:${answer}`)
            
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({
                    answer_id: answer_id,
                    answer: answer,
                })
            })
                .then(result => {
                        location.href = window.location.href
            })
        }
    });

    // Array.from(document.getElementsByClassName('omit')).forEach(button => {
    //     button.onclick = () => {
    //         var question_id = button.id.slice(4);
    //         var content = button.innerHTML;
    //         if(content === "Omit"){
    //             button.innerHTML = "Not Omit";

    //             console.log('edited: false')
                
    //             fetch(url, {
    //                 method: "PUT",
    //                 body: JSON.stringify({
    //                     question_id: question_id,
    //                     edited: false
    //                 })
    //             })
    //         }

    //         if(content === "Not Omit"){
    //             button.innerHTML = "Omit";

    //             console.log('edited: true')

    //             fetch(url, {
    //                 method: "PUT",
    //                 body: JSON.stringify({
    //                     question_id: question_id,
    //                     edited: true
    //                 })
    //             })
    //         }
    //     }
    // })
});

//Add classes to element objects
// function addClasses(element, classes) {
//     classes.forEach(css_class => {
//       element.classList.add(css_class);
//     }) 
// }