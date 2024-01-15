package demo.src.main.java.com.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Couple p1 = new Couple();
// p2 est un clone de p1
System.out.println(p1.v1);
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