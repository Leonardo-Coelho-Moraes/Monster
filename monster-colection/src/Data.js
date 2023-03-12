import Logo1 from './img/monsterlogo.webp'
import Logo2 from './img/monsterlogo2.webp'
import Logo3 from './img/monsterlogo3.webp'
import Logo4 from './img/monsterlogo4.webp'
import Title1 from './img/monster.webp'
import Title2 from './img/energy.webp'
import Title3 from './img/energyejuice.webp'
import Title4 from './img/dragontea.webp'
import Mon1 from './img/monster1.webp'
import Mon2 from './img/monster2.webp'
import Mon3 from './img/monster3.webp'
import Mon4 from './img/energiau1.webp'
import Mon5 from './img/energiau2.webp'
import Mon6 from './img/energiau3.webp'
import Mon7 from './img/juice1.webp'
import Mon8 from './img/juice2.webp'
import Mon9 from './img/juice3.webp'
import Mon10 from './img/dragontea1.webp'
import Mon11 from './img/dragontea2.webp'
import Mon1p from './img/monster1p.webp'
import Mon2p from './img/monster2p.webp'
import Mon3p from './img/monster3p.webp'
import Mon4p from './img/energiau1p.webp'
import Mon5p from './img/energiau2p.webp'
import Mon6p from './img/energiau3p.webp'
import Mon7p from './img/juice1p.webp'
import Mon8p from './img/juice2p.webp'
import Mon9p from './img/juice3p.webp'
import Mon10p from './img/dragontea1p.webp'
import Mon11p from './img/dragontea2p.webp'

const data = [
    {
      name:'Monster Energy',
      logo: Logo1, 
      title: Title1,
      
      types_g: {
        monster1 : {
            img: Mon1,
            titulo: 'Monster Energy Original',
            descricao: 'O Original Monster Energy Green! Surpreenda-se com a lata do energético mais animal do planeta.',
            obs: 'Unleash The Beast',
        },
        monster2 : {
            img: Mon2,
            titulo: 'Monster Energy Lo-Carb',
            descricao: 'Monster Energy Lo-Carb traz o mesmo sabor e o mesmo punch energético do original, com menos carboidratos e menos calorias.',
            obs: 'O original! Sem carboidratos e menos calorias!',
        },
        monster3 : {
            img: Mon3,
            titulo: 'Monster Energy Absolutely Zero',
            descricao: 'Monster Energy ZERO traz o mesmo sabor e o mesmo punch energético do original.',
            obs: 'Mesmo sabor, zero açúcar!',
        },
       
    },
    types_p: {
        monster1 : Mon1p,
        monster2 : Mon2p,
        monster3 : Mon3p,
    },
  },
  {
    name:'Monster Ultra',
    logo: Logo2, 
    title: Title2,
 
    types_g: {
        monster1 : {
            img: Mon4,
            titulo: 'Monster Energy Ultra Paradise',
            descricao: 'Onde fica o paraíso? Num chalé nas montanhas, numa fazenda á beira do rio ou numa cobertura de luxo na cidade.',
            obs: 'Sabor kiwi com maçã verde. Sem açúcar!',
        },
        monster2 : {
            img: Mon5,
            titulo: 'Monster Energy Zero Ultra ',
            descricao: 'Mais refrescante. Mais leve. Monster Energy Zero Ultra é zero açúcar.',
            obs: 'Sabor cítrico.  Sem acúcar!',
        },
        monster3 : {
            img: Mon6,
            titulo: 'Monster Energy Ultra Violet',
            descricao: 'Monster Ultra Violet. Inspirado nos anos 70. Época de atitude livre e positiva.',
            obs: 'Sabor uva cítrica. Sem açúcar!',
        },
       
    },
    types_p: {
        monster1 : Mon4p,
        monster2 : Mon5p,
        monster3 : Mon6p,
    },
},
{
    name:'Monster Juice',
    logo: Logo3, 
    title: Title3,
    color: '#f2b234',
    types_g: {
        monster1 : {
            img: Mon7,
            titulo: 'Monster Energy Juice Khaos',
            descricao: 'Começamos com o sabor original, adicionando uma combinação agressiva de sucos naturais.',
            obs: 'Suco de laranja com energético.',
        },
        monster2 : {
            img: Mon8,
            titulo: 'Monster Energy Juice Pacific Punch',
            descricao: 'Com um sabor profundo e amplo, assim como o Oceano Pacífico.',
            obs: 'O ponche de frutas naturais em sua versão mais irada!',
        },
        monster3 : {
            img: Mon9,
            titulo: 'Monster Energy Juice Mango Loco',
            descricao: 'Todo ano, na noite de 31 de Outubro no México, amigos e famílias se reunem para celebrar o “Dia de Los Muertos”.',
            obs: 'Suco de manga e mix de frutas cítricas naturais com energia Monster!',
        },
       
    },
    types_p: {
        monster1 : Mon7p,
        monster2 : Mon8p,
        monster3 : Mon9p,
    },
},
{
    name:'Monster Dragon Tea',
    logo: Logo4, 
    title: Title4,
    color: '#d8a407',
    types_g: {
        monster1 : {
            img: Mon10,
            titulo: 'Monster Energy Dragon Ice Tea Limão',
            descricao: 'Reza a lenda que o Imperador Chinês Shennlong acidentalmente fez a descoberta do chá quando um vento divino soprou algumas folhas dentro de sua chaleira.',
            obs: 'Chá gelado energético com limão',
        },
        monster2 : {
            img: Mon11,
            titulo: 'Monster Energy Dragon Ice Tea Pêssego',
            descricao: 'Combinamos o melhor chá de pêssego com a energia de Monster e criamos Monster Dragon Ice Tea.',
            obs: 'Chá gelado energético com pêssego',
        },
    },
    types_p: {
        monster1 : Mon10p,
        monster2 : Mon11p,
        
    },
},

  ];
  
  export default data;