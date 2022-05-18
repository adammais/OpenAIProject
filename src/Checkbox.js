import React, { useState } from "react";

const Checkbox = (props) => {
    const [checked, setChecked] = useState(props.check);
    const toggle = previous => !previous;
    return <input type="checkbox" checked={checked} onChange={() => setChecked(toggle)} />;
}

export default Checkbox;