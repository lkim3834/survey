### **Edit Survey Pages**
Edit survey collects various types of information such as name, email, multiple choice questions, and other survey information edited and designed by the user. The edit survey contains 5 pages and each page is a container. The following sections include the description and functionality of each page.

### **Important Information Regarding URL**🔗
Every page container within Edit-survey is acquiring information from the URL. To access the survey, the URL must contain the surveyId. 
* surveyId: is the id of the survey!

### Error Handling 🐛
* If the link does not include a surveyId, then the edit-survey page will be blank.

### Future Improvements 💡
* Improve the UI components of the edit/pencil button.
* Improve the UI interface after clicking the edit button.

## Edit Survey (Parent container)
Loads the survey from the firestore using the corresponding surveyID. Surveys objects in firestore would be updated whenever the user clicks on the send button after editing the page. The following entities would be updated:

|   Entity                | Function used |
| -----------             | -----------   |
| title                   |  editToggle() |
| Description             |      -        |
| promptMainQuestion      |  editToggle() |
| promptFollowup          |   addyesno()  |
| promptGroupRating       |   addrating(), editToggle()    |

## Shared Components Used
### _app-yes-no_
* set the yes_or_no global string to update promptFollowup entity
* used @Input() and @Output() properties
   - In the child, the yes_no_question() function uses the @Output(), sendyesno , to raise an event in which it emits the value, corresponding yes or no response.
   - The (click) event is bound to the yes_no_question() method in the child component class which takes as its argument whatever the value of #newyesno is.
   - In the parent, the addyesno() method takes a string argument and updates a global string called yes_or_no, which will be used later to update Firestore inside the addItem function.

### app-multiple-choice container 
* set the group_rating global string to update promptGroupRating entity
* used @Input() and @Output() properties
   - In the child, the rating() function uses the @Output(), sendrating , to raise an event in which it emits the value, corresponding yes or no response.
   - The (click) event is bound to the rating() method in the child component class which takes as its argument whatever the value of #newrating is.
   - In the parent, the addrating() method takes a string argument and updates a global string called group_rating, which will be used later to update Firestore inside the addItem function.

### App-send-button
* Updates entities on firestore.
* used @Input() and @Output() properties
   - In the child, the rating() function uses the @Output(), sendProj.
   - In the parent, the addItem() method is used to update the entities.

### preview video



https://github.com/lkim3834/survey/assets/63019945/5556c4e2-782e-4afe-92ac-b161e9a20c4a


