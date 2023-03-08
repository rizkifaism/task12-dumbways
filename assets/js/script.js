// Contact Form
const btnContact = document.querySelector("#btn-contact");

btnContact.addEventListener("click", function (e) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  if (name == "") {
    return alert("Name cannot be empty");
  } else if (email == "") {
    return alert("Email cannot be empty");
  } else if (phone == "") {
    return alert("Phone Number cannot be empty");
  } else if (subject == "") {
    return alert("Subject cannot be empty");
  } else if (message == "") {
    return alert("Message cannot be empty");
  }

  const emailReceiver = "rizkifais23@gmail.com";

  let mail = document.createElement("a");
  mail.href = `mailto:${emailReceiver}?Subject=${subject}&body=Hello my name is ${name}, ${message}`;
  mail.click();

  let data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  e.preventDefault();
});
