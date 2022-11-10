import img1 from '../../assets/img/mate1.webp'
import img2 from '../../assets/img/mate2.webp'
import img3 from '../../assets/img/mate3.webp'
import img4 from '../../assets/img/maceta1.webp'
import img5 from '../../assets/img/maceta2.webp'
import img6 from '../../assets/img/maceta3.webp'
import img7 from '../../assets/img/maceta4.webp'
const Productos = [
    {
        'id': 1,
        nombre: 'Mate',
        'cantidad': 6,
        'img': img1,
        'precio': '$600'
    }, {
        'id': 2,
        nombre: 'Mate',
        'cantidad': 6,
        'img': img2,
        'precio': '$600'
    }, {
        'id': 3,
        nombre: 'Mate',
        'cantidad': 6,
        'img': img3,
        'precio': '$600'
    }, {
        'id': 4,
        nombre: 'Maceta',
        'cantidad': 2,
        'img': img4,
        'precio': '$600'
    }, {
        'id': 5,
        nombre: 'Maceta',
        'cantidad': 1,
        'img': img5,
        'precio': '$600'
    }, {
        'id': 6,
        nombre: 'Maceta',
        'cantidad':3,
       'img':img6,
        'precio':'$600'
    },
    {
        'id': 7,
        nombre:'Maceta',
        cantidad:3,
        'img':img7,
        'precio': '$800'
    }
]
 
 export const GetProducts = (nombre) => {
    const task = new Promise((resolve, reject) => {
        resolve(nombre?Productos.find(product => product.nombre ===  'nombre' ):Productos);    
    });  
console.log(nombre);
    return task
   
}


export const GetProduct = (id) => {
    const task= new Promise((resolve, reject) => {
            resolve(Productos.find(product => product.id === Number(id)));
     console.log(id);
    });
return task
}
