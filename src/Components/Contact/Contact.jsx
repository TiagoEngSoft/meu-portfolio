import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d4bb13f1-2504-4f56-918e-9a6639547c40");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Contate-me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Vamos conversar</h1>
            <p>Atualmente estou disponível para assumir novos projetos, então fique à vontade para me enviar uma mensagem sobre qualquer coisa em que você queira que eu trabalhe. Você pode entrar em contato a qualquer momento.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>tiagoengsoftdev@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+55 88 9 9776-7854</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Juazeiro do Norte - CE Brasil</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <input type="hidden" name="access_key" value="d4bb13f1-2504-4f56-918e-9a6639547c40">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder='Seu nome' name='name' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Seu email' name='email' />
            <label htmlFor="">Digite sua menssagem</label>
            <textarea name="message" rows="8" placeholder='Digite uma menssagem'></textarea>
            <button type='submit' className="contact-submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
