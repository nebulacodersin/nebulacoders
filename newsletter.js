function emailsend(){
    var add=document.getElementById('emailfield').value
    var msg="Hello Nebula Coders<br/>" + add +"  Subscribed Your Newsletter<br/>";
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nebulacodersbpmce@gmail.com",
    Password : "2CE7D3E2EFBDB15A1F0685A35ADBF4CCFFDB",
    To : '22105128040@bpmcemadhepura.org',
    From : "nebulacodersbpmce@gmail.com",
    Subject : "Someone Subscribed Your Newsletter",
    Body : msg
}).then(
  message => {
    if (message=='OK') {
        Swal.fire({
            title: "Message Sent",
            text: "You have Subscibed To Our Newsletter",
            icon: "success"
          })
    }
  }
);
}