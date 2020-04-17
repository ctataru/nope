const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();
const INCLUDED_LANGUAGES = ['en', 'fr'];

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  const { l: language, n: rawName } = req.query;

  if (!rawName) {
    let makePugFile = 'views/make';

    if (INCLUDED_LANGUAGES.includes(language)) makePugFile += `/${language}.pug`;
    else makePugFile += '/en.pug';

    const template = pug.compileFile(makePugFile);
    return res.send(template());
  }

  let madePugFile = 'views/made';

  if (INCLUDED_LANGUAGES.includes(language)) madePugFile += `/${language}.pug`;
  else madePugFile += '/en.pug';

  const template = pug.compileFile(madePugFile);
  const name = Buffer.from(rawName, 'base64').toString()

  return res.send(template({ name }));
});



app.listen(process.env.PORT || 8080);