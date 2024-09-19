import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Read = () => {

    
    const [user, setUser] = useState([])

    const [remove, setRemove] = useState(user)

    useEffect( () =>{
       
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>setUser(data))

    } , [])


    const handleId = _id =>{

           console.log('delete this id >>>>', _id)
           fetch(`http://localhost:5000/users/(${_id})`, {
            
            method: 'DELETE',
        
           })
           .then(res => res.json())
           .then( data => {
            console.log(data)
            if(data.deletedCount>0){
                  alert('delete successful')
                  const removing  = remove.filter(remove => remove._id !== _id)
                  setRemove(removing)
            }
           } )

    }


    return (
        <div>
            


            
            <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center">
            <div className=" grid  md:grid-cols-3 gap-10">
            {
                user.map( user => <p className=" flex items-center gap-10 " 
                    key={user._id} > {user._id} <Link to={`/update/${user._id}`} ><button className=" btn " >Update</button></Link>  <button onClick={()=> handleId(user._id)} 
                    className=" btn  ">X</button>  </p> )
             }
            </div>  
            </div>

             

        </div>
    );
};

export default Read;