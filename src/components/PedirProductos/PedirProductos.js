import data from '../../data/data.json'

const PedirProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    })
}

export default PedirProductos;