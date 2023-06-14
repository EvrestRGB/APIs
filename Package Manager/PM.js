const express = require('express');
const nodegit = require('nodegit');

const app = express();

app.post('/clone', async (req, res) => {
  const { repoUrl, targetPath } = req.body;

  try {
    await nodegit.Clone(repoUrl, targetPath);
    res.json({ message: 'Dépôt Git cloné avec succès' });
  } catch (error) {
    console.error('Erreur lors du clonage du dépôt Git:', error);
    res.status(500).json({ error: 'Erreur lors du clonage du dépôt Git' });
  }
});

app.listen(3000, () => {
  console.log('API de gestion de fichiers démarrée sur le port 3000');
});