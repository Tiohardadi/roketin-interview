import React from 'react'

const User = (props) =>{
    return(
    <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', padding:'10px 25px'}}>
        <div>
            <img style={{height: '50px', width: '50px', borderRadius: '50%'}} src={props.image} alt='profile'/>
        </div>
        <div style={{width:"25%"}}>
            <div style={{ fontSize:16 }}>{props.name} </div>
            <div style={{ fontSize:12, color:'gray' }}>{props.email} </div>
        </div>
        <div>
            <div style={{ fontSize:16 }}>{props.age} </div>
        </div>
        <div>
            <div style={{ alignSelf:'center', fontSize:12, color:'white', backgroundColor: props.gender==='female' ?'pink':'CornflowerBlue', padding:'4px', borderRadius:5}}>{props.gender} </div>
        </div>
        <div>
            <img style={{ height: '25px', width: '25px'}} src={`https://flagcdn.com/48x36/${(props.national).toLowerCase()}.png`} alt='flag'/>
        </div>
        <div style={{width:'50%'}}>
            <div style={{ fontSize:16,textAlign: 'center'}}>{props.address}</div>
        </div>
    </div>
    )
}


export default User;