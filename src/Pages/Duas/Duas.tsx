import axios from 'axios';
import { useState, type FC, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

interface DuasProps { }

const Duas: FC<DuasProps> = () => {
    const navigate = useNavigate()
    const [dua, setDua] = useState<any>()
    const [render,setRender] = useState(true)
    // const [duaid,setDUaId] = useState<any>('')
    console.log(dua)
    useEffect(() => {
        axios.get('http://localhost:5000/api/dua/duas').then(response => {
            setDua(response.data.duas);
            // console.log(response)
        })
            .catch(error => {
                console.error('Error fetching dua items:', error);
            });
    }, [render])

  
    const handleEdit = (_id:any) => {
        navigate(`/home/duasform/${_id}`)
    }
    const handleDeleteDua = async (_id:any) => {
        // console.log(id)
        // const {id}
        // const { id:any } = req.params:any;
        try {
            const response = await axios.delete(`http://localhost:5000/api/dua/deletedua/${_id}`);
            
            setDua(response.data.duas);
            setRender(!render)
    
            console.log('Dua deleted successfully');
        } catch (error) {
            console.error('Error deleting dua:', error);
        }
    };
    return (

        <>
            <div className='w-full h-full'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full p-4'>
                    {dua?.map((dua: any) =>
                        <div key={dua._id} className='w-full h-full bg-white border rounded-md px-1 p-2 text-black flex flex-col gap-2'>
                            <div>
                                <p> {dua.dua}</p>
                                <p>{dua.magfirat}</p>
                            </div>
                            <div className='flex gap-2 justify-end'>
                                <button className='text-lg text-red-500' onClick={()=>handleDeleteDua(dua._id)} ><AiOutlineDelete /></button>
                                <button className='text-lg text-yellow-300' onClick={()=>handleEdit(dua._id)}><BiEditAlt /></button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default Duas;
