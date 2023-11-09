CREATE TABLE commande
(
    id            INT PRIMARY KEY,
    product_id     INT NOT NULL,
    commande_payee INT NOT NULL,
    date_commande  DATE NOT NULL,
    quantite      INT NOT NULL
);