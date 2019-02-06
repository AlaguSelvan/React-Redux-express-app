import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import * as actions from 'actions'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            errors: [],
            redirect: false
        }
    }

    loginUser = (userData) => {
        this.props.dispatch(actions.login(userData))
        // actions.login(userData).then(
            // logined => this.setState({ redirect: true }),
            // errors => this.setState({ errors })
        // )
    }
    render(){
    const { errors, redirect } = this.state
    if (redirect) {
        return <Redirect to={{ pathname: '/rentals', state: { successRegister: true } }} />
    }
        return(
            <section id="login">
                <div className="bwm-form">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Login</h1>
                            <LoginForm loginUser={this.loginUser} />
      </div>
                        <div className="col-md-6 ml-auto">
                            <div className="image-container">
                                <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                                <img src='' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login)