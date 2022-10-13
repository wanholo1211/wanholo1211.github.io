function sendCheck(){
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let content = document.getElementById('Content').value;
    
    // if(name == ''){
    //     alert('Name is Empty.');
    //     document.getElementById('Name').focus();
    // }else if(email == ''){
    //     alert('Email is Empty.');
    //     document.getElementById('Email').focus();
    // }else if(content == ''){
    //     alert('Message is Empty.');
    //     document.getElementById('Content').focus();
    // }

    // if (name && email && content != ''){

    //     if(ValidateEmail(email)==true){
    //         //checked
    //         alert('Thank you for your message.')
    //         console.log('out');
    //     }
    // }

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "wanholo1211@gmail.com",
        Password : "BC9B7139074E5C6317530002D5344AB84CEF",
        To : 'wanholo1211@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
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
