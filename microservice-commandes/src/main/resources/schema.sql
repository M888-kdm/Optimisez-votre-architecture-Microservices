CREATE TABLE commande
(
    id            INT PRIMARY KEY,
    commandePayee INT NOT NULL,
    productId     INT NOT NULL,
    dateCommande  DATE NOT NULL,
    quantite      INT NOT NULL
);