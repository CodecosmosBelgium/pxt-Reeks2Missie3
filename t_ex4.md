### @hideIteration true
### @flyoutOnly true
# Mission 3

```blocks
player.onChat("level4", function () {
    for (let index = 0; index < 4; index++) {
        CodeCosmos.agentMoveForward()
        CodeCosmos.agentTurn(AgentTurn.Left)
        CodeCosmos.agentMoveForward()
        CodeCosmos.collectPlastic()
        CodeCosmos.agentTurn(AgentTurn.Right)
    }
    
    for (let index = 0; index < 4; index++) {
        CodeCosmos.agentTurn(AgentTurn.Right)
        CodeCosmos.agentMoveForward()
        CodeCosmos.agentTurn(AgentTurn.Left)
        CodeCosmos.agentMoveForward()
        CodeCosmos.collectPlastic()
    }
}
```

```template
player.onChat("level4", function () {
    
})
```

## Collect plastic
Use the learning platform to solve the exercise.