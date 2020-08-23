const cold_compress = (input) => {

    const output = [];

    const everything = "1234567890!@#$%^&*qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLXCVBNM:;?><._-+=";
    const everything_array = everything.split('');
    // console.log(everything_array);
    const lines = input.split(/\r?\n/);
    // console.log(lines);
    console.log('before for each ';
    lines.forEach = (line) => {
        const lineMap = processLine(line);
        console.log('lineMap ' + lineMap);
    }
    
};

const processLine = (line) => {
    let previous_character = '';
    const line_array = line.split('');
    const lineMap = new Map();
    let counter = 1;
    line_array.forEach((el) => {
        if (el == previous_character){
            counter = counter + 1;
            key = index + el;
            const current_quantity = lineMap.get(el);
            lineMap.set(key, current_quantity + 1);
        } else {
            counter = 1;
            key = counter + el;
            lineMap.set(key, 1);
        }
        previous_character = el;
    });
    console.log('console.log(lineMap) ' + lineMap);
    return lineMap;
};

const newLine = (lineMap) => {
    let newLine = "";

    for (let [key, value] of lineMap.entries()) {
        console.log(key + ' = ' + value);
    }

    return newLine
}



export default cold_compress;