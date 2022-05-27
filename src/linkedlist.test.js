import { SinglyLinkedList } from './linkedList';

// Testing the add method.
describe('linkedList', () => {
  it('can add new nodes onto the end of a list', () => {
    const list = new SinglyLinkedList();

    // Test adding a single node to an empty linked list.
    list.add('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "cheese",
        },
      }
    `);

    // Test adding a second node to a linked list with data.
    list.add('sauce');
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

// Testing the addFirst method.
describe('linkedList', () => {
  it('can add new nodes onto the start of a list', () => {
    const list = new SinglyLinkedList();

    // Test adding a single node to an empty linked list.
    list.addFirst('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "cheese",
        },
      }
    `);

    // Test adding a second node to a linked list with data.
    list.addFirst('sauce');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": null,
            "value": "cheese",
          },
          "value": "sauce",
        },
      }
    `);
  });
});
