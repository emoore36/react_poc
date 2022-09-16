import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import TodoList from './TodoList'

const destination = document.querySelector('#container')

const root = ReactDOMClient.createRoot(destination)

root.render(
    <div>
        <TodoList />
    </div>
)
