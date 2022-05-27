import { SinglyLinkedList } from './linkedList';

describe('linkedList', () => {
  it('can push new nodes onto the list', () => {
    const list = new SinglyLinkedList();

    list.push('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "value": "cheese",
        },
      }
    `);

    list.push('sauce');
    console.log(list)
  });
});
