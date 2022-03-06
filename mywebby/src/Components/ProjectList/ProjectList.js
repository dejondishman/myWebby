import React from "react";
import "./ProjectList.css"
import Project from "../Project/Project"


const ProjectList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Dejon</h1>
                <p className="pl-desc">
                    My priject Portfolio, is a set of project i built in order to display coding skills. Since programming i have built several projects that i am very proud of.
                </p>
            </div>
            <div className="pl-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList