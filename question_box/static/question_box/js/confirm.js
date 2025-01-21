document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.getElementsByClassName('confirm')).forEach(button => {
        button.onclick = () => {
            var content = button.innerHTML;
            let answer_id = button.id.slice(7);
            let username = document.querySelector('h2').id;
            var url_now = window.location.href;
            var url = url_now.slice(0, url_now.indexOf("confirm")) + "confirm/" + username + '/fetch';
            if(content === "Confirm")
            {

                //PUT the confirmation
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify({
                        answer_id: answer_id,
                        confirmed: true
                    })
                })
                    .then(result => {
                        location.href = window.location.href;
                    });
            }
            else
            {

                //PUT the confirmation
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify({
                        answer_id: answer_id,
                        confirmed: false
                    })
                })
                    .then(result => {
                        location.href = window.location.href;
                    });
            }
        };
    });

    Array.from(document.getElementsByClassName('edit')).forEach(button => {
        button.onclick = () => {
            var div_edit_id = "div_edit" + button.id.slice(4);
            var div_edit = document.querySelector(`#${div_edit_id}`);
            div_edit.style.display = "block";
            button.parentElement.style.display = "none";
        };
    });

    Array.from(document.getElementsByClassName('edit_cancel')).forEach(button => {
        button.onclick = () => {
            var div_button_id = "div_button" + button.id.slice(11);
            var div_button = document.querySelector(`#${div_button_id}`);
            div_button.style.display = "block";
            button.parentElement.style.display = "none";
        };
    });

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
            let username = document.querySelector('h2').id
            var url_now = window.location.href;
            var url = url_now.slice(0, url_now.indexOf("confirm")) + "confirm/" + username + '/edit';
            
            let answer = textarea.value
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

    Array.from(document.getElementsByClassName('answer')).forEach(button => {
        button.onclick = () => {
            var div_answer_id = "div_answer" + button.id.slice(6);
            var div_answer = document.querySelector(`#${div_answer_id}`);
            div_answer.style.display = "block";
            button.style.display = "none";
        };
    });

    Array.from(document.getElementsByClassName('answer_cancel')).forEach(button => {
        button.onclick = () => {
            var answer_button_id = "answer" + button.id.slice(13);
            var answer_button = document.querySelector(`#${answer_button_id }`);
            answer_button.style.display = "block";
            button.parentElement.style.display = "none";
        };
    });

    Array.from(document.getElementsByClassName('submit')).forEach(button => {
        let box_id = button.id.slice(6)
        let textarea_id = "answer_textarea" + box_id
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
            let answer = textarea.value
            console.log(`box_id:${box_id}`)
            console.log(`answer:${answer}`)
        }
    })

})
