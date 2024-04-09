import { Card, List } from '@prisma/client';

export type ListWithCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };

/*
    1. Custom rules; ✅
        [
            {rule: (i: number) => i % 3 === 0 || i % 5 === 0, word: 'FizzBuzz'},
            {rule: (i: number) => i % 3 === 0 && i <= 12, word: 'Caracas'}
        ]

    2. Custom defined array instead of n; ✅
        inputNumbers: [1, 1, 2, 3, 5, 8, 13, 21, 34]

    3. Custom callBack function; ✅
        (i) => console.log(`${i} - Codefinity🔥`) 
*/

type ResultType = string[];

type CallbackType = (s: string) => void;

type RuleCheckingType = (i: number) => boolean;

type RuleType = { rule: RuleCheckingType; word: string };

const limit = 20;

const defaultRules: RuleType[] = [
  { rule: (i: number) => i % 3 === 0 && i % 5 === 0, word: 'FizzBuzz' },
  { rule: (i: number) => i % 3 === 0, word: 'Fizz' },
  { rule: (i: number) => i % 5 === 0, word: 'Buzz' },
];

const checkRulesAndGetWord = (num: number, rules: RuleType[]): string => {
  let word = '';
  for (let j = 0; j < rules.length; j++) {
    const { rule, word: ruleWord } = rules[j];

    if (rule(num)) {
      word = ruleWord;
      break;
    }
  }

  return word || num.toString();
};

const fizzBuzz = ({
  rules = defaultRules,
  limit,
  callBack,
  inputNumbers,
}: {
  limit?: number;
  rules?: RuleType[];
  callBack?: CallbackType;
  inputNumbers?: number[];
}): ResultType => {
  const result: ResultType = [];

  // Function to handle callback and append ruleWord to result
  const handleCallbackAndAppend = (
    i: number,
    rules: RuleType[],
    callBack?: CallbackType
  ) => {
    const word = checkRulesAndGetWord(i, rules);
    callBack && callBack(word);
    result.push(word);
  };

  // Check if inputNumbers is provided, if yes, iterate through them
  if (inputNumbers) {
    inputNumbers.forEach((i) => handleCallbackAndAppend(i, rules, callBack));

    // If limit is provided, create an array from 1 to limit and iterate through it
  } else if (limit) {
    [...Array(limit)]
      .map((_, x) => x + 1)
      .forEach((i) => handleCallbackAndAppend(i, rules, callBack));
  }

  console.log(result);
  return result;
};

fizzBuzz({ limit });
