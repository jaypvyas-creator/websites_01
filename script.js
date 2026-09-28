async function saveUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch(
        "https://demobgis.gamer.gd.com/api/create-user.php",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        }
    );

    const data = await response.json();

    document.getElementById("result").innerText =
        data.message;
}
