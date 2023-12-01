### @hideIteration true
### @flyoutOnly true
# Mission 3

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 3; index++) {
        CodeCosmos.agentMoveForward()
    }
    CodeCosmos.agentTurn(AgentTurn.Right)
    for (let index = 0; index < 2; index++) {
        CodeCosmos.agentMoveForward()
    }
    CodeCosmos.agentTurn(AgentTurn.Right)
    for (let index = 0; index < 3; index++) {
        CodeCosmos.agentMoveForward()
    }
    CodeCosmos.agentTurn(AgentTurn.Left)
    for (let index = 0; index < 2; index++) {
        CodeCosmos.agentMoveForward()
    }
    CodeCosmos.agentTurn(AgentTurn.Left)
    for (let index = 0; index < 3; index++) {
        CodeCosmos.agentMoveForward()
    }
    
    CodeCosmos.collectPlastic()
}
```

```template
player.onChat("level2", function () {
    CodeCosmos.collectPlastic()
})
```

## Collect plastic
Use the learning platform to solve the exercise.