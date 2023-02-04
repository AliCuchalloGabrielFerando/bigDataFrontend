import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function LoadFile() {
    const [file, setFile] = useState();
    const [users,setUsers]=useState([]);
    const [graphics,setGraphics]= useState([]);
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    useEffect( ()=>{
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(res =>{
              const newUsers = [...res.data];
              setUsers(newUsers);
            });
        fetch('http://localhost:3001/api/histories')
            .then(response => response.json())
            .then(res =>{
              const newGraphics = [...res.data];
              newGraphics.forEach(item=>{
                  let time = new Date(item.createdAt);
                  item.createdAt = time.toString();
              })
              setGraphics(newGraphics);
            });

      },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        let fileRead = new FileReader();
      
        fileRead.onload = e =>{
            let contenido = e.target.result;    
            let interno = JSON.parse(contenido);
            console.log(interno["Browser History"].length)
            sendData(interno["Browser History"]);
        }
      
        fileRead.readAsText(file);
      
      
    }
    const sendData = (histories)=>{
        console.log(users[id]);
        let data ={};   
        data.histories= histories;
        data.user = users[id];
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:3001/api/histories', requestOptions)
            .then(response => response.json())
            .then(res =>{
             console.log(res)
             reload();
            });
        }
        const eliminar = (_id)=>{
            console.log(_id)
            fetch(`http://localhost:3001/api/histories/${_id}`, { method: 'DELETE' })
            .then(() => reload());
            
          }
        const reload = async()=>{
          fetch('http://localhost:3001/api/histories')
          .then(response => response.json())
          .then(res =>{
            const newGraphics = [...res.data];
            newGraphics.forEach(item=>{
                let time = new Date(item.createdAt);
                item.createdAt = time.toString();
            })
            setGraphics(newGraphics);
          });
          }

        const ver =(_id)=>{
          navigate(`/graph/${_id}`);
        }
  return (
    <div className='px-5 mt-2 pb-5 bg-blue-200 justify-items-center'>
    
      <div className={' grid justify-items-center'}>
        <form onSubmit={handleSubmit}>
          <div className={'flex flex-row p-5 items-center '}>
            <h1>Registre Archivo</h1>
            
          <input className={`form-control
    block
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-blue-200 px-2 mx-5 w-full`} type="file" id='file' name='file' placeholder='archivo' onChange = {(e)=>setFile(e.target.files[0])}/>
          <h1>Usuario: </h1>
          <select className={`form-select form-select-lg ml-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out`}
            name='user_id' id='user_id' onChange={(e)=>setId(e.target.value)} required>
          
          <option name ="option" id="option" value="">seleccione</option>
            {users.map(({_id,name},index)=>(
                    <option key={_id} value={index}>{name}</option>
            ))}
          </select>
          <input className={'bg-blue-500 rounded px-2 mx-5 hover:bg-sky-700'} type="submit" value="Guardar"/>
          </div>
        </form>
      </div>

      <div className={'bg-blue-100 mt-5 p-5 grid justify-items-center'}>
        <table className={'table-auto'}>
          <thead >
            <tr>
              <th className={'p-2'}>Usuario</th>
              <th>Fecha</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {graphics.map(({_id,user,categories,createdAt})=>(
              <tr key={_id}>
                <td className={'p-2'}>{user.name}</td>
                <td>{createdAt}</td>
                <td><button className={'bg-red-500 rounded p-2 mt-2 mx-2'} onClick={()=>eliminar(_id)}>Eliminar</button></td>
                <td><button className={'bg-blue-500 rounded p-2 mt-2 mx-2'} onClick={()=>ver(_id)}>Ver</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
