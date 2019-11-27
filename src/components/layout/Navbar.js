import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { withFirebase,  isEmpty, isLoaded } from 'react-redux-firebase'
import { signIn, signOut } from '../../store/actions/authActions'

const Navbar = (props) => {
    console.log(props);

    const handlerLogIn = () => {
        const certificate = {
            email: 'test@thenetninja.co.uk',
            password: 'test1234'
        }
        props.signIn(certificate);

        // props.firebase.login({
        //     email: 'test@thenetninja.co.uk',
        //     password: 'test1236'
        //   }).then(
        //       () => console.log('te logueaste correctamente')
        //   ).catch(
        //       (err) => console.log(err.message)
        //   );
        //   console.log(props)
    }

    const handlerLogOut = () => {
        props.signOut();
    }

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <button onClick={handlerLogIn} >Login</button>
                <button onClick={handlerLogOut} >Logout</button>
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (certificate) => dispatch(signIn(certificate)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)