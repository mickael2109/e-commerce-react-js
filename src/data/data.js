let usersData = {
    user1: { id: 'user1', name: 'John Doe', age: 25 },
    user2: { id: 'user2', name: 'Jane Doe', age: 30 },
  };
  
  const getUsersData = () => {
    return usersData;
  };
  
  const addUser = (id, name, age) => {
    usersData = {
      ...usersData,
      [id]: { id, name, age },
    };
  };
  
  const updateUser = (id, name, age) => {
    if (usersData.hasOwnProperty(id)) {
      usersData = {
        ...usersData,
        [id]: { id, name, age },
      };
    } else {
      console.error(`L'utilisateur avec l'ID "${id}" n'existe pas.`);
    }
  };
  
  const deleteUser = (id) => {
    if (usersData.hasOwnProperty(id)) {
      const newUsersData = { ...usersData };
      delete newUsersData[id];
      usersData = newUsersData;
    } else {
      console.error(`L'utilisateur avec l'ID "${id}" n'existe pas.`);
    }
  };
  
  export { getUsersData, addUser, updateUser, deleteUser };
  