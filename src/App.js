import React, {useState,useEffect} from "react";
// import Contact from './Contact';
import "./App.css";

function App() {
//     const products = [
//         {
//             name: 'Product One',
//             price: 90,
//             date: '10/10/10'
//         }, {
//             name: 'Product Two',
//             price: 100,
//             date: '10/10/10'
//         }, {
//             name: 'Product Three',
//             price: 100,
//             date: '10/10/10'
//         }
//     ];

    return (
        <div className="App">
            <header className="App-header">
               
                <Counter></Counter>
                <Users></Users>
                {/* <Counter></Counter>
                {products.map(productDetails => < Products p = {
                    productDetails
                } > </Products>)} */}
            </header>
        </div>
    );
    function Counter(){
        const [count,setCount] = useState(10);
        const handleIncrease = ()=> setCount(count+1);

            return(
                <div>
                    <h1>Count: {count}</h1>
                    <button onClick={()=> setCount(count-1)}>Decrease</button>
                    <button onClick={()=> setCount(count+1)}>Increase</button>
                </div>
            );
    }
    function Users(){
        const [users,setUsers] = useState([]);
        useEffect(() => {
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res=>res.json())
           .then(data=>setUsers(data));
        },[])
        return (
            <div>
                <h3>Dynamic Users : {users.length}</h3>
                {
                    users.map(user=><li>{user.name}</li>)
                }
                { users.map(user=><li>{user.email}</li>)}
            </div>
        );
    }
// }
// function Counter() {
//     const [count,
//         setCount] = useState(0);
//     // const handleIncrease = () => {setCount(count + 1)}
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//         </div>
//     );
// }
// function Products(props) {
//     const productStyle = {
//         border: '1px solid red',
//         height: '250px',
//         width: '250px',
//         borderRadius: '5px',
//         float: 'left',
//         padding: '5px',
//         margin: '5px'
//     }
//     const {name, price, date} = props.p;
//     // console.log(props)
//     return (
//         <div style={productStyle}>
//             <h3>{name}</h3>
//             <h3>{price}</h3>
//             <h3>{date}</h3>
//             <button>Buy Now</button>
//         </div>
//     );
}

export default App;
