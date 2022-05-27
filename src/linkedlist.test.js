import { SinglyLinkedList } from './linkedList';
// Testing the push method.
describe('linkedList', () => {
  it('can push new nodes onto the end of a list', () => {
    const list = new SinglyLinkedList();

    // Test adding a single node to a linked list.
    list.push('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "cheese",
        },
      }
    `);

    // Test adding a second node to a linked list.
    list.push('sauce');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": null,
            "value": "sauce",
          },
          "value": "cheese",
        },
      }
    `);
  });
});
