### @hideIteration true
### @flyoutOnly true
# Mission 3

```blocks
player.onChat("level4", function () {
    for (let index = 0; index < 4; index++) {
        CodeCosmos.agentMoveForward()
        agent.turn(TurnDirection.Left)
        CodeCosmos.agentMoveForward()
        CodeCosmos.collectPlastic()
        agent.turn(TurnDirection.Right)
    }
    
    for (let index = 0; index < 4; index++) {
        agent.turn(TurnDirection.Right)
        CodeCosmos.agentMoveForward()
        agent.turn(TurnDirection.Left)
        CodeCosmos.agentMoveForward()
        CodeCosmos.collectPlastic()
    }
    
}
```

```template
player.onChat("level4", function () {
    CodeCosmos.collectPlastic()
})
```
## Collect plastic
Use the learning platform to solve the exercise.