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

        const text = await response.text();

        console.log("HTTP Status:", response.status);
        console.log("Response:", text);

        try {
            const data = JSON.parse(text);

            result.innerText = data.message || "Request completed";
        } catch (e) {
            result.innerText = "Server returned non-JSON response";
            console.error(text);
        }

    } catch (error) {
        console.error("Fetch error:", error);
        result.innerText = "API request failed: " + error.message;
    }
}
