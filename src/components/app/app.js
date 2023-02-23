import React from "react";

import AppHeader from "../app-header";
import SearchPanerl from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanerl/>
                <PostStatusFilter/>
            </div>
            <PostList/>
        </div>
    )
}

export default App