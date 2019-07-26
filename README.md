# word-of-the-day-server
Coosto hackaton word of the day server

For this server I use Node.js. With expres and sequelize.

File structure:
db.js               setup of the DB connection with sequelize
index.js            setup of the expres server
word =>
    model.js        the model for the word table
    routes.js       the endpoints available
    
Endpoints:
/word GET = get the word of the day
/word POST = post the word of today

/words GET = get all words of the day
