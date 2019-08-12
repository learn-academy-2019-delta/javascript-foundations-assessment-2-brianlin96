# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### From memory, answer the following:

1. What's the difference between =, ==, and === in JavaScript?
= assigns variables. == will check if it is loosely equal to. === will check if it is exacty equal to 


2. What is the difference between an array's index and length?
The index is the indiviual elements of an array exist inside the array. The length is the number of elements inside the array.


3. What is a function's declaration, argument, and call?
Function declaration is writing out that you are going to be defining a function and what it does. The argument is what variable the  function will take in and use. The call is invoking the function so that it will run on a variable that you give it if it needs one. 


4. What are the three main steps in saving work to github?
git add
git commit -m
git push


5. What is an object?
The intersection of data and behavior 


### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
It will print undefined

1b. Test the function. Explain why the function returned what it did.

  Your answer: var text is being hoisted to the top of the function and therefore is undefined

  Researched answer: the function actually looks like: 
var text = 'outside'
function logIt(){
  var text;
  console.log(text)
  text = 'inside'
}
logIt()
As a result, you are initializing text, but text doesn't contain anything except undefined. Then you print undefined.

2. What is JSON? How does it relate to javascript objects?

  Your answer: Javascript object notation and is the format the javascript objects are written in.

  Researched answer: In computing, JavaScript Object Notation (JSON) (/ˈdʒeɪsən/ "Jason",[1][2] /ˈdʒeɪsɒn/) is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value).


3. What does CRUD stand for?

  Your answer: Create, Read, Update, Destroy/Delete

  Researched answer: CRUD is also relevant at the user interface level of most applications. For example, in address book software, the basic storage unit is an individual contact entry. As a bare minimum, the software must allow the user to create or add new entries; read, retrieve, search, or view existing entries; update or edit existing entries; delete, deactivate, or remove existing entries.


4. What is a higher-order function?

  Your answer: A function that contains a callback function 

  Researched answer: In mathematics and computer science, a higher-order function is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result. All other functions are first-order functions.


5. Stretch: What is a closure, what is it good for and how do you recognize one?

  Your answer: Don't know

  Researched answer: A closure is a function having access to the parent scope, even after the parent function has closed. It is good for making private variables for functions. You can recognize them with nested functions where it calls the inner function in the outer function


6. Stretch: What is an API?

  Your answer: Application program interface. It is a bunch of JSON objects that are able to interacted with. 

  Researched answer: In computer programming, an application programming interface is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
No


2. What was your favorite topic this week?
React


3. What was your "A-ha!" moment this week?
When I realized I forgot to put a return statement in my code.