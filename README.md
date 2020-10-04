## FilmJunkie.com Website
### Solo Project by Andrew Thomas (vz19513@bristol.ac.uk)

### Description
This was a website for a fictional group of film critics, intended to host their reviews as well as some basic information about the group.

The website comprises both static and dynamic pages.

**Static or Semi-Static**: about, contact, home
* Use Jade templates to make use of inheritance. For example, to keep the main interface consistent.
* HTML/CSS with some Javascript to display slideshows.
* Uses Google Maps API to display location
* CSS style-sheets for various effects (such as images fading-in)
      
**Dynamic**: review pages
* Many details of the review pages were dynamically populated, using SQL queries.
* jQuery and an Sqlite3 database to populate the film and critic details
* Uses SELECT queries and the results were returned as a JSON object.
* Each review had a unique ID (part of the filename) which was used to search the database for the relevant details.

### Run Instructions
Run using command: 
	DEBUG=website:* npm start
	
Access via: https://localhost:3000/

The browser will likely flag an unsecure warning due to the self-signed security certificate.
	
### Adding Films to Table
The following SQL query will add the entry for Knives Out into the database.

E.g. INSERT INTO Employees VALUES ('4','2019-12-01', 'Ms','Miller','Sarah','Comedy',3,'KnivesOut','Knives Out');
