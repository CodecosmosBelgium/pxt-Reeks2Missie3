//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    
    //% block="agent beweeg vooruit" color="#D83B01" weight=100
    export function agentMoveForward() {
        player.execute(`setblock 2392 46 135 air`)
        amountOfMovesUsed++;
        const detectPosition = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(YELLOW_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(ORANGE_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD)) {
            player.execute('scoreboard players add @a levelCheck 1')
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        agent.move(FORWARD, 1);
        player.execute(`setblock 2392 46 135 redstone_block`)
        loops.pause(50)
    }

    //% block="agent verzamel plastic" color="#D83B01" weight=100
    export function collectPlastic() {
        player.execute(`setblock 2392 46 135 air`)
        if (agent.inspect(AgentInspection.Block, FORWARD) != GLASS && agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
            player.execute('scoreboard players add @a levelCheck 1')
            agent.interact(FORWARD)
            player.execute('function levels/collectPlastic');
        } else {
            player.execute('scoreboard players add @a levelCheck 100')
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`);
        }
        player.execute(`setblock 2392 46 135 redstone_block`)
        loops.pause(50)
    }
}