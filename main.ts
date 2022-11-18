enum Player {
    //%block="1"
    Player1,
    //%block="2"
    Player2,
    //%block="3"
    Player3,
    //%block="4"
    Player4
}

/**
 * Events are functions that take a function (lambda) as the last argument
 */
//% color="#d54322"
//% block="Controller"
//% groups=['Multiplayer', "test"]
namespace language {

    /**
     * A simple event taking a function handler
     */
    //% block="on start as player $player"
    //% group="Multiplayer"
    //% weight=100
    export function onEvent(player: Player, handler: () => void) {
        handler();
    }

    //% block="is current player $player"
    //% group="Multiplayer"
    //% weight=99
    export function in_session(player: Player) {
        return true;
    }

    //% block="test"
    //% group="test"
    //% weight=98
    export function test() {

    }

}