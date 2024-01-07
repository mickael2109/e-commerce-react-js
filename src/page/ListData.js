import React from 'react';
import { useState } from 'react';
import { getUsersData } from '../data/data';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListData = () => {

    const [usersData, setUsersData] = useState([]);

    const getData = async() => {
        const data = await getUsersData();
        setUsersData(data);
    }

    useEffect(() => {
       getData()
    }, []);

    return (
        <div>
            <h1>Utilisation de données dans React</h1>
            <Link to='/ajouter'>Ajouter</Link>

            <h2>Liste des utilisateurs :</h2>
            <ul>
                {Object.values(usersData).map(user => (
                <li key={user.id}>
                    {user.name} - {user.age} ans
                </li>
                ))}
            </ul>

        </div>
    );
};

export default ListData;