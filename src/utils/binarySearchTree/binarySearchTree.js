class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const validateBST = (tree) => validateBSTHelper(tree, -Infinity, Infinity);

const validateBSTHelper = (tree, minValue, maxValue) => {
    // console.log(tree);
    if (tree === null){
        // console.log('The tree is null');
        return true;
    } 
    if(tree.value < minValue || tree.value >=maxValue) return false;
    const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
    
    return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
}

exports.BST = BST;
exports.validateBST = validateBST;