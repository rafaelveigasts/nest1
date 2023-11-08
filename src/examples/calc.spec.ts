export function add(x: number, y: number): number {
  return x + y;
}

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
