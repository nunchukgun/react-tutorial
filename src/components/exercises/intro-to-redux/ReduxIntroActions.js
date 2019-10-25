/*
NOTES ON ACTIONS:

Action types:
    the convention for action types is to use capital letters with snake case. Deliberately reminiscent of constants.
Action payloads:
    Can have any number of fields, so long as they have a "type", which is what the reducer uses to determine how to process them.
    Generally, I never have more than one "payload" attribute on an action object. This is a choice, not a rule.
    
Note that while none of the above are strictly necessary for redux to function, I strongly advise that you follow the general standards set out for you.
 */


const uselessExampleAction = (param1, param2) => {
    return {
        type: 'INSERT_ACTION_TYPE_HERE',
        someFieldName: param1 + param2,
        anotherFieldName: param1,
        aThirdFieldName: param2
    }
}