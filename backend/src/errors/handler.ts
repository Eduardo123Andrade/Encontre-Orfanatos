import { ErrorRequestHandler, response } from 'express'
import {ValidationError} from 'yup'

interface ValidationsError {
    [key: string] : string[]
}

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if(error instanceof ValidationError){
        let errors: ValidationsError = {}

        error.inner.forEach(err => errors[err.path] = err.errors)
        return res.status(500).json({message: 'Validations Fails', errors})
    }
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
}