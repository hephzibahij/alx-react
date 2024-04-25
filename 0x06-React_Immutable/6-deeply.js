import { Map, List } from 'immutable';

function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);

    return List.of(map1.mergeWith((oldVal, newVal) => {
        if (oldVal && oldVal.mergeDeep) {
            return oldVal.mergeDeep(newVal);
        }
        return newVal;
    }, map2));
}
