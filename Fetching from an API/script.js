async function loadUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();

        const userList = document.getElementById('userList');
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}