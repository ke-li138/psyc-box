document.addEventListener('DOMContentLoaded', function() {

    //The buttons that change the topic of the thera
    Array.from(document.getElementsByClassName('change')).forEach( change_button => {
        change_button.onclick = () => {
            let thera_id = change_button.id.slice(6);
            
            //The corresponding activation button
            activation_button_id = "activation" + thera_id
            activation_button = document.querySelector(`#${activation_button_id}`)

            //The div
            div_id = "div" + thera_id;
            div = document.querySelector(`#${div_id}`);

            //The id of the span of the thera's topic
            thera_topic_id = "topic" + thera_id;
            thera_topic = document.querySelector(`#${thera_topic_id}`);

            //The buttons will be invisible
            change_button.style.display = 'none'
            activation_button.style.display = 'none'

            //Create the select list to the answer_box div
            let selectList = document.createElement('select');
            selectList.name = "topic"

            //Add the topics
            let topics = ["family", "study", "social", "personal development", "other", "confirm"];
            let topics_text = ["Family", "Study", "Social", "Personal Development", "Other", "Confirm"];

            for(let i = 0; i < topics.length; i++)
            {
                let option = document.createElement('option');
                option.value = topics[i]

                if(topics[i] === thera_topic.innerText.split('(')[1].split(')')[0])
                {
                    option.selected = true
                }

                option.text = topics_text[i]
                selectList.append(option)
            }

            //Add styles to selectList
            addClasses(selectList, ["form-control", "form-select-lg", "mb-3"]);

            div.append(selectList);

            //Append the save button to the question_box div
            let save = document.createElement('button');
            save.innerHTML = "Save";
            
            //Add some styles to the save button
            addClasses(save, ["btn", "btn-primary", "but", "inline-block"]);

            save.onclick = () => {

                // //Hide the newly added buttons and restore the original ones
                // selectList.remove();
                // save.remove();
                // cancel.remove();
                // change_button.style.display = "inline-block";
                // activation_button.style.display = "inline-block";
                // thera_topic.innerText = '(' + topics[selectList.selectedIndex] + ')';

                let topic = topics[selectList.selectedIndex]
                console.log(topic);

                var url_now = window.location.href;
                var url = url_now.slice(0, url_now.indexOf("therapists")) + "therapists/change"

                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({
                        thera_id: thera_id,
                        topic: topic,
                    })
                })
                    .then(result => {
                    location.href = window.location.href
                })

            }

            //Create the cancel button
            const cancel = document.createElement('button');
            cancel.innerHTML = "cancel";
            cancel.type = "button";

            //Add some styles to the submit button
            addClasses(cancel, ["btn", "btn-outline-secondary", "but", "inline-block"]);
            
            cancel.onclick = () => {

                //Hide the newly added buttons and restore the original ones
                selectList.remove();
                save.remove();
                cancel.remove();
                change_button.style.display = "inline-block";
                activation_button.style.display = "inline-block";
            }
                
            div.append(save);
            div.append(cancel);
        }
    });

    //The button that activates or deactivates the thera
    Array.from(document.getElementsByClassName('activation')).forEach( activation_button => {
        activation_button.onclick = () => {
            var thera_id = activation_button.id.slice(10);
            var active = null
            var url_now = window.location.href;
            var url_direct = url_now.slice(0, url_now.indexOf("therapists")) + "therapists/active";
            var url = url_now.slice(0, url_now.indexOf("therapists")) + "therapists/activation";

            if(activation_button.innerText === "Deactivate")
            {
                active = false;
            }
            else if(activation_button.innerText === "Activate")
            {
                active = true;
                url_direct = url_now.slice(0, url_now.indexOf("therapists")) + "therapists/inactive";
            }

            fetch(url, {
                method: "PUT",
                body: JSON.stringify({
                    thera_id: thera_id,
                    active: active,
                })
            })
                .then(result => {
                    location.href = url_direct;
            })
            
        }
    });
});

//Add classes to element objects
function addClasses(element, classes) {
    classes.forEach(css_class => {
      element.classList.add(css_class);
    }) 
}