export function nodelist2array(nodelist) {
    var array = [];
    for (var index = 0; index < nodelist.length; index++) {
        array.push(nodelist[index]);
    }
    console.log(array);
    return array;
}