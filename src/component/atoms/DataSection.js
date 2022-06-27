import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataSection = (props) =>{
    return(
        <div style={styles.dataBox}>
            <div>
                <div style={{ fontSize:20, fontWeight:'bold'}}>{props.value}</div>
                <div style={{ fontSize:12, color:'gray' }}>{props.title}</div>
            </div>
            <div>
                <FontAwesomeIcon icon={props.icon} size='3x'/>
            </div>
        </div>
    )
}


const styles = {
    dataBox:{
        width: '44%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '30px 20px',
        margin: '10px 0px',
        backgroundColor: 'white',
        display:'flex',
        justifyContent:'space-between'

    },
    
}

export default DataSection;