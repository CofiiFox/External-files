
//Enter the PassWord
const email = "useremail@example.com"
const password = 12345
const submisssionPass = document.getElementById('passenter')
const submisssionMail = document.getElementById('mailenter')

function passSubmited() {
    var passEnterned =  submisssionPass.value
    var emailEnterned = submisssionMail.value

    if (passEnterned == password && emailEnterned == email) {
    } else {
    }
}