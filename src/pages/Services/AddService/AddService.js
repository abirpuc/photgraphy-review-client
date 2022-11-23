import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()
    const handleForm = (event) =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const img = form.img.value;
        const date = form.date.value;
        const description = form.message.value;

        const service ={
            name: name,
            img:img,
            description,
            date
        }


        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(()=>{
            navigate('/services')
            toast.success('Your Services Added')
            form.reset()

        })
        .catch(err => console.log(err))

        

       
    }

    return (
        <div className='w-3/4 mx-auto'>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-20">
                <div>
                    <h1 className='text-center my-4 text-2xl text-primary'>Add a new Service</h1>
                </div>
                <form onSubmit={handleForm}>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                        <input type="text" name="name" placeholder="service name" className="input input-bordered w-full" />
                        <input type="text" name="img" placeholder="photo url" className="input input-bordered w-full" required />
                        <input type="date" name="date" className='input input-bordered w-full'></input>
                    </div>
                    <textarea name="message" className="textarea textarea-bordered mt-4 w-full" placeholder="Write Your service description..."></textarea>
                    <button className='btn btn-primary my-4 '>Submit</button>
                    <Toaster></Toaster>
                </form>
            </div>
        </div>
    );
};

export default AddService;