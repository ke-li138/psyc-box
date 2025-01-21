document.addEventListener('DOMContentLoaded', function() {

    //The Button to Continue the Dialogue
    Array.from( document.getElementsByClassName( 'askMore' ) ).forEach ( button => {
        button.onclick = () => {   
            let box_id = button.id.slice(7);
            button.style.display = 'none';
            
            const form = document.createElement('form')
            form.method = "post";
            form.action = window.location.href;

            //Create the text area of the form
            const textarea = document.createElement('textarea');
            textarea.name = "question";
            textarea.placeholder = "继续该对话";

            //Add some styles to the textarea
            addClasses(textarea, ["form-control", "is-valid", "textarea-small"])
            textarea.style.minHeight = "200px"

            form.append(textarea);
            
            // Append the hidden input to the form
            const hidden = document.createElement( 'input' );
            hidden.type = "hidden";
            hidden.name = "box_id";
            hidden.value = box_id;
            form.append( hidden )
            
            //Create the submit input to the form
            const submit = document.createElement( 'input' );
            submit.type = "submit";
            submit.value = "提交";

            //Add some styles to the submit button
            addClasses(submit, ["btn", "btn-success", "but", "inline-block"]);

            form.append( submit );

            //Disable the button when the textarea is empty
            submit.disabled = true;
            textarea.addEventListener( 'input', () => {
                if ( textarea.value.trim() === '' ) {
                    submit.disabled = true;
                }
                else {
                    submit.disabled = false;
                }
            } )

            //Create the cancel button
            const cancel = document.createElement('button');
            cancel.innerHTML = "取消";
            cancel.type = "button";

            //Add some styles to the submit button
            addClasses(cancel, ["btn", "btn-outline-secondary", "but", "inline-block"]);
            
            cancel.onclick = () => {
                button.style.display = "block";
                form.style.display = "none";
                cancel.style.display = "none";
            }

            form.onsubmit = () => {
                console.log(textarea.value)
                console.log(box_id)
                alert("问题成功提交。我们会很快答复!")
            }
            
            //Get the div of the requested box
            let div_id = 'box' + box_id;
            div = document.querySelector( `#${ div_id }` );
            div.append(form);
            form.append(cancel);
        }
    })

    // //The button to edit the question
    // Array.from(document.getElementsByClassName('edit')).forEach(button => {
    //     button.onclick = () => {
    //         let question_id = button.id.slice(4);

    //         //div_question_box stands for the box which the question to be editted is in.
    //         //div_question stands for the div that contains the question
    //         let div_question_box_id = 'question_box' + question_id;
    //         let div_question_id = 'question' + question_id;

    //         let div_question_box = document.querySelector(`#${div_question_box_id}`);
    //         let div_question = document.querySelector(`#${div_question_id}`);
                        
    //         //Get the content of the question to be editted
    //         const content = div_question.innerText.slice(3)

    //         //The div_question will be invisible after being clicked
    //         div_question.innerHTML = "Q:";
    //         button.style.display = 'none';

    //         //Append the textarea to the question_box div
    //         let textarea = document.createElement('textarea');
    //         textarea.value = content;

    //         //Add some styles to the textarea
    //         addClasses( textarea, [ "form-control", "is-valid" , "textarea-small", "inline-block"] ); 
            
    //         div_question_box.append(textarea);

    //         //Append the save button to the question_box div
    //         let save = document.createElement( 'button' );
    //         save.innerHTML = "Save";
    //         save.disabled = true;

    //         //Add some styles to the edit button
    //         addClasses( save, [ "btn", "btn-success", "but"] );

    //         save.onclick = () => {

    //             //The div shows the newly editted question
    //             let question = textarea.value;
    //             div_question.innerHTML = "Q: " + question;

    //             textarea.style.display = "none";
    //             save.style.display = "none";
    //             cancel.style.display = "none";
    //             button.style.display = "block";

    //             console.log( question )
                
    //             //The editted question must not be the same as before
    //             let post_id = "post_identifier" + question_id;
    //             document.querySelector(`#${post_id}`).innerHTML = "Waiting to be posted";
    //             fetch('/my_questions', {
    //                 method: "PUT", 
    //                 body: JSON.stringify({
    //                     question_id: question_id,
    //                     question: question,
    //                     type: "edit",
    //                 })
    //             })
    //         }

    //         //Create the cancel button
    //         const cancel = document.createElement('button');
    //         cancel.innerHTML = "cancel";
    //         cancel.type = "button";

    //         //Add some styles to the submit button
    //         addClasses(cancel, ["btn", "btn-outline-secondary", "but", "inline-block"]);
            
    //         cancel.onclick = () => {

    //             //The div shows the original question asked
    //             div_question.innerHTML = "Q: " + content;

    //             button.style.display = "block";
    //             textarea.style.display = "none";
    //             save.style.display = "none";
    //             cancel.style.display = "none";
    //         }

    //         div_question_box.append(save)
    //         div_question_box.append(cancel);

    //         //Disable the button when the textarea is empty or the same as the original question
    //         textarea.addEventListener( 'input', () => {
    //             if (textarea.value.trim() === '' || textarea.value.trim() === content.trim()) {
    //                 save.disabled = true;
    //             }
    //             else {
    //                 save.disabled = false;
    //             }
    //         })
    //     }
    // })
} );

//Add classes to element objects
function addClasses(element, classes) {
    classes.forEach(css_class => {
      element.classList.add(css_class);
    }) 
}
  
// //If the new question is empty
// function is_empty (element) {
//     for ( let i = 0; i < element.length; i++ ) {
//         if ( element[ i ] != ' ' ) {
//             return false;
//         }
//     }
//     return true;
// }