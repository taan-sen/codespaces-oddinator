function checkOdd() {
    const input = document.getElementById("numberInput").value.trim();
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = "Checking...";
  
    fetch("/api/is-odd", { // Replace with real backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: input })
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          responseDiv.textContent = data.isOdd ? "Yes, it's odd!" : "No, it's even!";
        } else {
          responseDiv.textContent = data.error || "Something went wrong!";
        }
      })
      .catch(() => {
        responseDiv.textContent = "Unable to contact server.";
      });
  }
  