trigger FutureMethodTriggerExample2 on User (After insert) {
    If(trigger.isInsert && trigger.isAfter)
     {
        
        FutureMethodHandlerExample2.FutureMethodExample2(Trigger.newMap.keySet());
        
     }
}