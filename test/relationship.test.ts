import * as relationship from '../src/services/relationshipService';

describe('Relationship test', () => {

  test('Test if the relationship sibling is correctly generated', async () => {
    const expected = JSON.stringify([{
        source_id: 1,
        target_id: 2,
        relationship: 3
    },
    {
        source_id: 2,
        target_id: 1,
        relationship: 3
    }]);
    const response = JSON.stringify(relationship.generateSiblingRelationship([1,2]));
    expect(response).toBe(expected);
  });

});
