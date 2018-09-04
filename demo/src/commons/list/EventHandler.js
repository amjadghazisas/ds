export let isCtrlKey = false;
export let isShiftKey = false;

const keyDownHandler = (event) => {

    if(event["ctrlKey"]){

        isCtrlKey = true;
        console.log("true...");

    }else if(event["shiftKey"]){

        isShiftKey = true;
    }

}

export const keyUpHandler = (event)=>{

    isCtrlKey = false;
    isShiftKey = false;

}

export const clickHandler = (fn) => {

    fn();
    
};
 
export default keyDownHandler;