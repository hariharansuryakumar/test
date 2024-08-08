import React from "react";
import header from './header'

function AddContacts() {
    return (
        <div>
            <header headerName="Add: Phone Contacts" />
            <button>Add</button>
            <div>
                <span>Name</span>
                <span>Mob no</span>
            </div>
        </div>
    )
}