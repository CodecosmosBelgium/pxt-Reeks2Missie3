//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="zet agent klaar"
    export function startingPosition() {
        player.execute("function levels/startingPosition")
        correctPositions = [];
        amountOfMovesUsed = 0;
        levelCheck = 0;
    }

    //% block="agent beweeg vooruit"
    export function agentMoveForward() {
        amountOfMovesUsed++;
        const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(GLOWSTONE, detectPostion) && !agent.detect(AgentDetection.Block, FORWARD)) {
            levelCheck++;
        } else {
            levelCheck = 0;
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        player.execute('scoreboard players set @a levelCheck ' + levelCheck)
        agent.move(FORWARD, 1);
    }

    //% block="agent verzamel plastic"
    export function collectPlastic() {
        if (agent.inspect(AgentInspection.Block, FORWARD) === DIAMOND_BLOCK) {
            levelCheck++;
            agent.destroy(FORWARD);
        } else {
            levelCheck = 0;
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`);
        }

        player.execute('scoreboard players set @a levelCheck ' + levelCheck)
        player.execute("function levels/collectPlastic");
    }
}