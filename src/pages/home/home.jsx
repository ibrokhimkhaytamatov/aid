import React, { useEffect, useRef } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/form'
import api from '../../api/api'


const Home = () => {
  async function getUser() {
    const endPoint = `user-list/`
    try {
      const response = await api.get(endPoint)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  },[])



  const navigate = useNavigate()
  const location = () => {
    navigate('/mutaxasislar')
  }
  const topUser = () => {
    navigate('/mutaxasislar')
  }

 

  return (
    <>
      <div className="bg-info">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-between  my-5 gap-5">
            <div className="img">
              <img style={{ borderRadius: 50 }} src={'people2.jpg'} alt="" />
            </div>
            <div className="title">
              <h1 className='text-center text-light mt-5 align-item-center'>
                Muammolaringizga yechimni shu yerdan toping. Biz sizning muammolaringizga  <b>online</b>  yechim beramiz
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container '>

        <h1 className='my-5 text-center'>Bizning mutaxasislar</h1>
        <div className="d-flex justify-content-between my-5">
          <div onClick={location} style={{ borderRadius: '20px' }} className="shadow col-md-5">
            <h2 className='text-center'>IT mutaxasislari</h2>
            <p style={{ fontSize: '18px' }} className='text-center'>Sizning IT bo'yicha muammolaringizga yechim beradi</p>
            <img className='mb-3' style={{ width: '100%', height: '296px', borderRadius: '20px' }} src="people3.jpg" alt="" />
          </div>
          <div onClick={location} style={{ borderRadius: '20px' }} className="shadow col-md-5">
            <h2 className='text-center'>Boshqa mutaxasislar</h2>
            <p style={{ fontSize: '18px' }} className='text-center'>Sizning boshqa muammolaringizga yechim beradi</p>
            <img className='mb-3' style={{ width: '100%', borderRadius: '20px' }} src="maths.jpg" alt="" />
          </div>
        </div>

        <h1 className='my-5 text-center'>Eng mashxurlar</h1>

        <div className="description d-flex mt-4 justify-content-between">
          <div class="card" style={{ width: 350 }}>
            <img style={{height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6f0soF6hGzocuY7mhUxSc2rf-frpvR428q_bYyHhzXHEpco5XVzZJN279Xu0dNeA2W0&usqp=CAU" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dilshod</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" onClick={topUser} class="btn btn-primary">Batafsil</a>
            </div>
          </div>

          <div class="card" style={{ width: 350 }} >
            <img style={{height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFHC1uSrod9T-5ckANUSay1KqPyvqukGVZw&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Xolmatjon</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" onClick={topUser} class="btn btn-primary">Batafsil</a>
            </div>
          </div>
          <div class="card" style={{ width: 350 }} >
            <img style={{height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePiptJlW7tDBn0pk2mxbHzmv5p3T9_8WAQg&s" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Sanjar</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" onClick={topUser} class="btn btn-primary">Batafsil</a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <button  style={{ width: 200 }} className='btn btn-success mt-4 '>Ko'proq ko'rish</button>
        </div>
        
      </div>
       
    </>

  )
}

export default Home

