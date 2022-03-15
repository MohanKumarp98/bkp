import React from 'react'
import ComponentC from './ComponentC'
// import UserContext from '../context-api/UserContext'
// import { Component, useContext, useEffect } from 'react/cjs/react.production.min'

function ComponentB(props) {

    return (
        <div>
            <ComponentC />
        </div>
    )
}

export default ComponentB