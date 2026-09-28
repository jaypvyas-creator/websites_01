const API_URL = "https://demobgis.gamer.gd/api";
async function createUser(name, email) {
    const response = await fetch(`${API_URL}/create-user.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    });

    return await response.json();
}
