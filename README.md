About :

    A task manager where you can add, delete, and filter tasks.

    built with:

            Frontend: Next.js / React , Tailwind CSS, TanStack Query
            Backend: Node.js, Express, MongoDB, Mongoose

Getting Started:

    If you do not have MongoDB installed locally on your computer go to 
    
https://www.mongodb.com/docs/manual/installation/#std-label-tutorial-installation 
    
    to install and make sure to install community editions.

    Once installed its recommended to also install MongoDb Compass which is just a GUI for MongoDB, you can 
    install it at 
https://www.mongodb.com/try/download/compass

    

    Clone repo:

            git clone https://github.com/Michael-Riv/web-task-manager.git

    Install dependencies:

            cd backend

            npm install

            cd frontend

            npm install

    Start backend:

            cd backend

            npm start

        (runs at http://localhost:5050)
    
    Start frontend:

            cd frontend

            npm run dev

        (runs at http://localhost:3000)


    Now open a tab on your prefered browser and go to http://localhost:3000


    Features:

        -Search for task by title
        -Filter for task by either "due date", "complete","incomplete","Importance"
        -Toggle Complete or Incomplete for each task
        -Delete a task
        -Error handling
        -Input validation

    Issues:

        -Currently when adding tasks that exceed page it makes it scrollable which is fine
        but in a way that enlarges the page vertically. It would be better if it is scrollable within its
        own "box" and not having to have a clunky UI .

    NOTE: The .env files are only included so that users dont have to create that themselves. In actual 
    production these files arent shown to the public due to it having sensitive data. 


        

        




