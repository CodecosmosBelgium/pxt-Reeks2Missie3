### @hideIteration true
### @flyoutOnly true
# Missie 3

```blocks
player.onChat("level3", function () {
    for (let i = 0; i < 2; i++) {
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
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
        CodeCosmos_NL.agentTurn(AgentTurn_NL.Left)
    }
}
```

```template
player.onChat("level3", function () {
    
})
```

## Verzamel plastic
Gebruik het leerplatform om de oefening op te lossen.