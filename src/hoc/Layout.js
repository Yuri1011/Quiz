import React, {Component} from "react";
import c from "./Layout.module.css";

class Layout extends Component {

    render() {
        return (
            <div className={c.Layout}>


                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;