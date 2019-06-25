import React, { Component } from 'react'
import * as FlexmonsterReact from 'react-flexmonster';
import '../node_modules/flexmonster/flexmonster.css'
export default class Flexmonster extends Component {
    render() {
        return (
            <div>
                <FlexmonsterReact.Pivot toolbar={true} 
                componentFolder="https://cdn.flexmonster.com/" width="100%" 
                report="https://cdn.flexmonster.com/reports/report.json"/>
            </div>
        )
    }
}
