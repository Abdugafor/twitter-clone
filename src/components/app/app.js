import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanerl from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/";

import './app.css'

export default class App extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {label: 'Learn React', important: true, id: 1},
                {label: 'Go to the gym', important: false, id: 2},
                {label: 'Wash the dishes', important: false, id: 3 }
            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.maxId = 4
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        }) 
    }

    addItem(body) {
        this.setState(({data}) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }

            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanerl/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

