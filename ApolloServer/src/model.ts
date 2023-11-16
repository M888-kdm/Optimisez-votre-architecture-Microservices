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
    idCommande: number;
    montant: number;
    numeroCarte: number;
}

export class User{
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    accessToken:string;
}

