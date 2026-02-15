import { useState } from "react";
export default function User() {

    const list = [

        { id: 1, name: "Amit" },
        { id: 2, name: "Anmol" },
        { id: 3, name: "Priya" },
        { id: 4, name: "Ankit" },
        { id: 5, name: "Mohit" }

    ]

    const [select, setseclect] = useState("")

    const filtred = list.filter((i) =>
        i.name.toLowerCase().includes(select.toLowerCase())

    )


    const highlight = (name) => {
        if (!select) return name;

        const index = name.toLowerCase().indexOf(select.toLowerCase());
        if (index === -1) return name;
        return (
            <>
                {name.slice(0, index)}
                <span style={{ backgroundColor: "yellow" }}>
                    {name.slice(index, index + select.length)}
                </span>
                {name.slice(index + select.length)}
            </>
        );


    };
    return (<>

        <div>
            <h2>User search List </h2>


            <input type="text" placeholder="Search User" value={select} onChange={(e) => setseclect(e.target.value)} style={{ padding: "6px", width: "100%" }} />
            <button
                onClick={() => setseclect("")}
                style={{ marginTop: "8px" }}
            >
                Clear
            </button>

            <ul style={{ padding: "0", marginTop: "10px" }}>
                {filtred.map((user) => (
                    <li key={user.id} style={{ listStyle: "none", padding: "7px", borderBottom: "1px solid #ccc" }}>{highlight(user.name)}</li>
                ))}
            </ul>


        </div>

    </>)


}