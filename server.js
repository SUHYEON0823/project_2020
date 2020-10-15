var express = require('express');

var swtoolRouter = require("./routes/SwtoolRout");

var app = express();

app.use("/api/Swtool", swtoolRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));