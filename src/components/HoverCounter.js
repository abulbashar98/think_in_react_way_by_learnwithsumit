// import React from 'react'


// class HoverCounter extends React.Component {


//     render() {
//         const { count, incrementCount } = this.props

//         return (

//             <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>

//         )
//     }
// }

// export default HoverCounter;



export default function HoverCounter({ count, incrementCount }) {



    return (

        <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>

    )


}