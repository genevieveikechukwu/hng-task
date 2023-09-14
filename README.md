# hng-task

> [!NOTE]

## How to use: For mere mortals

## UML Diagram 
[Sequence Diagram] (https://lucid.app/publicSegments/view/4146ee01-03d4-4a56-aa67-a338162a3f8a/image.png)

### Requirements:

- NodeJs
- Git (Optional but ideal)

### Running the application

- Clone the repo
- `cd` into the repo
- (Optional) create and activate virtual environment with Virtualenv as .venv
- (Optional) run the command `make dev-setup`
- (If above step is skipped ) `pip install -r requirements.dev.txt` and then `pre-commit install`
- Duplicate the file named ".env.example", rename the new copy to ".env".
- Edit the content of the `.env` file as you want.
- Perform migrations with `python manage.py migrate`, after `python manage.py makemigrations`
- To start the server, run `python manage.py runserver`.
- You can start making requests by visiting [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Running Tests

- Simply run tests with either `python manage.py test` or simply `pytest`
- For a more detailed test report `make test`

### Format code

- make code look cleaner and more readable with `make format`

### Commit

The Format and Test hook will be run when creating a commit. if any fails, make fixes (If it has not been fixed already automatically)  and then:

- `git add .`
- `git commit -m "[Commit type]: [Message]"`
- `git push ` to your branch.

### Info

If you are facing difficulty with getting Make installed on your machine(or just don't want to), You can simply just run the commands Make would have run instead, Manually. Do this by opening the Makefile and copying and pasting the commands you need in your Terminal directly.

_Note:_
Most of the docs are in the [Contributions section](CONTRIBUTIONS/README.md).
Check it if (when) you need help.
