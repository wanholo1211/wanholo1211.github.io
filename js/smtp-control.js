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
        SecureToken : '79e4a115-6824-4917-8a26-e675ee9a4c32',
        To : 'wanholo1211@gmail.com',
        From : email,
        Subject : 'New Contact from ' + name,
        Body : content
    });
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