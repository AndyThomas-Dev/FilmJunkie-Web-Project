## FilmJunkie.com Website
### Solo Project by Andrew Thomas (vz19513@bristol.ac.uk)

### Description
This was a website for a fictional group of film critics, intended to host their reviews as well as some basic information about the group.

The website comprises both static and dynamic pages.

*Static*: about, contact
    *HTML/CSS with some Javascript to display slideshows
    *Use Jade templates to make use of inheritance (extends)
    *Uses Google Maps API to display location
    *CSS style-sheets for various effects (fade-in)
      
*Dynamic*: review pages
    *Many details of the review pages were dynamically populated, using SQL queries.
    *jQuery and an Sqlite3 database to populate the film and critic details
    *SELECT query and the results were returned as a JSON object.

### Run Instructions
Run using command: 
	DEBUG=website:* npm start
	
Access via: https://localhost:3000/

The browser will likely flag an unsecure warning due to the self-signed security certificate.
	
### Adding Films to Table

E.g. INSERT INTO Employees VALUES ('4','2019-12-01', 'Ms','Miller','Sarah','Comedy',3,'KnivesOut','Knives Out');
