# Homework 16.1
## Design Pattern: Prepare Statement
1. Use the database from design_pattern.sql (can not download).
2. Write Koa.js to build an API as following result:
    - path:`/instructor/find_all` display a JSON API of all instructors.
    - path:`/instructor/find_by_id/:id` get a value to display the instructor's JSON API specified ID from the instructor table.
    - path:`/course/find_by_id/:id` get a value to display the JSON API of course specified ID from the course table.
    - path:`/course/find_by_price/:price` get a value to display the JSON API of course specified price from the course table.
3. Every route should be prepare statements for send the query safely.
4. Do not use MVC project structure yet, Can put everything to an index.js.
