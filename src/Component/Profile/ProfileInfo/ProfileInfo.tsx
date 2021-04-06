import s from "../Profile.module.css";
import React from "react";


export default function ProfileInfo() {
    return (
        <div>
            <img
                src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/158282146_1671916313003896_6124430256372368607_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHJu9BGiiRKKnnelEF2N26pnwejSeftPuSfB6NJ5-0-5BUwxsGk5otNwO2Q1NRnD9mUUZWbl6OcL1V2U0hcbaJS&_nc_ohc=v1jGXl6o2Q4AX8XWq_f&_nc_ht=scontent-frx5-1.xx&oh=7b02be1aca736f5556867adeb5351ab3&oe=6067C933"  />
            <div className={s.avatar}>
                <img src="https://cdn.filestackcontent.com/TQVYCexnTfmCRWGwfVOQ" />
                ava+description
            </div>
        </div>
    )
}