import React from 'react'

import {useForm} from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection} from "firebase/firestore"
import { db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from "../../config/firebase"
import { useNavigate } from 'react-router-dom'



interface CreateFormData {
    title: string;
    description: string;
}

const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title!"),
        description: yup.string().required("You must add a description!"),
    })

    const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postRef = collection(db, "posts")

    const onCreatePost = async(data : CreateFormData) =>{
       await addDoc(postRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid
       })
       console.log(data)

       navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder='Title...' {...register("title")}/>
            <p style={{color: "red"}}> {errors.title?.message}</p>
            <textarea placeholder='Description...' {...register("description")} />
            <p style={{color: "red"}}> {errors.description?.message}</p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default CreateForm