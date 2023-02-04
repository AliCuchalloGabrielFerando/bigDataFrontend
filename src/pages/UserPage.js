import React, { useEffect, useState } from 'react'


export default function UserPage() {
  const [name,setName] = useState("");
  const [age, setAge] = useState();
  const [email,setEmail]= useState("");
  const [users,setUsers]=useState([]);
  
  useEffect( ()=>{
    fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(res =>{
          const newUsers = [...res.data];
          setUsers(newUsers);
          console.log(users);
        });
  },[]);
  const handleSubmit = (e)=>{
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
  fetch('http://localhost:3001/api/users', requestOptions)
      .then(response => response.json())
      .then(data =>{
        reload();
      });
  }
  const reload = async()=>{
    const response = await fetch('http://localhost:3001/api/users')
    const res = await response.json()
          const newUsers = [...res.data];
          setUsers(newUsers);
  
  }
  const eliminar = (_id)=>{
    console.log(_id)
    fetch(`http://localhost:3001/api/users/${_id}`, { method: 'DELETE' })
    .then(() => reload());
    
  }
  return (
    <div className='px-5 mt-2 pb-5 bg-blue-200 justify-items-center rounded'>
    
      <div className={'grid justify-items-center rounded'}>
        <form onSubmit={handleSubmit}>
          <div className={'flex flex-row p-5 items-center'}>
            <h1>Registre Usuarios</h1>
          <input className={'bg-blue-300 px-2 mx-5 w-32 rounded  text-lg placeholder-gray-500 ring-blue-900'} type="text" id='name' name='name'placeholder='nombre' value={name} onChange = {(e)=>setName(e.target.value)}/>
          <input className={'bg-blue-300 px-2 mx-5 w-32 rounded text-lg placeholder-gray-500 ring-blue-900'} type="number" id='age' name='age' placeholder='edad' value={age} onChange = {(e)=>setAge(e.target.value)}/>
          <input className={'bg-blue-300 px-2 mx-5 w-32 rounded text-lg placeholder-gray-500 ring-blue-900'} type="text" id='email' name='email' placeholder='correo' value={email} onChange = {(e)=>setEmail(e.target.value)}/>
          <input className={'bg-blue-500 rounded px-2 mx-5 hover:bg-sky-700'} type="submit" value="Guardar"/>
          </div>
        </form>
      </div>

      <div className={'bg-blue-100 mt-5 mb-5 grid justify-items-center rounded'}>
        <table className={'table-auto'}>
          <thead >
            <tr>
              <th className={'p-2'}>Nombre</th>
              <th>Edad</th>
              <th>Correo</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {users.map(({_id,name,age,email})=>(
              <tr key={email}>
                <td className={'p-2'}>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td><button className={'bg-red-500 rounded p-2 mt-2 mx-2'} onClick={()=>eliminar(_id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

/*

const [active,setActive]= useState(true);

  const toggle = ()=>{
    setActive(!active);
  }


<Modal active = {active} toggle={toggle}>
      <h1>Modal works</h1>
    </Modal>

const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
  `



<StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <div className={'flex flex-row'}>

        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        </div>

        <button>Sign In</button>
      </form>
    </StyledForm>

*/ 