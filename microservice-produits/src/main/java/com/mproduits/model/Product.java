package com.mproduits.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private int id;
//
//    @Column(name = "titre")
//    private String titre;
//
//    @Column(name = "description")
//    private String description;
//
//    @Column(name = "image")
//    private String image;
//
//    @Column(name = "prix")
//    private Double prix;
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getTitre() {
//        return titre;
//    }
//
//    public void setTitre(String titre) {
//        this.titre = titre;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
//
//    public Double getPrix() {
//        return prix;
//    }
//
//    public void setPrix(Double prix) {
//        this.prix = prix;
//    }
//
//    @Override
//    public String toString() {
//        return "Product{" +
//                "id=" + id +
//                ", titre='" + titre + '\'' +
//                ", description='" + description + '\'' +
//                ", image='" + image + '\'' +
//                ", prix=" + prix +
//                '}';
//    }
    @Id
    private Long id;  // Assuming ID is a numeric type, adjust accordingly

    @Column(name = "name")
    private String name;

    @Column(name = "category")
    private String category;

    @Column(name = "price")
    private String price;

    @Column(name = "model")
    private String model;

    @Column(name = "about")
    private String about;

    @Column(name = "product_specification")
    private String productSpecification;

    @Column(name = "technical_details")
    private String technicalDetails;

    @Column(name = "weight")
    private String weight;

    @Column(name = "image")
    private String image;

    @Column(name = "url")
    private String url;

    @Column(name = "is_amazon_seller")
    private String isAmazonSeller;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getProductSpecification() {
        return productSpecification;
    }

    public void setProductSpecification(String productSpecification) {
        this.productSpecification = productSpecification;
    }

    public String getTechnicalDetails() {
        return technicalDetails;
    }

    public void setTechnicalDetails(String technicalDetails) {
        this.technicalDetails = technicalDetails;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIsAmazonSeller() {
        return isAmazonSeller;
    }

    public void setIsAmazonSeller(String isAmazonSeller) {
        this.isAmazonSeller = isAmazonSeller;
    }
}
