const fetchUserData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();

    dataContainer.innerHTML = ""; // Clear the loading message
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name; // Use textContent for security
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    console.error("Error fetching user data:", error); // Log the error
    dataContainer.innerHTML = ""; // Clear the loading message
    dataContainer.textContent = "Failed to load user data."; // Display error message
  }
};

document.addEventListener("DOMContentLoaded", fetchUserData);
