import { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PasswordManipulation = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()



    const handlesubmit = (event) => {
        event.preventDefault()
        // navigate("/reset/"+event.target[0].value)

        const form = event.target.closest("form");
        const data = new FormData(form);
        const formValues = Object.fromEntries(data.entries());

        console.log(formValues);

        try {
            axios.post("http://localhost:3320/read", {...formValues}, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response =>{
                console.log(response);
            })

        } catch (error) {
            console.error("Something Failed --->",error);
        }
    }

    const showPassword = () => {
        const x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    return (
        <div style={{ height: "100vh" }}>
            <div class="login-root">
                <div class="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: 1 }}>
                    <div class="loginbackground box-background--white padding-top--64">
                        <div class="loginbackground-gridContainer">
                            <div class="box-root flex-flex" style={{ gridArea: " top / start / 8 / end" }}>
                                <div class="box-root" style={{ backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1 }}>
                                </div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
                                <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
                                <div class="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
                                <div class="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
                                <div class="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
                                <div class="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
                                <div class="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
                                <div class="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div class="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
                                <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                        </div>
                    </div>
                    <div class="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
                        </div>
                        <div class="formbg-outer">
                            <div class="formbg">
                                <div class="formbg-inner padding-horizontal--48">
                                    <span class="padding-bottom--15">Sign in to your account</span>
                                    <form id="stripe-login" onSubmit={handlesubmit}>
                                        <div class="field padding-bottom--24">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" onChange={setEmail} />
                                        </div>
                                        <div class="field padding-bottom--24">
                                            <div class="grid--50-50">
                                                <label for="password">Password</label>
                                                <div class="reset-pass">
                                                    <ForgetPassword />
                                                </div>
                                            </div>
                                            <input type="password" name="password" />
                                        </div>
                                        <div class="field padding-bottom--24">
                                            <input type="submit" name="submit" value="Continue" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="footer-link padding-top--24">
                                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><a href="#">© Stackfindover</a></span>
                                    <span><a href="#">Contact</a></span>
                                    <span><a href="#">Privacy & terms</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordManipulation;