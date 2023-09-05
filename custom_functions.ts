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
        agent.move(FORWARD, 1);
    }

    //% block="agent verzamel plastic"
    export function collectPlastic() {
        agent.destroy(FORWARD);
        player.say("levelCheck=" + levelCheck)
        player.execute("function levels/collectPlastic");
    }
}