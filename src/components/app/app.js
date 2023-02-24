import React from "react";

import AppHeader from "../app-header";
import SearchPanerl from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/";

import './app.css'
const App = () => {
    const data = [
        {label: 'Going to learn React', important: true, id: 'dfdas'},
        {label: 'Wash the dishes', important: false, id: 'dasc'},
        {label: 'Practice Englis', important: false, id: 'nbdf'}
    ]
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanerl/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App