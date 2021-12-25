function Join(){
    return(
        <main className="join">
            <div className="inner">
                <div className="left">
                    <h1>Sign Up</h1>
                    <p>Please enter your details to sign up and be part of our great community.</p>
                    <h2>Already have an account?</h2>
                    <a href="#">SIGN IN</a>
                </div>
                <div className="right">
                    <form action="post">
                        <fieldset>
                            <legend>회원가입 폼</legend>
                            <ul>
                                <li>
                                    <div>
                                        <label htmlFor="first_name">FIRST NAME</label>
                                        <input type="text" name="first_name" id="first_name" />
                                    </div>
                                    <div>
                                        <label htmlFor="last_name">LAST NAME</label>
                                        <input type="text" name="last_name" id="last_name" />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="user_name">USER NAME</label>
                                    <input type="text" name="user_name" id="user_name" />
                                </li>
                                <li>
                                    <label htmlFor="email">EMAIL ADDRESS</label>
                                    <input type="text" name="email" id="email" />
                                </li>
                                <li>
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" name="password" id="password" />
                                </li>
                                <li>
                                    <input type="submit" value="SIGN UP" />
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Join;