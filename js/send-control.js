function sendCheck(){
    const name = document.getElementById('Name').value
    const email = document.getElementById('Email').value
    const content = document.getElementById('Message').value

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvfPzF5-JbDhFj4ZzI4M8nc64l8QW3FKFRFY0QPuRHBc5t1y9N1XOZW7kmeVqMmgcdBQ/exec'
    const form = document.forms['submit-to-google-sheet']

    if (name && email && content != ''){

        if(ValidateEmail(email)==true){
            //checked
            form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                  .then(response => console.log('Success!', response))
                  .catch(error => console.error('Error!', error.message))
            })
            alert('Thank you for your message.')
            console.log('out');
        }
    }
}

function ValidateEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        document.getElementById('Email').focus();
        return false;
    }
}
