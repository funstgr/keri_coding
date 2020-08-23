/* 
*   Keri this is a bock comment in javascript.
*   When you convert this to python please add comments similar to this 
*   so if you have a bug and you need help it is easier for me to see the problem
*
*/

const cold_compress = (input) => {

    const everything = "1234567890!@#$%^&*qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLXCVBNM:;?><._-+=";

    // convert the string to an array
    const everything_array = everything.split('');

    // split on the end of line character. You will have to check what this is in python
    const lines = input.split(/\r?\n/);

    // create an empty array to push to
    const lineMapArray =[];

    // iterate over each line and process the line
    lines.forEach((line, index) => {

        let lineMap;
        if(index > 0) {
            lineMap = processLine(line);
            // push the returned value to the array
            lineMapArray.push(lineMap);
        }
       
    });

    // iterate over the lineMap and return a string output
    const output = processLineMap(lineMapArray);

    // printing the output
    console.log(output);

    // return the output to the calling method  ..... called from the test file.
    return output;
}

const processLine = (line) => {
    let previous_character = '';
    const line_array = line.split('');
    const lineMap = new Map();

    // counter used to ensure each key is unique as maps can only have 1 key 
    // this removes the bug where the one line has 2 1's you will have to remove this counter value when you 
    // process the map later
    let counter = 0;
    let key;
    line_array.forEach((el) => {

        // check to see if you are creating a new key or incrementing the current key
        if (el == previous_character){
            const current_quantity = lineMap.get(key);
            lineMap.set(key, current_quantity + 1);
        } else {
            counter = counter + 1;
            key = el + counter;
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
            // get the char value
            const char = actualKey[0];
            // get the value using the key from the map
            const value = map.get(key);
            // the below is a ternary statement which ensures output is not null or undefined on the first pass 
            // when you have a number you need to use and empty string to add it to the beginning of a string ot you get an error
            output = output ? output + value + ' ' +  char + ' ' : '' + value + ' ' +  char + ' ' ;
        }
        output = output + "\r\n";
    });
    // console.log(output);
    
    return output;
}

export default cold_compress;