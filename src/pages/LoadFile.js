import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select, Option, Typography, Button } from "@material-tailwind/react";
import TableGraphMaterial from '../components/TableGraphMaterial';
export default function LoadFile() {
  const [file, setFile] = useState();
  const [users, setUsers] = useState([]);
  const [graphics, setGraphics] = useState([]);
  const [indexUser, setIndexUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then(response => response.json())
      .then(res => {
        const newUsers = [...res.data];
        setUsers(newUsers);
      });
    fetch(`${process.env.REACT_APP_API_URL}/histories`)
      .then(response => response.json())
      .then(res => {
        const newGraphics = [...res.data];
        newGraphics.forEach(item => {
          let time = new Date(item.createdAt);
          item.createdAt = time.toString();
        })
        setGraphics(newGraphics);
      });

  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();
    let fileRead = new FileReader();
    // se captura el archivo y obtiene el historial que es enviando a la funcion sendData
    fileRead.onload = e => {
      let contenido = e.target.result;
      let interno = JSON.parse(contenido);
      sendData(interno["Browser History"]);
    }
    fileRead.readAsText(file);
  }

  const sendData = (histories) => {
    let data = {};
    data.histories = histories;
    data.user = indexUser !== null && !isNaN(indexUser) ? users.find((user, index) => index == indexUser) : users[0];
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${process.env.REACT_APP_API_URL}/histories`, requestOptions)
      .then(response => response.json())
      .then(res => {
        reload();
      });
  }
  const eliminar = (_id) => {
    fetch(`${process.env.REACT_APP_API_URL}/histories/${_id}`, { method: 'DELETE' })
      .then(() => reload());

  }
  const reload = async () => {
    fetch(`${process.env.REACT_APP_API_URL}/histories`)
      .then(response => response.json())
      .then(res => {
        const newGraphics = [...res.data];
        newGraphics.forEach(item => {
          let time = new Date(item.createdAt);
          item.createdAt = time.toString();
        })
        setGraphics(newGraphics);
      });
  }

  const ver = (_id) => {
    navigate(`/graph/${_id}`);
  }

  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-gray-700 rounded-lg">
      <div className='px-5 mt-2 pb-5 bg-blue-200 justify-items-center rounded-lg'>

        <div className='grid justify-items-center'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col p-5 m-2 items-center gap-4'>
              <Typography className='cursor-default' variant="h5">Registre Archivo</Typography>
              <input className={`block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-400 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-blue hover:file:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60`}
                type="file" id='file' name='file' placeholder='archivo' onChange={(e) => setFile(e.target.files[0])} />
              <Select color='indigo' size="lg" label="Seleccione Usuario" name='user_id' id='user_id' onChange={(index) => setIndexUser(index)} required>
                {users.map(({ _id, name }, index) => (
                  <Option key={_id} value={index.toString()} >{name}</Option>
                ))}
              </Select>
              <Button size="lg" type="submit">Procesar</Button>
            </div>
          </form>
        </div>
        <TableGraphMaterial graphicsData={graphics} ver={ver} eliminar={eliminar} />
      </div>
    </div>
  )
}
