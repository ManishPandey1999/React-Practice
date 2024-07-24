// import React from 'react'
// import axios from 'axios'

// export default class Items extends React.Component {

//     state = {
//         itemlist: []
//     }
//     componentDidMount() {
//         axios.get(`https://jsonplaceholder.typicode.com/photos`)
//         .then(res => {
//             const itemlist = res.data;
//             this.setState({itemlist});
//         })
//     }

//   render() {
//     return (
//       <>
//         {
//             this.state.itemlist.slice(0, 20).map(item => (
//                 <li className='min-w-[160px] h-auto flex flex-wrap' key={item.id}>
//                     <a href="#">
//                         <img src={item.url} alt="image-sign" className='h-[100px] mb-3' />
//                         <p className='h-[100px]'>{item.title.slice(0, 45)}</p>
//                     </a>
//                 </li>
//             ))
//         }
//       </>
//     )
//   }
// }
