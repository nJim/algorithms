import { SinglyLinkedList } from './linkedList';

describe('linkedList', () => {
  // Testing the addFirst method.
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

  // Testing the addLast method.
  it('can add new nodes onto the end of a list', () => {
    const list = new SinglyLinkedList();

    // Test adding a single node to an empty linked list.
    list.addLast('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "cheese",
        },
      }
    `);

    // Test adding a second node to a linked list with data.
    list.addLast('sauce');
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

  // Testing the add method.
  it('can add new nodes onto at a position in the list', () => {

    // Test adding a single node to an empty linked list at index zero.
    let list = new SinglyLinkedList();
    list.add(0, 'peppers');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "peppers",
        },
      }
    `);

    // Test adding a node to the first position.
    list = new SinglyLinkedList();
    list.addFirst('peppers');
    list.addFirst('onions');
    list.addFirst('mushrooms');
    list.add(0, 'cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": LLNode {
              "next": LLNode {
                "next": null,
                "value": "peppers",
              },
              "value": "onions",
            },
            "value": "mushrooms",
          },
          "value": "cheese",
        },
      }
    `);

    // Test adding a node to the last position.
    list.add(4, 'pepperoni');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": LLNode {
              "next": LLNode {
                "next": LLNode {
                  "next": null,
                  "value": "pepperoni",
                },
                "value": "peppers",
              },
              "value": "onions",
            },
            "value": "mushrooms",
          },
          "value": "cheese",
        },
      }
    `);

    // Test adding a node to a middle position.
    list.add(2, 'sausage');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": LLNode {
              "next": LLNode {
                "next": LLNode {
                  "next": LLNode {
                    "next": null,
                    "value": "pepperoni",
                  },
                  "value": "peppers",
                },
                "value": "onions",
              },
              "value": "sausage",
            },
            "value": "mushrooms",
          },
          "value": "cheese",
        },
      }
    `);

    // Test adding an element at an invalid position throws an error.
    list = new SinglyLinkedList();
    list.addFirst('cheese');
    expect(() => { list.add(5, 'extra-cheese'); }).toThrow(
      "Error: Provided index is too large for linked list."
    );
  });

  // Test the getFirst method.
  it('can get the first value from the linked list', () => {
    const list = new SinglyLinkedList();

    // Getting the first value from an empty linked list throws an error
    expect(() => { list.getFirst(); }).toThrow(
      "Error: The linked list does not contain any nodes."
    );

    // Test adding a node to the first position.
    list.addFirst('extra-cheese');
    expect(list.getFirst()).toEqual('extra-cheese');
  });

  // Test the getLast method.
  it('can get the last value from the linked list', () => {
    const list = new SinglyLinkedList();

    // Getting the last value from an empty linked list throws an error
    expect(() => { list.getLast(); }).toThrow(
      "Error: The linked list does not contain any nodes."
    );

    // Test adding a node to the first position.
    list.addFirst('extra-cheese');
    list.addLast('pepperoni');
    list.addLast('bacon');
    expect(list.getLast()).toEqual('bacon');
  });
});
