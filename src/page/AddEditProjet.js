import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addUser, deleteUser, getUsersData } from '../data/data';
import { Link } from 'react-router-dom';

const AddEditProjet = () => {

    const [usersData, setUsersData] = useState({});
    const [newUserData, setNewUserData] = useState({
      id: '',
      name: '',
      age: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        await addUser(newUserData.id, newUserData.name, newUserData.age);
        const updatedData = await getUsersData();
        setUsersData(updatedData);
        // Réinitialisez les champs du formulaire
        setNewUserData({ id: '', name: '', age: '' });
    };

  const handleUpdateUser = async () => {
    await updatedData('user1', 'John Updated', 26);
    const updatedData = await getUsersData();
    setUsersData(updatedData);
  };

  const handleDeleteUser = async () => {
    await deleteUser('user2');
    const updatedData = await getUsersData();
    setUsersData(updatedData);
  };


    return (
        <div>
            <Link to='/'>Retour</Link>
            <form onSubmit={handleAddUser}>
                <label>
                    ID:
                    <input type='text' name='id' value={newUserData.id} onChange={handleInputChange} />
                </label>
                <label>
                    Nom:
                    <input type='text' name='name' value={newUserData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Age:
                    <input type='text' name='age' value={newUserData.age} onChange={handleInputChange} />
                </label>
     

                <button type='submit'>Ajouter un utilisateur</button>
        </form>
        <button onClick={handleUpdateUser}>Mettre à jour un utilisateur</button>
        <button onClick={handleDeleteUser}>Supprimer un utilisateur</button>
  </div>
    );
};

export default AddEditProjet;