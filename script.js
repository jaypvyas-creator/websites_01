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

async function saveUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const result = document.getElementById("result");

    if (!name || !email) {
        result.innerText = "Please enter name and email.";
        return;
    }

    try {
        const data = await createUser(name, email);

        console.log(data);

        if (data.success) {
            result.innerText = "User created successfully.";

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
        } else {
            result.innerText = data.message || "Unable to create user.";
        }
    } catch (error) {
        console.error(error);
        result.innerText = "API request failed.";
    }
}
