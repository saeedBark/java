package demo.src.main.java.com.example;

import demo.src.Carre;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        Carre p1 = new Carre(4);
        System.out.println(p1.getLargeur());
  p1.affiche();

    }
}
















// class Personne


// class Personne
// {
// String prenom; int age = -1;
// // constructeur par défaut
// Personne( ){prenom="";} // constructeurs avec paramètres
// Personne(String prenom) { this.prenom = prenom; }
// Personne(String prenom, int age)
// { this(prenom) ; this.age = age; }
// // surcharge de la méthode héritée de Object 
// public String toString() {
// String retour = (prenom!=null?(prenom+ ", " ):"");
// if(age>=0) retour = retour + " age : " + age;
// return retour;
// }
// }