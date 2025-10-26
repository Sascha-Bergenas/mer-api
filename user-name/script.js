const userList = document.getElementById("user-list");

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      config
    );
    const userData = await response.json();
    return userData;
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
};

const listAllUsers = async () => {
  const users = await getUsers();
  users.forEach((user) => {
    const listItem = document.createElement("li");
    console.log(user);
    listItem.textContent = `${user.name} - ${user.username}`;
    userList.appendChild(listItem);
  });
};

listAllUsers();
