import React, { useEffect, useState } from 'react'
import { Input, Button, Typography } from "@material-tailwind/react";
import TableUserMaterial from '../components/TableUserMaterial';

export default function UserPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then(response => response.json())
      .then(res => {
        const newUsers = [...res.data];
        setUsers(newUsers);
        console.log(users);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.name = name;
    data.age = age;
    data.email = email;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions)
      .then(response => response.json())
      .then(data => {
        reload();
      });
  }
  const reload = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
    const res = await response.json()
    const newUsers = [...res.data];
    setUsers(newUsers);

  }
  const eliminar = (_id) => {
    console.log(_id)
    fetch(`${process.env.REACT_APP_API_URL}/users/${_id}`, { method: 'DELETE' })
      .then(() => reload());

  }

  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-4 lg:py-4 bg-gray-700 rounded-lg">
      <div className='px-12 mt-2 pb-5 bg-blue-200 justify-items-center rounded-lg'>
        <div className='grid justify-items-center rounded'>
          <form onSubmit={handleSubmit}>
            <div className={'flex flex-col p-5 m-2 items-center gap-4'}>
            <Typography className='cursor-default' variant="h5">Registre Usuario</Typography>
              <div className='flex flex-col lg:flex-row'>
              <Input size="lg" type="text" color='indigo' label="Nombre" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} icon={<i class="fa-solid fa-user-plus"></i>} />
              <Input size="lg" type="email" color='indigo' label="Correo" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} icon={<i class="fa-solid fa-at"></i>} />
              <Input size="lg" type="number" color='indigo' label="Edad" id='age' name='age' value={age} onChange={(e) => setAge(e.target.value)} icon={<i class="fa-solid fa-calendar-check"></i>} pattern="[0-9]+" />
              </div>
              <div className='flex flex-col lg:flex-row'>
              <Button size="lg" type="submit">Guardar</Button>
              </div>
            </div>
          </form>
        </div>
        <TableUserMaterial usersData={users} eliminar={eliminar} />
      </div>
    </div>
  )
}

