const axios = require('axios')

exports.buscarPosts = async () => {
    try{
        
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return res.data

    } catch (err) {
        console.error('Deu errado mano :/')
        return []
    }
}