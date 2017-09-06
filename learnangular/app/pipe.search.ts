import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
    console.log("pipeData : " + JSON.stringify(pipeData));
    return pipeData.filter((eachItem) => {
      return eachItem['name'].includes(pipeModifier);
      
    })
  }
}
