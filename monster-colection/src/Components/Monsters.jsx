import React, { useState } from 'react';
import monster from '../Data'
const Monsters = () => {
  const [imgSrc, setImgSrc] = useState(monster[0].types_g.monster1.img);
  

  return (
    <section>
            <div className='card'>
              <div className='circle' style={{ '--clr': '#5ccb5f' }}>
                <img src={monster[0].logo} alt={monster[0].name} height='150px' className='logo'/>
                <img src={monster[0].title} alt={monster[0].name} height='70px' className='logo'/>
              </div>
              <div className="content">
                <h2 id='name1'>{monster[0].name}</h2>
                <p id='des1'>{monster[0].types_g.monster1.descricao}</p>
                <h3 id='obs1'>{monster[0].types_g.monster1.obs}</h3>
                <div className='products'>
                  <img src={monster[0].types_p.monster1} alt={monster[0].types_g.monster1.titulo} height='100px'/>
                  <img src={monster[0].types_p.monster2} alt={monster[0].types_g.monster2.titulo}height='100px'  onMouseOver={() => setImgSrc(monster[0].types_g.monster2.img)}
             />
                  <img src={monster[0].types_p.monster3} alt={monster[0].types_g.monster3.titulo} height='100px'/>
                </div>
              </div>
              <img src={imgSrc} alt={monster[0].types_g.monster1.titulo} className='product_img' id='mon1' />
            </div>
            
            <div className='card'>
              <div className='circle' style={{ '--clr': '#b4abab' }}>
                <img src={monster[1].logo} alt={monster[1].name} height='150px' className='logo'/>
                <img src={monster[1].title} alt={monster[1].name} height='70px' className='logo'/>
              </div>
              <div className="content">
                <h2>{monster[1].name}</h2>
                <p>{monster[1].types_g.monster1.descricao}</p>
                <h3>{monster[1].types_g.monster1.obs}</h3>
                <div className='products'>
                  <img src={monster[1].types_p.monster1} alt={monster[1].types_g.monster1.titulo} height='100px'/>
                  <img src={monster[1].types_p.monster2} alt={monster[1].types_g.monster2.titulo}height='100px' />
                  <img src={monster[1].types_p.monster3} alt={monster[1].types_g.monster3.titulo} height='100px'/>
                </div>
              </div>
              <img src={monster[1].types_g.monster1.img} alt={monster[1].types_g.monster1.titulo} className='product_img' />
            </div>
         
          
           
        
    </section>
  )
}

export default Monsters