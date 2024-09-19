import { useLoaderData } from "react-router-dom";




const Update = () => {

    const load = useLoaderData();

    const handleForm = e =>{
     
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const updateUser = {name, email}
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${load._id}`, {
          method: 'PUT',
          headers: {
             'content-type': 'application/json'
          },
          body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
             if(data.modifiedCount>0){
                alert('update Successful')
             }

        })


    }


    return (

        <div className=" flex justify-center mt-60">


     
        <div>

            <p>Update of id: {load._id} </p>


            <form onSubmit={handleForm} >

               <input className=" border-[1px] border-gray-950" type="text" name="name" defaultValue={load?.name} />
               <br></br>
               <input className=" border-[1px] border-gray-950"  type="email" name="email" defaultValue={load?.email}  id="" />
               <br></br>
               <input className=" btn " type="submit" value="update" />


            </form>
            
        </div>

        </div>
    );
};

export default Update;