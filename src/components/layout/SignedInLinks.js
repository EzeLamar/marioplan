import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

const SignedInLinks = (props) => {

    const handlerLogOut = () => {
        props.logOut();
    }

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink onClick={handlerLogOut} to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut : () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)