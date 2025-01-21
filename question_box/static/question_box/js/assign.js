document.addEventListener('DOMContentLoaded', function() {

    //When forms are submitted
    Array.from(document.querySelectorAll('button')).forEach(button => {
        button.onclick = () =>{
            let box_id = button.id.slice(6);

            //Get the id of the thera assigned to answer
            let answered_by_html_id = "answered_by" + box_id;
            let confirmed_by_html_id = "confirmed_by" + box_id;
            let answered_by = document.querySelector(`#${answered_by_html_id}`).value;
            let confirmed_by = document.querySelector(`#${confirmed_by_html_id}`).value;
            
            alert("Assigned Successfully")

            var url_now = window.location.href;
            var url = url_now.slice(0, url_now.indexOf("assign")) + "assign/fetch";

            //POST the assigned theras to answer and confirm
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    answered_by: answered_by,
                    confirmed_by: confirmed_by,
                    box_id: box_id
                })
            })
                .then(result => {
                location.href = window.location.href
            });
        }
    });
})
