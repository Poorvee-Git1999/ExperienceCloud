trigger FutureMethodExample1 on User (after insert) {
    if ((trigger.isAfter) && (trigger.isInsert)) {
        FutureMethodHandlerExample1.FutureMethodExample1(trigger.new);
    }

}