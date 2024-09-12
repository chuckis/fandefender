import * as me from "melonjs";

import "./index.css";

import PlayScreen from "./js/stage/play.js";
// import FanEntity from "./js/renderables/fan.js";

import DataManifest from "./manifest.js";

me.device.onReady(() => {

    // initialize the display canvas once the device/browser is ready
    if (!me.video.init(640, 480, {parent : "screen", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import("@melonjs/debug-plugin").then((debugPlugin) => {
            // automatically register the debug panel
            me.utils.function.defer(me.plugin.register, this, debugPlugin.DebugPanelPlugin, "debugPanel");
        });
    }

    // Initialize the audio.
    // audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    me.loader.setOptions({crossOrigin: "anonymous"});
    

    // set and load all resources.
    me.loader.preload(DataManifest, function () {
        // set the user defined game stages
        // set a global fading transition for the screen
        me.state.transition("fade", "#FFFFFF", 250);
        me.state.set(me.state.PLAY, new PlayScreen());

        // add our player entity in the entity pool
        // me.pool.register("mainPlayer", FanEntity);

        // Start the game.
        me.state.change(me.state.PLAY);
    });
});
