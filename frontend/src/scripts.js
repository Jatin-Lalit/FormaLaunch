document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
  
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value
    };
  
    const url = "https://formlanding.onrender.com/post";
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.msg === "true") {
        alert("Thank you for contacting us!\n We will try to connect you as soon as possible");
      } else {
        alert("An error occurred. Please try again later.");
      }
    })
    .catch(error => {
      alert("An error occurred. ");
      console.error("Error:", error);
    });
  });