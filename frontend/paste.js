
  async function createPaste() {
    const content = document.getElementById("content").value;
    const time = document.getElementById("time").value;
    const maxView = document.getElementById("maxView").value;
  
    
    const response = await fetch("https://pastebins.onrender.com/api/postes", {
        // http://localhost:3000/
        // https://pastebin-one-nu.vercel.app/
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content,
        time: time ? Number(time) : null,
        maxView: maxView ? Number(maxView) : null
      })
    });

    const data = await response.json();

    if (!response.ok) {
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerText = data.error;
      return;
    }

    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML =
      `Paste Created:<br><a href="${data.url}" target="_blank">${data.url}</a>`;
  }
