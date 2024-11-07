export default function numberAdd2(dispatch) {
    
    // Exemplo de requisição assíncrona
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res => res.json())
    //     .then(json => dispatch({ type: 'userListReady', payload: json }))

    dispatch({ type: 'numberAdd' })
}