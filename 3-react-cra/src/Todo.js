import { useState } from 'react'

function Todo(){

    const [activity, setActivity] = useState('') // karena hasil data fetch adalah data array
    const [dataActivity, setDataActivity] = useState([])
    const [edit, setEdit] = useState({})

    const generateId = () => {
        return Date.now()
    }
  
   const simpanData = (e) => {
       e.preventDefault()

       if(!activity) return alert('masukkan aktivitas')

       if(edit.id){                    // kondisi jika state edit ada data object / telah di set data
           const newdataActivity = {   // membuat data activity yang telah diedit
               ...edit,
               activity
           }

           const findIndex = dataActivity.findIndex((todo) => { // mencari index dari data yg diedit by ID
               return todo.id === edit.id
           })
           
           const updatedActivity = [...dataActivity]   // clone data activiti lama sebelum di timpa
           updatedActivity[findIndex] = newdataActivity // cari data lama berdasar id yg sama kemudian timpa datanya

           setDataActivity(updatedActivity)  // set dataActiviti dengan data baru
           
           return batalEdit()
       }

       setDataActivity([...dataActivity,{
           id : generateId(),
           activity,
           done : false
       }]) 
       setActivity('')
   }

   const editData = (todo) => {
       setActivity(todo.activity)
       setEdit(todo)
       
   }

   const batalEdit = () => {
       setActivity('')
       setEdit({})
   }

   const hapusData = (id) => {
       const data = dataActivity.filter((data) => data.id !== id)
       setDataActivity(data)
   }

   const doneActivity = (todo) => {
       const checkedActivity = {
           ...todo,
           done : todo.done ? false : true
       }

       const findIndex = dataActivity.findIndex((currentTodo) => { // mencari index dari data yg diedit by ID
           return currentTodo.id === todo.id
       })
       
       const updatedActivity = [...dataActivity]   // clone data activiti lama sebelum di timpa
       updatedActivity[findIndex] = checkedActivity // cari data lama berdasar id yg sama kemudian timpa datanya

       setDataActivity(updatedActivity)
   }

   return (
    <>
        <h1>Simple Todo List</h1>
       <form onSubmit={simpanData}>
           <input type="text" name="activity" placeholder="aktivitas" value={activity} onChange={((e) => setActivity(e.target.value))} />
           <button type='submit'>
           { edit.id ? 'Simpan' : 'Tambah' }
           </button>
           { edit.id && <button onClick={() => batalEdit()} >Batal</button> }
       </form>
       {dataActivity.length > 0 ? (
       <ul>
           {dataActivity.map((item) => (
           <li key={item.id}>
           <input type="checkbox" checked={item.done} onChange={() => doneActivity(item)} />
           {item.activity}({item.done ? 'selesai' : 'belum selesai'})
           <button onClick={() => editData(item)} >Edit</button>
           <button onClick={() => hapusData(item.id)} >Hapus</button>
           </li>
           ))}
       </ul>
       ) : (
           <p><i>tidak ada aktivitas</i></p>
       )}
      
    </>
    )
}

export default Todo