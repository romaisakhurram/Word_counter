#! /usr/bin/env node
import inquirer from "inquirer"; 

const answer : {
    Sentence : string;
} = await inquirer.prompt
([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the word:"
    }
])

const words = (answer.Sentence.trim().split(" "))

//Print the array of the word to the console
console.log(words);

//Print the word count of the sentence to the console
console.log(`Your sentence the word count is : ${words.length}`);


