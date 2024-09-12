import * as me from "melonjs";
import FanEntity from "../renderables/fan.js";

class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        me.level.load("area01");
        // me.game.world.addChild(new FanEntity());

    }

};

export default PlayScreen;
