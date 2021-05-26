import React from 'react'
import { connect } from "react-redux";

const Profile = ({ user }) => {
    return (
        <div>
            <h5>User Name: {user.username}</h5>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)
