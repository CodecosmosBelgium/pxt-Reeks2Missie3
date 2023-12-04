### @hideIteration true
### @flyoutOnly true
# Missie 3

```blocks
player.onChat("level4", function () {
    for (let index = 0; index < 4; index++) {
        CodeCosmos_NL.agentMoveForward()
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
        CodeCosmos_NL.agentMoveForward()
        CodeCosmos_NL.collectPlastic()
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Right)
    }
    
    for (let index = 0; index < 4; index++) {
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Right)
        CodeCosmos_NL.agentMoveForward()
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
        CodeCosmos_NL.agentMoveForward()
        CodeCosmos_NL.collectPlastic()
    }
}
```

```template
player.onChat("level4", function () {
    
})
```

## Verzamel plastic
Gebruik het leerplatform om de oefening op te lossen.