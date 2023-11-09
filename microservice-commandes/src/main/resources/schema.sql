CREATE TABLE commande
(
    id            INT PRIMARY KEY,
    productId     INT NOT NULL,
    dateCommande  DATE NOT NULL,
    quantite      INT NOT NULL,
    commandePayee SMALLINT NOT NULL
);