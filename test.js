import inquirer from 'inquirer';

inquirer.createPromptModule([
{
    name: 'greeting',
    message: 'what would you like to say?',
    type: 'input'
}])
.then(function(answer) {
    console.log(answer);
});