### @hideIteration true
### @flyoutOnly true
# Mission 3

```blocks
player.onChat("level3", function () {
    for (let i = 0; i < 2; i++) {
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
        CodeCosmos.agentTurn(AgentTurn.Left)
        CodeCosmos.agentTurn(AgentTurn.Left)
    }
}
```

```template
player.onChat("level3", function () {
    CodeCosmos.collectPlastic()
})
```
## Collect plastic
Use the learning platform to solve the exercise.