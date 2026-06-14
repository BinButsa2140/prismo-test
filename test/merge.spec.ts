import { describe, it, expect } from '@jest/globals';
import merge from '../merge';

describe("Merge Function", () => {
  it("Happy Path ควรทำงานได้ถุกต้องตามปกติ ในกรณีปกติ", () => {
    let c1 = [1, 2, 3, 4, 5];
    let c2 = [10, 9, 8, 7, 6];
    let c3 = [11, 12, 13, 14, 15];

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(merge(c1, c2, c3)).toEqual(expected);
  });
  it("กรณีที่มีเลขซ้ำ", () => {
    let c1 = [1, 2, 3, 4, 5];
    let c2 = [10, 9, 8, 7, 6];
    let c3 = [4, 5, 6, 7, 8];
    const expected = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
  it('ควรทำงานได้ถุกต้อง ในกรณ๊ที่มีความยาวไม่เท่ากัน', () => {
    const c1 = [1, 10]; 
    const c2 = [8, 5, 4, 2]; 
    const c3 = [3, 7]; 
    const expected = [1, 2, 3, 4, 5, 7, 8, 10];
    
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
  it('จัดการกรณีที่มี Array ว่าง', () => {
    const c1: number[] = [];
    const c2 = [6, 5, 3, 1];
    const c3: number[] = [];
    const expected = [1, 3, 5, 6];
    
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
  it('จัดการเลข 0 และเลขติดลบได้อย่างถูกต้อง', () => {
    const c1 = [-5, 0, 2];
    const c2 = [5, 0, -2];
    const c3 = [-10, 1, 3];
    const expected = [-10, -5, -2, 0, 0, 1, 2, 3, 5];
    
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
});
