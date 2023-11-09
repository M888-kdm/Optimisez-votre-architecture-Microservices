CREATE TABLE paiement
(
    id          INT PRIMARY KEY,
    idCommande  INT NOT NULL,
    montant     INT NOT NULL ,
    numeroCarte INT NOT NULL
);