function sendMessage(event) {
  event.preventDefault();

  let input = document.getElementById("message").value;
  let from = document.getElementById("name").value;
  let message = input;
  let name = from;
  let loading = true;

  if (message === "" || name === "") {
    alert("Message is empty");
  } else {
    loading = false;
    loadingFunction(loading);
    fetch("https://formspree.io/f/mpwlejpy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        name: name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("success: ", data);
        alert("love you mahal kita < 3, message sent! ", data);
        loading = true;
        loadingFunction(loading);
        document.getElementById("message").value = "";
        document.getElementById("name").value = "";
      })
      .catch((error) => {
        alert("success: ", error);
        console.error("Error:", error);
      });
  }
}

function loadingFunction(loading) {
  if (!loading) {
    document.querySelector(".jeff").style.display = "none";
    document.querySelector(".loading").style.display = "flex";
  } else {
    document.querySelector(".jeff").style.display = "";
    document.querySelector(".loading").style.display = "none";
  }
}
