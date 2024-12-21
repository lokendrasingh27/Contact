import React, { useState } from 'react'


const App = () => {
  
  const [name, setname] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [fav , setFav ] = useState(false)
  const [allContact, setAllContact] = useState([])



  function formHandler(event) {
  
    event.preventDefault();
    
    setAllContact([...allContact,{name,phone,company,fav}])
    setFav(false)
   
    event.target.reset();
  }
  
function deleteHandler(index) {
     const copy=[...allContact]
     copy.splice(index,1)
     setAllContact(copy)
}

  return (
    <div className='h-screen bg-blue-100 w-full p-6 '>
   <div className='h-full w-full bg flex  items-center'>
   <form onSubmit={formHandler} className='h-[1] w-[35%] bg-white p-6 rounded-xl flex flex-col justify-center items-center' >
        <h1 className='text-2xl font-medium mb-8 p-2'>ADD CONTACT</h1>
         <div className='mb-4 flex flex-col'>
          <label className='p-2  text-xl font-medium' htmlFor="name">NAME</label>
          <input onChange={(e)=>{
                 setname(e.target.value);
          }} type="text" className='px-4 py-2 rounded-xl' name="name" placeholder='Enter Name' id="" />
         </div>
         <div className='mb-4 flex flex-col'>
          <label className='p-2  text-xl font-medium' htmlFor="Phone">PHONE</label>
          <input onChange={(e)=>{
            setPhone(e.target.value);
          }} type="text" className='px-4 py-2 rounded-xl' name="Phone" placeholder='Enter Phone' id="" />
         </div>
         <div  className='mb-4 flex flex-col'>
          <label className='p-2 text-xl font-medium' htmlFor="company">COMPANY</label>
          <input onChange={(e)=>{
            setCompany(e.target.value);
          }} type="text" className='px-4 py-2 rounded-xl' name="company" placeholder='Enter Company' id="" />
         </div>
         <div className='mb-2 '>
          <input onChange={(e)=>{
            setFav(e.target.checked);
          }} type="checkbox" className='px-4 py-2 rounded-xl' name="fav" placeholder='Enter Name' id="" />
          <label className='px-4  text-xl font-medium' htmlFor="fav">Favourite</label>
         </div>
         
         <button className='px-20 mt-4 text-white text-xl font-semibold py-2 bg-blue-500 rounded-xl' type='submit'>Submit</button>
      </form>
      <div className='h-[35vw] w-full bg-red- rounded-xl p-12 flex gap-4 overflow-y-scroll  flex-wrap'>
    {allContact.map(function(elem ,index){
        
        return   <div key={index} className='h-[12vw] w-[25vw] bg-zinc-100 rounded-xl flex justify-between items-center  p-4  '>
        <div>
        <h3 className='text-2xl font-semibold pb-2'>{elem.name}</h3>
        <h3 className='text-l '>{elem.phone}</h3>
        <h3 className='text-xl text-blue-600'>{elem.company}</h3>
        <h3 className='font-bold'>{elem.fav?"fav" : ""}</h3>
        </div>
        <button onClick={()=>{
          deleteHandler(index)
        }} className='px-4 py-2 bg-red-500 rounded-xl'>Delete</button>
   </div>
    })}
      </div>
   </div>
    </div>
  )
}

export default App
