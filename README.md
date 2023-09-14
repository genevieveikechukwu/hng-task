# hng-task

> [!NOTE]

## How to use: For mere mortals

## UML Diagram 
### **[Sequence Diagram](https://lucid.app/publicSegments/view/4146ee01-03d4-4a56-aa67-a338162a3f8a/image.png)**

### Requirements:

- NodeJs
- Git (Optional but ideal)

### Running the application

- Clone the repo
- `cd` into the repo
- npm install
- Duplicate the file named "example.env", rename the new copy to "config.env".
- Edit the content of the `.env` file with your own atlas db, can't share mine sorry :smirk:
- npm run dev
- You can start making requests by visiting [http://127.0.0.1:8000/api](http://127.0.0.1:8000)

### Running Tests on Postman

- Simply run tests with either `python manage.py test` or simply `pytest`
- For a more detailed test report `make test`


### Commit

The Format and Test hook will be run when creating a commit. if any fails, make fixes (If it has not been fixed already automatically)  and then:

- `git add .`
- `git commit -m "[Commit type]: [Message]"`
- `git push ` to your branch.


