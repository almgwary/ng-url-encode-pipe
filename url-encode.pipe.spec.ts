


import { UrlEncodePipe } from './url-encode.pipe';

describe('UrlEncodePipe', () => {
  let pipe: UrlEncodePipe;

  beforeEach(() => {
    pipe = new UrlEncodePipe();
  });

  it('should return empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should encode space: [ ]', () => {
    expect(pipe.transform(' ')).toBe('%20');
    expect(pipe.transform(' a')).toBe('%20a');
    expect(pipe.transform('a a')).toBe('a%20a');
    expect(pipe.transform('a ')).toBe('a%20');
  });


  it('should encode slash: [/]', () => {
    expect(pipe.transform('/')).toBe('%2F');
    expect(pipe.transform('/a')).toBe('%2Fa');
    expect(pipe.transform('a/a')).toBe('a%2Fa');
    expect(pipe.transform('a/')).toBe('a%2F');
  });

  
  it('should encode comma: [,]', () => {
    expect(pipe.transform(',')).toBe('%2C');
    expect(pipe.transform(',a')).toBe('%2Ca');
    expect(pipe.transform('a,a')).toBe('a%2Ca');
    expect(pipe.transform('a,')).toBe('a%2C');
  });

  
});
