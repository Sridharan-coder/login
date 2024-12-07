

const ForgetPassword = ({email}) => {

    const forgettedPassword=(email)=>{
        console.log(email);

    }



    return (
        <>
        <p onClick={()=>forgettedPassword(email)} style={{color:"blue !important"}}><u>forget Password</u></p>
        </>
    )
}

export default ForgetPassword;