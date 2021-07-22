import React from 'react';
import ReactDOM from "react-dom";

import SkillContent from '../../components/skill/skill-content';

export default function Skill() {
    return(
        <div className="container">
            <SkillContent />
        </div>
    );
}

ReactDOM.render(<Skill/>, document.getElementById("root"));