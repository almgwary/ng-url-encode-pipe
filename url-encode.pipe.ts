import { Pipe, PipeTransform } from '@angular/core';

/**
  * UrlEncodePipe is a pipe to encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param value represent to be encoded.
  */
@Pipe({
  name: 'urlEncode'
})
export class UrlEncodePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let encodedValue = encodeURIComponent(value)
    return  encodedValue;
  }

}
