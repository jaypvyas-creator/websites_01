const API_URL = "https://demobgis.gamer.gd/api";

async function saveUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const result = document.getElementById("result");

    try {
        const response = await fetch(`${API_URL}/create-user.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        console.log("Status:", response.status);

        const rawResponse = await response.text();

        console.log("Raw response:", rawResponse);

        result.innerText = rawResponse;

    } catch (error) {
        console.error("Fetch error:", error);
        result.innerText = "API request failed: " + error.message;
    }
}
