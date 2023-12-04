enum AgentTurn {
    //% block="left"
    Left = TurnDirection.Left,
    //% block="right"
    Right = TurnDirection.Right
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="agent move forward" color="#D83B01" weight=50
    export function agentMoveForward() {
        player.execute(`setblock 2392 46 135 air`)
        loops.pause(10)
        player.execute(`setblock 2392 46 135 redstone_block`)
        const detectPosition = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(YELLOW_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(ORANGE_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(GRAY_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(LIGHT_GRAY_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD)) {
            player.execute('scoreboard players add @a levelCheck 1')
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        agent.move(FORWARD, 1);
    }

    //% block="agent turn $direction" color="#D83B01" weight=49
    export function agentTurn(direction: AgentTurn) {
        player.execute(`setblock 2392 46 135 air`)
        loops.pause(10)
        player.execute(`setblock 2392 46 135 redstone_block`)
        agent.turn(direction)
    }

    //% block="agent collect plastic" color="#D83B01" weight=48
    export function collectPlastic() {
        player.execute(`setblock 2392 46 135 air`)
        loops.pause(10)
        player.execute(`setblock 2392 46 135 redstone_block`)
        if (agent.inspect(AgentInspection.Block, FORWARD) != GLASS && agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
            player.execute('scoreboard players add @a levelCheck 1')
            player.execute('function levels/collectPlastic');
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`);
        }
    }
}