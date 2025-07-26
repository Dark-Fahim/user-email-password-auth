/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


// Programming life cycles
    const repeat = ()=>{
        while($me.isAlive()){
            $me.eat();
            $me.sleep();
            $me.code();
            repeat();
        }
    }