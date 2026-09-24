import React from 'react'

function ICard(props) {
    return (
        <div style={{
            border: '10px solid red',
            height: 'auto',
            width: '300px',
            margin: "0",
            marginTop: '100px'
        }}>

            <h2 style={{
                backgroundColor: 'brown',
                color: 'white',
                margin: '0',
                padding: '10px'
            }}>
                ABES Engineering College
            </h2>

            {/* Student Image */}
            <div style={{
                textAlign: 'center',
                padding: '10px'
            }}>
                <img
                    src={props.image}
                    alt={props.name}
                    height="150px"
                    width="150px"
                />
            </div>

            {/* Student Details */}
            <h3 style={{ color: 'black', marginLeft:"50px" }}>
                Name: {props.name}
            </h3>

            <h3 style={{ color: 'black', marginLeft:"50px" }}>
                Roll: 24003215{props.rollno}
            </h3>

            <h3 style={{ color: 'black', marginLeft:"50px" }}>
                Branch: {props.branch}
            </h3>

        </div>
    )
}

export default ICard