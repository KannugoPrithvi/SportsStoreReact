import React from "react";
import { Link } from "react-router-dom";

function CategoryNavigation(props){
    return(
        <>
            <Link className="btn btn-secondary btn-block" to={props.baseUrl}>All</Link>
            {props.categories && props.categories.map(cat => 
                <Link className="btn btn-secondary btn-block" key={cat}
                to={`${props.baseUrl}/${cat.toLowerCase()}`}>
                { cat }
                </Link>
                )}
        </>
    );
}