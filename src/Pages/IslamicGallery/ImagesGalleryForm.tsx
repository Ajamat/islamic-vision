import { Formik, Form, Field } from 'formik';
import type { FC } from 'react';
import * as Yup from 'yup';
interface ImageGalleryFormProps { }
interface IimageValue {
    ima: String
    about: String,

}

const ImageGalleryForm: FC<ImageGalleryFormProps> = () => {
    const initialValues: IimageValue = {
        ima: "",
        about: ""

    }
    const validationSchema = Yup.object().shape({
        image: Yup.string().required(''),
        about: Yup.string().required(''),

    });
    const handleGallery = (values:IimageValue) => {
        console.log(values)

    }
    return (
        <>
            <div className='w-full h-screen '>
                <div className='w-full h-full'>
                        <h1 className='border-2 px-6 rounded-md bg-slate-300 py-2'>Add ImageGallery Admin</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleGallery}
                    >

                        <Form>
                            <Form className='flex flex-col gap-2 px-12'>
                            
                                <Field
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                />
                                <Field className="border rounded-md py-1 pl-1" name='about' id='about' label='about' placeholder='About' />
                                <div className='flex justify-end gap-2'>
                                    <button type='button' className=' bg-slate-500 py-1 px-1 hover:bg-whit rounded-sm text-sm hover:bg-white hover:text-black'>CANCLE</button>
                                    <button type='submit' className='bg-gray-300 py-1 px-1 rounded-sm text-sm '>SUBMIT</button>
                                </div>
                            </Form>



                        </Form>

                    </Formik>

                </div>
            </div>
        </>
    );
}

export default ImageGalleryForm;
