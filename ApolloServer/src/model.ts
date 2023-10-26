export class Commande {
    id: number;
    productId: number;
    date: string;
    quantite: number;
    commandePayee: boolean;
}

export class Produit {
    id: number;
    titre: string;
    description: string;
    image: string;
    prix: number;
}

export class Paiement {
    id: number;
    commandeId: number;
    montant: number;
    numeroCarte: number;
}