import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div className='form_page mt-5'>
            <h1 className='text-center mb-5'>Ariza qoldirish</h1>
            <form style={{ width: '500px' }} action="">
                <label htmlFor="">Email:</label>
                <input className='form-control' type="email" placeholder='Enter your email' />
                <br />
                <label htmlFor="">Telefon nomer:</label>
                <input className='form-control mb-4' type="number" placeholder='Enter phone number' />
            </form>
            <textarea style={{ width: '500px' }} name="" id="" cols="30" placeholder='Text' className='p-2' rows="10"></textarea>

            <div className="option d-flex gap-3 mt-4">
                <label htmlFor="">Vaqtni belgilang</label>
                <select name="" id="">
                    <option value="9">9:00</option>
                    <option value="9">10:00</option>
                    <option value="9">11:00</option>
                    <option value="9">12:00</option>
                    <option value="9">13:00</option>
                    <option value="9">14:00</option>
                    <option value="9">15:00</option>
                    <option value="9">16:00</option>
                </select>
                <label htmlFor="">dan</label>
                <select name="" id="">
                    <option value="9">10:00</option>
                    <option value="9">11:00</option>
                    <option value="9">12:00</option>
                    <option value="9">13:00</option>
                    <option value="9">14:00</option>
                    <option value="9">15:00</option>
                    <option value="9">16:00</option>
                    <option value="9">17:00</option>
                </select>
                <label htmlFor="">gacha</label>
            </div>
            <br />

            <button className='btn btn-success mt-3'>Ariza qoldirish</button>

        </div>
    )
}

export default Form
