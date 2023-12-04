### @hideIteration true
### @flyoutOnly true
# Missie 3

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 3; index++) {
        CodeCosmos_NL.agentMoveForward()
    }
    CodeCosmos_NL.agentTurn(AgentTurn_NL.Right)
    for (let index = 0; index < 2; index++) {
        CodeCosmos_NL.agentMoveForward()
    }
    CodeCosmos_NL.agentTurn(AgentTurn_NL.Right)
    for (let index = 0; index < 3; index++) {
        CodeCosmos_NL.agentMoveForward()
    }
    CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
    for (let index = 0; index < 2; index++) {
        CodeCosmos_NL.agentMoveForward()
    }
    CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
    for (let index = 0; index < 3; index++) {
        CodeCosmos_NL.agentMoveForward()
    }
    
    CodeCosmos_NL.collectPlastic()
}
```

```template
player.onChat("level2", function () {
    
})
```

## Verzamel plastic
Gebruik het leerplatform om de oefening op te lossen.