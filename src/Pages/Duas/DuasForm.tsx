import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useEffect, type FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

interface DuasFormProps { }
interface ICreateValue {
    dua: String,
    magfirat: String,

}

const DuasForm: FC<DuasFormProps> = () => {
    const [edit, setEdit] = useState<ICreateValue>()
    const nevigate = useNavigate()
    const { id } = useParams();
    const url = `http://localhost:5000/api/dua/createdua`;
    const initialValues: ICreateValue = {
        dua: "",
        magfirat: ""

    }
    const validationSchema = Yup.object().shape({
        dua: Yup.string().required('r'),
        magfirat: Yup.string().required('Password is required')

    });
    const handleDua = (values: ICreateValue) => {
        axios.post(url, values).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log("error", error)

        })
        console.log(values)
        nevigate('/home/duas')
    }
    useEffect(() => {

        const getEdit = () => {
            axios.get(`http://localhost:5000/api/dua/duaforedit`, { params: { _id: id } }).then(reponse => {
                setEdit(reponse.data)
                initialValues.dua = reponse?.data?.duas?.dua;
                initialValues.magfirat = reponse?.data?.duas?.magfirat;
                console.log(reponse.data)

            }).catch(error => {
                console.error('Error fetching dua ', error);
            });
        }
        getEdit();
    }, [])
    return (
        <>
            <div className='w-full h-full'>

                <div className='w-full border-2'>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleDua}
                    >
                        <Form className='flex flex-col gap-2 px-12'>
                            <h1 className='border-2 bg-slate-400 py-2'>Add Duas Admin</h1>
                            <Field className="border rounded-md py-1 pl-1" name='dua' id='dua' label='dua' placeholder='Dua' />
                            <Field className="border rounded-md py-1 pl-1" name='magfirat' id='magfirat' label='magfirat' placeholder='Magfirat' />
                            <div className='flex justify-end gap-2'>
                                <button type='button' className=' bg-slate-500 py-1 px-1 hover:bg-whit rounded-sm text-sm hover:bg-white hover:text-black'>CANCLE</button>
                                <button type='submit' className='bg-gray-300 py-1 px-1 rounded-sm text-sm '>SUBMIT</button>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    );
}

export default DuasForm;
