const cold_compress = (input) => {

    const everything = "1234567890!@#$%^&*qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLXCVBNM:;?><._-+=";
    const everything_array = everything.split('');
    // console.log(everything_array);
    const lines = input.split(/\r?\n/);
    const lineMapArray =[];
    // console.log(lines);
    // console.log('before for each ');
    lines.forEach(line => {
        const lineMap = processLine(line);
        lineMapArray.push(lineMap);
    });
    const output = processLineMap(lineMapArray);
    console.log(output);
    return output;
}

const processLine = (line) => {
    let previous_character = '';
    const line_array = line.split('');
    const lineMap = new Map();
    let counter = 1;
    let key;
    line_array.forEach((el) => {
        if (el == previous_character){
            const current_quantity = lineMap.get(key);
            lineMap.set(key, current_quantity + 1);
        } else {
            counter = counter + 1;
            key = counter + el;
            lineMap.set(key, 1);
        }
        previous_character = el;
    });
    // console.log(lineMap);
    return lineMap;
};

const processLineMap = (lineMapArray) => {
    let output;
    lineMapArray.forEach(map => {
        // console.log(map);
        for (let key of map.keys()) {
            const actualKey = key.split('');
            const char = actualKey[1];
            const value = map.get(key);
            // the below is a ternerary statement which ensures the output is not null or undefined. 
            output = output ? output + value + ' ' +  char + ' ' : '' + value + ' ' +  char + ' ' ;
        }
        output = output + "\r\n";
    });
    // console.log(output);
    
    return output;
}

const newLine = (lineMap) => {
    let newLine = "";
    for (let [key, value] of lineMap.entries()) {
        console.log(key + ' = ' + value);
    }
    return newLine
}



export default cold_compress;