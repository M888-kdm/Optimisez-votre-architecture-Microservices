package com.mproduits.web.controller;

import com.mproduits.configurations.ApplicationPropertiesConfiguration;
import com.mproduits.dao.ProductDao;
import com.mproduits.model.Product;
import com.mproduits.web.exceptions.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ApplicationPropertiesConfiguration appProperties;

    // Affiche la liste de tous les produits disponibles
    @PostMapping (value = "/")
    public ResponseEntity<Product> ajouterProduit(@RequestBody Product product){
        Product nouveauProduit = productDao.save(product);

        if(nouveauProduit == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @GetMapping(value = "/")
    public List<Product> listeDesProduits()
    {
        List<Product> products = productDao.findAll();

        if(products.isEmpty()) throw new ProductNotFoundException("Aucun produit n'est disponible à la vente");

        // List<Product> listeLimitee = products.subList(0, appProperties.getLimitDeProduits());

        // return listeLimitee;
        return products;
    }

    //Récuperer un produit par son id
    @GetMapping( value = "/{id}")
    public Optional<Product> recupererUnProduit(@PathVariable int id) {

        Optional<Product> product = productDao.findById(id);

        if(!product.isPresent())  throw new ProductNotFoundException("Le produit correspondant à l'id " + id + " n'existe pas");

        return product;
    }
}

