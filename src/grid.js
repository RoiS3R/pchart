/*
    Copyright (C) 2018  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React, { Component } from 'react';
import StoreContext from './context';
import { withTheme } from '@callstack/react-theme-provider';

class Grid extends Component {
    render() {
        let store = this.context;
        let tickcountX = store.getMeasures().keys.length;
        let stepX = store.getMeasures().width/(tickcountX-1);
        let step = store.getDataset().getUnitX()==='month' ? 6 : 5;
        let reflinesx = [];
        for(let t = 0; t<tickcountX; t++) {
            let long = t%step===0;
            let x = store.getMeasures().left + t * stepX;
            let y1 = store.getMeasures().bottom;
            let y2 = store.getMeasures().top;
            reflinesx.push(
                <line className={long?'longrefline':'refline'} key={'reflinex-'+t} x1={x} y1={y1} x2={x} y2={y2} stroke={this.props.theme.gridColor}/>
            );
        }

        let tickCountY = store.getMeasures().maxY-store.getMeasures().minY;
        let stepY = store.getMeasures().height/tickCountY;

        let reflinesy = [];
        for(let t=0; t<=tickCountY; t++) {
            let long = t%store.getStep()===0;
            let x1 = store.getMeasures().left;
            let x2 = store.getMeasures().right;
            let y = store.getMeasures().bottom - t*stepY;
            reflinesy.push(
                <line className={long ? 'longrefline' : 'refline'} key={'refliney-' + t} x1={x1} y1={y} x2={x2} y2={y} stroke={this.props.theme.gridColor}/>
            );
        }
        return (
            <g name='grid' className='grid'>
                {reflinesx}
                {reflinesy}
            </g>
        )
    }
}
Grid.contextType = StoreContext;

export default withTheme(Grid);

