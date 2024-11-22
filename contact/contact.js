
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("description").value;

    let emailReceiver = "ilhamfaqot1223@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`
    a.target =  "_blank";
    a.click();
}

