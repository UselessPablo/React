import img1 from '../../assets/img/mate1.webp'
import img2 from '../../assets/img/mate2.webp'
import img3 from '../../assets/img/mate3.webp'
import img4 from '../../assets/img/maceta1.webp'
import img5 from '../../assets/img/maceta2.webp'
import img6 from '../../assets/img/maceta3.webp'

const Productos = [
    {
        'id': 1,
        nombre: 'Mate',
        'cantidad': 6,
        'img': img1,
        'precio': 600,
        'detalles': 'Mate de Cerámica pintado a mano'
    }, {
        'id': 2,
        nombre: 'Matesx3',
        'cantidad': 6,
        'img': img2,
        'precio': 650,
    'detalles': 'Mates de Cerámica pintados a mano y con Calcos'
    }, {
        'id': 3,
        nombre: 'Matex4',
        'cantidad': 6,
        'img': img3,
        'precio': 650,
    'detalles': 'Mates de Cerámica pintados a mano y con Calcos'
    }, {
        'id': 4,
        nombre: 'Maceta',
        'cantidad': 2,
        'img': img4,
        'precio': 1200,
    'detalles': 'Maceta colgante de Cerámica pintada a mano'
    }, {
        'id': 5,
        nombre: 'Maceta',
        'cantidad': 1,
        'img': img5,
        'precio':  1200,
    'detalles': 'Maceta con patas de Cerámica pintada a mano'
    }, {
        'id': 6,
        nombre: 'Maceta',
        'cantidad':3,
       'img':img6,
        'precio': 1200,
    'detalles': 'Maceta con patas de Cerámica pintada a mano'
    },

]
 
 export const GetProducts = (nombre) => {
    const task = new Promise((resolve, reject) => {
        resolve(nombre?Productos.find(product => product.nombre ===  'nombre' ):Productos);    
    });  

    return task
}

export const GetProduct = (id) => {
    const productid = new Promise((resolve, reject) => {
            resolve(Productos.find(product => product.id === Number(id)));
       
    });
return  productid
}
export const GetProductname = (nombre) => {
    const productname = new Promise((resolve, reject) => {
        resolve(Productos.find(product => product.nombre === nombre))
        resolve(Productos.find(product => product.img))
       
    });
    return productname
}