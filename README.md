## Implemented parts:
- [Live deloy](https://an1mus.github.io/react-ui/) 
- Please develop using React framework ✅
- JSON data for display is taken with axios and connected through redux ✅
- Be able to switch from main tab to other tabs - other tabs should feature a stub
content (like “SAMPLE PAGE” or “Lorem ipsum..” text) ✅
- Tapping on Send in Support Requests table should mark the respective line as
“Sent” ✅
- “Add” button - adds a random line to table at its top - pick data from  ✅
The design should be responsive (on a best-effort basis) ✅

- You are provided with images within Zeplin where needed (for example, do not draw the
graphs manually) 🛑 

## Your engineering assumptions
### Solution thought process
- The design implemented in a smaller resolution, so I had to rescale it from  place to place;
- Using typescript is a usual thing;
- Adding styled-components here and there made the development faster;
- Redux was applied at some point, since there is no React app without;
- The whole app quality collapses with images in the wrong place, so I've drawn charts by hand and it payed off;
- Proper responsiveness should take a while but there is a background for it, made with bootstrap;  

### What you would do differently in a production environment
- Tests;
- Add types;
- Add mock db to work with data;
- Divide data from JSON file;
- I would take more time on responsiveness;
- Use more actions and reducers, but it comes from 'Divide data';
- Error handling;

### Parts not handled/not handled optimally on purpose and why:
- Most of those parts are not handled because I wen over the time dedicated. 
But there was no point to submit the app, before doing all those things.
- I have removed 2 of the app elements from design on purpose, since they were more presentational;

### Execution instructions
- clone repo;
- `npm i`;
- `npm start`;
- open [http://localhost:3000](http://localhost:3000);
