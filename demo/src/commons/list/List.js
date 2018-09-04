import React, { Component } from 'react';
import keyDownHandler, {keyUpHandler, clickHandler, isCtrlKey, isShiftKey} from './EventHandler';
import './List.css';

class List extends Component {
    

    constructor(props) {

        // Required to call original constructor
        super(props);
        this.props = props;
    }

    itemSelectionHandler(itemIndex){

        const items = [...this.state.items]; // since we do not want to mutate the original array managed by react
        // const items = this.state.items.slice(); //alternate way to prevent mutatation

        for(let i=0;i<items.length;i++){

            if(!isCtrlKey)
            items[i].selected = false;
        }

        items[itemIndex].selected = true;

        this.setState({items:items});
    }


state = {

    items:[
    
        {name:"PORCHE",description:"car", target:"car", id:1},
        {name:"LIMMO",description:"car", target:"car", id:2},
        {name:"FERARI",description:"car", target:"car", id:3},
        {name:"TRIUMPH",description:"bike", target:"bike", id:4},
        {name:"BANELI",description:"bike", target:"bike", id:5},
        {name:"BULLET",description:"bike", target:"bike", id:6}
    ]
}

  render() {

    let items = null;

    if(this.state.items){

        items = (
            <ul className="opty-list" style={{height:this.props.listHeight}}>
                {this.state.items.map((item, index)=>{
                    //added the key attribute so that react can compare the lis against the VDOM easily 
                    //added tabIndex=0 so that li gets focus and keydown is triggered
                    return <li key={item.id} tabIndex={index} onKeyUp = {(event)=>{keyUpHandler(event)}} 
                    onKeyDown={(event)=>{keyDownHandler(event)}} className={item.selected?'highlighted':'normal'}
                    onClick={()=>{clickHandler(()=>{

                        this.itemSelectionHandler(index);

                    })}}>{item.name}<br/><span>{item.description}</span></li>
                })}
            </ul>
        );
    }
    return (<div className="opty-list-container">{items}</div>);
  }
}

export default List;
