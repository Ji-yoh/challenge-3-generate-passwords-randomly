# generate-passwords-randomly

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Acceptance Criteria Simplified

This project is about creating a password generator. The majority of the HTML has been done for you, all you have to do is fill in the actual generator.

* When the generate button is clicked, show the user the a series of prompts asking them for critieria. You will want to ask the following questions (it's recommended you use a `confirm` dialog unless otherwise specified):
    * What length do they want? (It's recommended you use a `prompt` for this)
    * Do they want uppercase letters? 
    * Do they want lowercase letters?
    * Do they want numeric characters?
    * Do they want special characters?
* If the user inputs invalid data (must select at least one character type, length must be between 8 and 128), then repeat the popups until they select correct data.
* Once the criteria are selected, then use a random number generator to generate the new password and place it in the given space in the HTML. There are a number of ways to do this, the instructional staff can help with hints on this if you need.

## Development
```
Cloned starter code from student repo and created generatePassword function. 
Received assistance from BCS since function was initially only pulling 1 random character. 
Stored user input for PW length in variable and used IF statements for character type confirmations.
Added error messages if user requests password exceeding 128 characters or less than 8 characters, and if user does not select at least one character type.

Deployed link: https://ji-yoh.github.io/challenge-3-generate-passwords-randomly/
```

## Screenshots

!["Generator displaying random password."](./assets/generator%20screenshot.png)

!["Password length error message."](./assets/return%20error%20message_2.png)

!["No character selected error message."](./assets/return%20error%20message_1.png)
