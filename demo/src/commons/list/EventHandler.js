export let isCtrlKey = false;
export let isShiftKey = false;
export let isSelectAll = false;

const keyDownHandler = (event,handler) => {

    if(event["ctrlKey"] && (event["keyCode"] !== 65)){

        isCtrlKey = true;

    }else if(event["ctrlKey"] && (event["keyCode"] === 65)){

        isSelectAll = true;
        if(handler){

            handler();
        }

    }else if(event["shiftKey"]){

        isShiftKey = true;
    }


}

export const keyUpHandler = (event)=>{

    isCtrlKey = false;
    isShiftKey = false;
    isSelectAll = false;

}

export const clickHandler = (fn) => {

    console.log('called');
    fn();
    
};
 
export default keyDownHandler;