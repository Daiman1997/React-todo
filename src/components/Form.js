import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
    const[value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            alert.show(' Запись была создана', 'success')
        } else {
            alert.show(' Введите запись')
            setValue('')
        }

    }

    return (
        <form onSubmit= {submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите название записи"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}