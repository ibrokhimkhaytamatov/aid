import React from 'react'
import Form  from '../../components/form'

const Contact = () => {
  return (
    <>
    <Form/>
    <div className='container d-flex mt-5 justify-content-between'>
      <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.815441798363!2d69.2204922760873!3d41.2911210019608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0c29b619df%3A0xf017142235cbbb8!2sNovza%20Subway%20Station!5e0!3m2!1sru!2s!4v1714299866769!5m2!1sru!2s" style={{ width: '600px', height: '500px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="">
        <h2 className='mt-5'>Manzil:<h4>Toshkent shaxri Bunyodkor ko'chasi 123</h4></h2>
      <div style={{height:65}} className="d-flex align-items-center gap-4">
          <i class="fa-solid fa-phone"></i>
          <a className='text-dark' href="tel">+998991234567</a>
        </div>
        <div style={{height:65}} className="phone d-flex align-items-center gap-4">
        <i class="fa-solid fa-envelope"></i>
          <h3 className='m-0'>soffaid@gmail.com</h3>
        </div>
        <div style={{height:65}} className="d-flex gap-4 align-items-center">
        <i class="fa-brands fa-telegram"></i>
          <h4>Telegram</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
