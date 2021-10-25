import * as organization from '../src/services/organizationService';

describe('Organization test', () => {
  test('Should generate a index name passing the organization name', async () => {
    let inputTitle = 'My Organization';
    let expectedValue = 'my_organization';
    expect(organization.sanitizeIndex(inputTitle)).toBe(expectedValue);
  });

  test('Test if the relationship sibling is correctly generated', async () => {
    let inputTitle = 'My Organization';
    let expectedValue = 'my_organization';
    expect(organization.sanitizeIndex(inputTitle)).toBe(expectedValue);
  });

});
