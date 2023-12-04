enum AgentTurn_NL {
    //% block="links"
    Left = TurnDirection.Left,
    //% block="rechts"
    Right = TurnDirection.Right
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos_NL {
    //% block="agent beweeg vooruit" color="#D83B01" weight=50
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        const detectPosition = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(YELLOW_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(ORANGE_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(GRAY_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(LIGHT_GRAY_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD)) {
            player.execute('scoreboard players add @a levelCheck 1')
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        agent.move(FORWARD, 1);
    }

    //% block="agent draai $direction" color="#D83B01" weight=49
    export function agentTurn(direction: AgentTurn_NL) {
        player.execute(`scoreboard players set @a level_timer 0`)
        agent.turn(direction)
    }

    //% block="agent verzamel plastic" color="#D83B01" weight=48
    export function collectPlastic() {
        player.execute(`scoreboard players set @a level_timer 0`)
        if (agent.inspect(AgentInspection.Block, FORWARD) != GLASS && agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
            player.execute('scoreboard players add @a levelCheck 1')
            player.execute('function levels/collectPlastic');
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`);
        }
    }
}