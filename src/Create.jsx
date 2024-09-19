


const Create = () => {


    const handleForm = e =>{

       e.preventDefault();
       const form = e.target
       const name = form.name.value 
       const email = form.email.value 
       const user = {name, email}
       console.log(user)
       fetch('http://localhost:5000/users', {
          method: 'POST',
          headers:{
            'content-type':'application-json'
          },
          body: JSON.stringify(user) 
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.insertedId){
          
            alert('data get successfully')
            form.reset();

        }
       })

    }



    return (
        <div>

            <p className=" text-7xl font-bold text-center ">Crud Operation</p>

            
            <div className=" mt-28 flex justify-center">
            <div>
                <form onSubmit={handleForm} >
                   <input className=" border-[1px] border-gray-600 " type="text" name="name" />
                   <br></br>
                   <input className=" mt-5  border-[1px] border-gray-600" type="email" name="email" id="email" />
                   <br></br>
                   <input className=" btn  mt-5 " type="submit" value="AddUsers" />
                </form>
            </div>
            </div>
            
        </div>
    );
};

export default Create;