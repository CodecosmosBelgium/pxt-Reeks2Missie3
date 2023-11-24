enum PlasticBlocks {
    //% blockIdentity="blocks.custom" enumval=992 block="Black Plastic"
    //% jres alias=BLACK_PLASTIC
    BlackPlastic = 992,
    //% blockIdentity="blocks.custom" enumval=991 block="Blue Plastic"
    //% jres alias=BLUE_PLASTIC
    BluePlastic = 991,
    //% blockIdentity="blocks.custom" enumval=990 block="Green Plastic"
    //% jres alias=GREEN_PLASTIC
    GreenPlastic = 990,
    //% blockIdentity="blocks.custom" enumval=989 block="Grey Plastic"
    //% jres alias=GREY_PLASTIC
    GreyPlastic = 989,
    //% blockIdentity="blocks.custom" enumval=988 block="Orange Plastic"
    //% jres alias=ORANGE_PLASTIC
    OrangePlastic = 988,
    //% blockIdentity="blocks.custom" enumval=987 block="Pink Plastic"
    //% jres alias=PINK_PLASTIC
    PinkPlastic = 987,
    //% blockIdentity="blocks.custom" enumval=986 block="Purple Plastic"
    //% jres alias=PURPLE_PLASTIC
    PurplePlastic = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="Red Plastic"
    //% jres alias=RED_PLASTIC
    RedPlastic = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="White Plastic"
    //% jres alias=WHITE_PLASTIC
    WhitePlastic = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="Yellow Plastic"
    //% jres alias=YELLOW_PLASTIC
    YellowPlastic = 983
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="zet agent klaar"
    export function startingPosition() {
        player.execute("function levels/startingPosition")
        correctPositions = [];
        amountOfMovesUsed = 0;
        levelCheck = 0;
    }
    
    //% block="agent beweeg vooruit" color="#D83B01" weight=100
    export function agentMoveForward() {
        player.execute(`setblock 2392 46 135 air`)
        amountOfMovesUsed++;
        const detectPosition = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(YELLOW_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD) || blocks.testForBlock(ORANGE_CONCRETE, detectPosition) && !agent.detect(AgentDetection.Block, FORWARD)) {
            levelCheck++;
        } else {
            levelCheck = 0;
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
        }
        player.execute('scoreboard players set @a levelCheck ' + levelCheck)
        agent.move(FORWARD, 1);
        player.execute(`setblock 2392 46 135 redstone_block`)
    }

    //% block="agent verzamel plastic" color="#D83B01" weight=100
    export function collectPlastic() {
        player.execute(`setblock 2392 46 135 air`)
        if (agent.inspect(AgentInspection.Block, FORWARD) != GLASS && agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
            levelCheck++;
            agent.destroy(FORWARD);
        } else {
            levelCheck = 0;
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`);
        }

        player.execute('scoreboard players set @a levelCheck ' + levelCheck)
        player.execute("function levels/collectPlastic");
        player.execute(`setblock 2392 46 135 redstone_block`)
    }
}