import React from "react";
import c from "./Drawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [
    1, 2, 3
]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [
            c.Drawer
        ]

        if (!this.props.isOpen) {
            cls.push(c.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </>
        )
    }

}

export default Drawer;