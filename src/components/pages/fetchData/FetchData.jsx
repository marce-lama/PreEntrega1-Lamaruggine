import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");

    data
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp))
      .catch((error) => console.log(error));
  }, []);

  const newUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const createUser = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Authorization: "AFFASRGVRTAQ123465ASAS",
        "Content-Type": "Aplication/json",
      },
      body: JSON.stringify(newUser),
    });
    data.then((resp) => console.log(resp)).catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Feching de datos</h1>

      <button onClick={createUser}>Crear Usuario</button>
    </div>
  );
};

export default FetchData;
