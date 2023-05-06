<h1>A Polling Api System</h1>

<h2>API Documentation Link: https://documenter.getpostman.com/view/27270041/2s93eYTWiy</h2>

<h2>Language and Database Used </h2><br>
<ul>
 <li>NodeJS </li>
 <li>ExpressJS</li> 
 <li>MongoDB </li>
 <li>Mongoose </li>
</ul>

<h2>Features ✨✨</h2> <br>
<ul>
    <li>Create a question</li>
    <li>Add options to a question</li> 
    <li>Add a vote to an option of question</li> 
    <li>Delete a question</li> 
    <li>Delete an option</li> 
    <li>View a question</li> 
</ul>

<h2>Url Paths for performing actions 🔗🔗</h2> <br>
<ul>
    <li>To create a question :- http://localhost:8000/question/create </li><br>
    <li>To add options to a specific question :- http://localhost:8000/question/options/:QuesID/create </li><br>
    <li>To view a question and it’s options :- http://localhost:8000/question/view/:QuesID </li><br>
    <li>To increment the count of votes :- http://localhost:8000/options/:OptionID/add_vote </li><br>
   <li>To delete an option :- http://localhost:8000/options/delete/:OptionID </li><br>
    <li>To delete a question :- http://localhost:8000/question/delete/:QuesID </li><br>
    </ul>


