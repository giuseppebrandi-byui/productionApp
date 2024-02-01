import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sampleFoods } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    // array of objects of type Food
    return sampleFoods;
  }

  getById(idInput: string): Food | undefined {
    // logic
    const chosenFood: Food[] = sampleFoods.filter(
      (choice) => choice.id === sanitizeInputField(idInput)
    );
    if (chosenFood.length == 0) {
      return undefined;
      // throw new Error('Invalid Id');
    }
    return chosenFood[0];
  }

  // input sanitizer
  getByName(nameInput: string): Food | undefined {
    // logic
    const chosenFood: Food[] = sampleFoods.filter(
      (choice) => choice.name.toLowerCase() === sanitizeInputField(nameInput)
    );
    if (chosenFood.length !== 0) {
      return chosenFood[0];
      //   throw new Error('Invalid Name');
    }
    return undefined;
  }

  getByTag(tagInput: string): Food[] | [] {
    const chosenFoodByTag: Food[] = sampleFoods.filter((choice) =>
      choice.tags?.includes(sanitizeInputField(tagInput) as string)
    );
    if (chosenFoodByTag.length == 0) {
      // throw new Error('Invalid Tag');
      return [];
    }
    return chosenFoodByTag;
  }

  getByOrigin(originInput: string): Food[] | [] {
    const chosenFoodByOrigin: Food[] = sampleFoods.filter((choice) =>
      choice.origins?.includes(sanitizeInputField(originInput) as string)
    );
    if (chosenFoodByOrigin.length == 0) {
      // throw new Error('Invalid Origin');
      return [];
    }
    return chosenFoodByOrigin;
  }

  analizeSearch(input: string | number): Food[] | [] {
    const idValue: Food | undefined = this.getById(input as string); // 1
    const nameValue: Food | undefined = this.getByName(input as string); // 6
    const originValue: Food[] | [] = this.getByOrigin(input as string).filter(
      function (element) {
        return element !== undefined;
      }
    ); // 1, 2, 3
    const tagValue: Food[] | [] = this.getByTag(input as string).filter(
      function (element) {
        return element !== undefined;
      }
    ); // 3, 4, 5

    const ids = new Set(originValue.map((food) => food.id));
    const mergeFoodArrays = [
      // 1, 2, 3, 3, 4, 5
      ...originValue,
      ...tagValue.filter((food) => !ids.has(food.id)),
    ];

    const undefinedArray = idValue != undefined ? [idValue] : [];
    const undefinedArray2 = nameValue != undefined ? [nameValue] : [];
    const mfaId = new Set(mergeFoodArrays.map((food) => food.id)); // 1, 2, 3, 4, 5
    return [
      ...mergeFoodArrays, // 1, 2, 3, 4, 5
      ...undefinedArray
        .concat(undefinedArray2) // 1, 6
        .filter((food) => food != undefined && !mfaId.has(food.id)), // 1, 2, 3, 4, 5, 6
    ];
  }
}

function sanitizeInputField(input: string | number): string | number {
  let finalValue: string = input.toString().toLowerCase();
  finalValue = finalValue.replace(/[^A-Za-z0-9]/g, '');
  if (typeof input === 'number') {
    return Number(finalValue);
  } else {
    return finalValue;
  }
}

// name (parameterName : parameterType)
// name (parameterName : parameterType) : typeOfReturnStatement
// name (parameterName : parameterType) : typeOfReturnStatement {
// // logic
// name (parameterName : parameterType) : typeOfReturnStatement {
// // logic
// return .... typeOfAbove....
// }
