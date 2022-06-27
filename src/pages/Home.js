import React, { useEffect, useState } from 'react'
import { faFlag,faVenus,faMars,faPeopleGroup,faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { getUser } from '../datas/Api';
import DataSection from '../component/atoms/DataSection';
import User from '../component/atoms/User';

export const Home = () => {
    const [user, setUser] = useState([])
    const [nationality, setNationality] = useState(0)
    const [gender, setGender] = useState('Male')
    const [averageAge, setAverageAge] = useState(0)
    const [averageMembership, setAverageMembership] = useState(0)

    const getData = async () =>{
        var res = await getUser();
        setUser(res)
    }

    //set Value dataSection when user state update
    useEffect(() => {
        var arrNationality = []
        var male = 0
        var female = 0
        var sumAge = 0
        var sumMembership = 0
        user.forEach((item,index)=>{
            arrNationality.push(item.nat)
            item.gender==="male"? male+=1 : female+=1
            sumAge+=parseInt(item.dob.age)
            sumMembership+=parseInt(item.registered.age)
            
        })
        setNationality([...new Set(arrNationality)].length)
        setGender(male>female?"Male":'Female')
        setAverageAge(Math.floor(sumAge / user.length))
        setAverageMembership(Math.floor(sumMembership / user.length))
    }, [user])

    useEffect(() => {
        getData()
    }, [])
    
    return (
    <div style={styles.container}>
        <div style={styles.box}>
            <div style={{ fontWeight:'bold'}}>Member Dasboard</div>
            <div style={{ display:'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
                <DataSection
                    value={nationality}
                    title={"Different Nationality"}
                    icon={faFlag}
                />
                <DataSection
                    value={gender}
                    title={"Most Gender"}
                    icon={gender==="Male"?faMars:faVenus}
                />
                <DataSection
                    value={`~${averageAge}`}
                    title={"Average Age"}
                    icon={faPersonWalking}
                />
                <DataSection
                    value={`~${averageMembership}`}
                    title={"Average Membership"}
                    icon={faPeopleGroup}
                />
            </div>
            <div style={{ height: '600px', overflowY: 'scroll' }}>
                {user?.map((item,index)=>{
                    return (
                        <User
                            image={item.picture.thumbnail}
                            name={`${item.name.first} ${item.name.last}`}
                            email={item.email}
                            age={item.dob.age}
                            gender={item.gender}
                            national={item.nat}
                            address={`${item.location.street.name} ${item.location.street.number},${item.location.city},${item.location.state}`}
                        
                        />
                    )
                })}
            </div>
        </div>
    </div>
    )
}

const styles = {
    container: {
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2fc',
    },
    box:{
        height: '90%',
        width: '50%',
        boxShadow: '0px 0px 30px gray',
        borderRadius: '10px',
        padding: '30px 20px 30px 20px',

    }    
}