import { validateBST } from './binarySearchTree.js'

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

describe('tests the array filter', () => {

    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);    
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);


    it('tests the BST to see if it is valid', () => {
      expect(validateBST(root)).toEqual(true);
    });
});